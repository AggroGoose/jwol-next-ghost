import { SITE_SERVER } from "@/lib/utils/constants";
import { useRef, useState } from "react";

type ValidateStatus = "success" | "error" | "none";

export default function ResponseItem({
  elementId,
  userId,
  refetch,
  isReply = false,
  isEdit = false,
  editDefault = null,
  setOpenEdit = null,
  setOpenReply = null,
  toggleReplyList = null,
}: {
  elementId: string | number;
  userId: string;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  isReply?: boolean;
  setOpenReply?: React.Dispatch<boolean> | null;
  toggleReplyList?: React.Dispatch<boolean> | null;
  isEdit?: boolean;
  setOpenEdit?: React.Dispatch<boolean> | null;
  editDefault?: string | null;
}) {
  const [userStatus, setUserStatus] = useState<ValidateStatus>("none");
  const [feedback, setFeedback] = useState<string>("");
  const responseField = useRef<HTMLTextAreaElement>(null);

  const giveFeedback = (status: ValidateStatus, message: string) => {
    setUserStatus(status);
    setFeedback(message);
  };

  const handleCancel = () => {
    if (setOpenEdit) setOpenEdit(false);
    if (setOpenReply) setOpenReply(false);
  };

  const handleSubmit = async () => {
    if (!responseField.current?.value) {
      giveFeedback("error", "Please enter a response.");
      return;
    }
    const content = responseField.current.value;
    if (content.length > 500) {
      giveFeedback("error", "Response limit 500 characters.");
      return;
    }
    if (isEdit && setOpenEdit) {
      const responseId = Number(elementId);
      const args: GansoEditComRep = {
        id: responseId,
        content,
      };
      const res = await fetch(
        SITE_SERVER +
          `${isReply ? "comment/EditReply" : "comment/EditComment"}`,
        { method: "PUT", body: JSON.stringify(args) }
      );
      if (!res.ok) {
        console.error(res.status, res.statusText);
        giveFeedback("error", "Something went wrong, please try again.");
        return;
      }
      refetch();
      setOpenEdit(false);
      return;
    }
    if (isReply && setOpenReply && toggleReplyList) {
      const commentId = Number(elementId);
      const args: GansoCreateReply = {
        comment_id: commentId,
        user_id: userId,
        content,
      };
      toggleReplyList(false);
      const res = await fetch(SITE_SERVER + "comment/CreateReply", {
        method: "POST",
        body: JSON.stringify(args),
      });
      if (!res.ok) {
        console.error(res.status, res.statusText);
        giveFeedback("error", "Something went wrong, please try again.");
        return;
      }
      refetch();
      toggleReplyList(true);
      setOpenReply(false);
      return;
    }
    const postId = String(elementId);
    const args: GansoCreateComment = {
      post_id: postId,
      user_id: userId,
      content,
    };
    const res = await fetch(SITE_SERVER + "comment/CreateComment", {
      method: "POST",
      body: JSON.stringify(args),
    });
    if (!res.ok) {
      console.error(res.status, res.statusText);
      giveFeedback("error", "Something went wrong, please try again.");
      return;
    }
    refetch();
    responseField.current.value = "";
  };

  return (
    <div>
      <label htmlFor="ResponseBox" className="sr-only">
        Add Your Thoughts
      </label>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="ResponseBox"
          className="w-full text-always-dark resize-none border-none align-top leading-tight focus:ring-0 text-sm p-1.5"
          rows={3}
          ref={responseField}
          defaultValue={editDefault || ""}
          placeholder={
            isReply ? "What is your reply?" : "What are your thoughts?"
          }
        />

        <div className="flex items-center justify-end gap-2 bg-white p-1.5">
          {(isEdit || isReply) && (
            <button
              type="button"
              className="rounded bg-gray-200 px-3 py-2 text-xs leading-none font-medium text-gray-700 hover:text-gray-600"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}

          <button
            type="button"
            className="rounded bg-base-primary px-3 py-2 text-xs leading-none font-medium text-white hover:bg-hover-primary"
            onClick={handleSubmit}
          >
            {isEdit || isReply ? "Submit" : "Post"}
          </button>
        </div>
      </div>
      {userStatus !== "none" && (
        <p
          className={`text-xs font-bold italic mt-1 text-center ${
            userStatus === "error" ? "text-accent-400" : "text-primary-500"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

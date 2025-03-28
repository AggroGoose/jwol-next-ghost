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
  replyCRefetch = undefined,
}: {
  elementId: string | number;
  userId: string;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  replyCRefetch?: (options?: {
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
      const req: GansoCommentRequest = {
        uid: userId,
        method: "edit",
        type: `${isReply ? "reply" : "comment"}`,
        content: args,
      };
      await fetch(`/api/comment/modify`, {
        method: "POST",
        body: JSON.stringify(req),
      }).catch((err) => console.error(err));
      refetch();
      setOpenEdit(false);
      return;
    }
    if (isReply && setOpenReply && toggleReplyList && replyCRefetch) {
      const commentId = Number(elementId);
      const args: GansoCreateReply = {
        comment_id: commentId,
        user_id: userId,
        content,
      };
      toggleReplyList(false);
      const req: GansoCommentRequest = {
        uid: userId,
        method: "create",
        type: "reply",
        content: args,
      };
      await fetch(`/api/comment/modify`, {
        method: "POST",
        body: JSON.stringify(req),
      }).catch((err) => console.error(err));
      refetch();
      replyCRefetch();
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
    const req: GansoCommentRequest = {
      uid: userId,
      method: "create",
      type: "comment",
      content: args,
    };
    await fetch(`/api/comment/modify`, {
      method: "POST",
      body: JSON.stringify(req),
    }).catch((err) => console.error(err));
    refetch();
    responseField.current.value = "";
  };

  return (
    <div>
      <label htmlFor="ResponseBox" className="sr-only">
        What are your thoughts?
      </label>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="ResponseBox"
          className="w-full text-always-dark resize-none border-none align-top leading-tight bg-always-light focus:ring-0 text-sm p-1.5"
          rows={3}
          ref={responseField}
          defaultValue={editDefault || ""}
          placeholder={
            isReply ? "What is your reply?" : "What are your thoughts?"
          }
        />

        <div className="flex items-center justify-end gap-2 bg-always-light p-1.5">
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
            className="rounded bg-primary-500 px-3 py-2 text-sm leading-none tracking-wide text-always-light hover:bg-primary-300"
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

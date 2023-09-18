import ResponseItem from "./responseItem";
import DateParse from "../../helpers/date";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SITE_SERVER } from "@/lib/utils/constants";
import ConfirmDelete from "./confirmDelete";
import ResponseMenu from "./responseMenu";
import { NlUser } from "@/globals";

export default function ReplyList({
  commentId,
  user,
  setShowReplies,
  commentRefetch,
}: {
  commentId: number;
  user: NlUser | null;
  setShowReplies: React.Dispatch<boolean>;
  commentRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const { data: replies, refetch } = useQuery(
    [`Replies-${commentId}`],
    () => fetchReplies(commentId),
    { initialData: [] }
  );
  return (
    <div className="ml-6 pl-6 border-l border-solid border-subtle-primary2 flex flex-col gap-8 lg:pl-8">
      <button
        className="text-fcolor-link text-sm text-left font-bold hover:text-hover-link hover:underline"
        onClick={() => setShowReplies(false)}
      >
        {"^ Hide Replies"}
      </button>
      {replies.map((reply) => (
        <ReplyItem
          reply={reply}
          user={user}
          refetch={refetch}
          key={reply.id}
          commentRefetch={commentRefetch}
        />
      ))}
    </div>
  );
}

function ReplyItem({
  reply,
  user,
  refetch,
  commentRefetch,
}: {
  reply: GansoReplyRes;
  user: NlUser | null;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  commentRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async () => {
    const req: GansoCommentRequest = {
      uid: user!.uid,
      method: "delete",
      type: "reply",
      content: { id: reply.id },
    };
    await fetch(`/api/ganso/comment`, {
      method: "POST",
      body: JSON.stringify(req),
    }).catch((err) => console.error(err));
    commentRefetch();
    refetch();
    setDeleteOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img src={reply.image.String} className="w-9 h-9 rounded-full"></img>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-base-accent leading-none">
              {reply.username.String}
            </p>
            <p className="text-xs italic leading-none">
              <DateParse dateString={reply.date_time} relative={true} />
            </p>
          </div>
          {reply.username.String === user?.username && (
            <ResponseMenu
              editFunc={() => setOpenEdit(!openEdit)}
              deleteFunc={() => setDeleteOpen(true)}
            />
          )}
        </div>

        {openEdit ? (
          <ResponseItem
            elementId={reply.id}
            userId={user!.uid}
            refetch={refetch}
            isEdit={true}
            isReply={true}
            setOpenEdit={setOpenEdit}
            editDefault={reply.content}
          />
        ) : (
          <p>{reply.content}</p>
        )}
      </div>
      {deleteOpen && (
        <ConfirmDelete
          deleteType="Reply"
          deleteOpen={deleteOpen}
          deleteFunc={handleDelete}
          closeModal={() => setDeleteOpen(false)}
        />
      )}
    </>
  );
}

const fetchReplies = async (commentId: number, page_num: number = 1) => {
  const args: GansoRepliesGet = {
    comment_id: commentId,
    limit: 10,
    page_num,
  };
  const res = await fetch(`${SITE_SERVER}comment/GetReplyComment`, {
    method: "POST",
    body: JSON.stringify(args),
  });
  const data: GansoReplyRes[] = await res.json();
  return data;
};

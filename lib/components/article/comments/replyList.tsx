import ResponseItem from "./responseItem";
import DateParse from "../../helpers/date";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ConfirmDelete from "./confirmDelete";
import ResponseMenu from "./responseMenu";
import { User } from "next-auth";

export default function ReplyList({
  commentId,
  user,
  setShowReplies,
  commentRefetch,
  replyCRefetch,
}: {
  commentId: number;
  user: User | undefined;
  setShowReplies: React.Dispatch<boolean>;
  commentRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  replyCRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const { data: replies, refetch } = useQuery({
    queryKey: [`Replies-${commentId}`],
    queryFn: () => fetchReplies(commentId),
    initialData: [],
  });
  return (
    <div className="ml-6 pl-6 border-l border-solid border-subtle-primary2 flex flex-col gap-8 lg:pl-8">
      <button
        className="text-primary-400 text-sm text-left font-bold hover:text-primary-200 hover:underline"
        onClick={() => setShowReplies(false)}
      >
        {"^ Hide Replies"}
      </button>
      {replies.map((reply) => (
        <ReplyItem
          reply={reply}
          user={user}
          refetch={refetch}
          key={reply.reply.id}
          commentRefetch={commentRefetch}
          replyCRefetch={replyCRefetch}
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
  replyCRefetch,
}: {
  reply: DBReplyJoin;
  user: User | undefined;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  commentRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
  replyCRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async () => {
    const req: GansoCommentRequest = {
      uid: user!.id!,
      method: "delete",
      type: "reply",
      content: { id: reply.reply.id },
    };
    await fetch(`/api/comment/modify`, {
      method: "POST",
      body: JSON.stringify(req),
    }).catch((err) => console.error(err));
    commentRefetch();
    replyCRefetch();
    refetch();
    setDeleteOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img
            src={reply.user.image || "/images/Sarcastonaut Fallback.png"}
            className="w-9 h-9 rounded-full"
          ></img>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-accent-500 leading-none">
              {reply.user.name || "User"}
            </p>
            <p className="text-xs italic text-always-light leading-none">
              <DateParse dateString={reply.reply.dateTime} relative={true} />
            </p>
          </div>
          {reply.user.id === user?.id && (
            <ResponseMenu
              editFunc={() => setOpenEdit(!openEdit)}
              deleteFunc={() => setDeleteOpen(true)}
            />
          )}
        </div>

        {openEdit ? (
          <ResponseItem
            elementId={reply.reply.id}
            userId={user!.id!}
            refetch={refetch}
            isEdit={true}
            isReply={true}
            setOpenEdit={setOpenEdit}
            editDefault={reply.reply.content}
          />
        ) : (
          <p className="text-always-light">{reply.reply.content}</p>
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
  const res = await fetch(
    `/api/comment?id=${commentId}&type=replies&limit=10&page=${page_num}`
  );
  const data: DBReplyJoin[] = await res.json();
  return data;
};

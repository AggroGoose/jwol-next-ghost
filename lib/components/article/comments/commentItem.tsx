import DateParse from "../../helpers/date";
import { useState } from "react";
import ResponseItem from "./responseItem";
import ReplyList from "./replyList";
import CommentIcon from "@/lib/resources/svg/icons/commentIcon";
import ResponseMenu from "./responseMenu";
import ConfirmDelete from "./confirmDelete";
import { User } from "next-auth";
import { useQuery } from "@tanstack/react-query";

export default function CommentItem({
  comment,
  user,
  commentRefetch,
}: {
  comment: DBCommentJoin;
  user: User | undefined;
  commentRefetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [createReply, setCreateReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: [`comments-${comment.comment.id}-${comment.comment.postId}`],
    queryFn: () => fetchReplyCount(comment.comment.id),
    initialData: 0,
  });

  const handleReply = () => {
    if (!user) return;
    setCreateReply(!createReply);
  };

  const handleShowReplies = () => {
    if (data >= 1) setShowReplies(!showReplies);
  };

  const handleDelete = async () => {
    const req: GansoCommentRequest = {
      uid: user!.id!,
      method: "delete",
      type: "comment",
      content: { id: comment.comment.id },
    };
    await fetch(`/api/comment/modify`, {
      method: "POST",
      body: JSON.stringify(req),
    }).catch((err) => console.error(err));
    refetch();
  };

  const ReplyLabel = ({ replies }: { replies: number }) => {
    return (
      <button
        className="group flex text-sm text-primary-400 font-semibold hover:underline items-center gap-2 hover:text-primary-200"
        onClick={handleShowReplies}
      >
        <CommentIcon className="h-6 w-6 fill-primary-400 group-hover:fill-primary-200" />
        {replies === 1
          ? "1 Reply"
          : `${replies}${replies > 1 ? " Replies" : ""}`}
      </button>
    );
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <img
            src={comment.user.image || "/images/Sarcastonaut Fallback.png"}
            className="w-9 h-9 rounded-full"
          ></img>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-accent-500 leading-none">
              {comment.user.name || "User"}
            </p>
            <p className="text-always-light text-xs italic leading-none">
              <DateParse
                dateString={comment.comment.dateTime}
                relative={true}
              />
            </p>
          </div>
          {comment.user.id === user?.id && (
            <ResponseMenu
              editFunc={() => setOpenEdit(!openEdit)}
              deleteFunc={() => setDeleteOpen(true)}
            />
          )}
        </div>

        {openEdit ? (
          <ResponseItem
            elementId={comment.comment.id}
            userId={user!.id!}
            refetch={refetch}
            isEdit={true}
            setOpenEdit={setOpenEdit}
            editDefault={comment.comment.content}
          />
        ) : (
          <p className="text-always-light">{comment.comment.content}</p>
        )}
        <div className="flex justify-between">
          <ReplyLabel replies={data} />
          <button
            className="self-end text-sm font-semibold text-primary-400 hover:underline hover:text-primary-200"
            onClick={handleReply}
          >
            Reply
          </button>
        </div>
        {createReply && (
          <ResponseItem
            elementId={comment.comment.id}
            userId={user!.id!}
            refetch={commentRefetch}
            isReply={true}
            setOpenReply={setCreateReply}
            toggleReplyList={setShowReplies}
            replyCRefetch={refetch}
          />
        )}
        {showReplies && (
          <ReplyList
            user={user}
            commentId={comment.comment.id}
            setShowReplies={setShowReplies}
            commentRefetch={commentRefetch}
            replyCRefetch={refetch}
          />
        )}
        <hr className="h-[1px] bg-subtle-primary2 border-0" />
      </div>

      {deleteOpen && (
        <ConfirmDelete
          deleteType="Comment"
          deleteOpen={deleteOpen}
          deleteFunc={handleDelete}
          closeModal={() => setDeleteOpen(false)}
        />
      )}
    </>
  );
}

async function fetchReplyCount(commentId: number) {
  const res = await fetch(`/api/comment/count?id=${commentId}&type=replies`);
  const data: number = await res.json();
  return data;
}

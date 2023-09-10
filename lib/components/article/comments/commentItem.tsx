import DateParse from "../../helpers/date";
import { useState } from "react";
import ResponseItem from "./responseItem";
import ReplyList from "./replyList";
import CommentIcon from "@/lib/resources/svg/icons/commentIcon";
import ResponseMenu from "./responseMenu";
import { SITE_SERVER } from "@/lib/utils/constants";
import ConfirmDelete from "./confirmDelete";
import { NlUser } from "@/globals";

export default function CommentItem({
  comment,
  user,
  refetch,
}: {
  comment: GansoCommentRes;
  user: NlUser | null;
  refetch: (options?: {
    throwOnError: boolean;
    cancelRefetch: boolean;
  }) => Promise<any>;
}) {
  const [openEdit, setOpenEdit] = useState(false);
  const [createReply, setCreateReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleReply = () => {
    if (!user) return;
    setCreateReply(!createReply);
  };

  const handleShowReplies = () => {
    if (comment.count_reply >= 1) setShowReplies(!showReplies);
  };

  const handleDelete = async () => {
    await fetch(SITE_SERVER + "comment/DeleteComment", {
      method: "DELETE",
      body: JSON.stringify({ id: comment.id }),
    });
    refetch();
  };

  const ReplyLabel = ({ replies }: { replies: number }) => {
    return (
      <button
        className="group flex text-sm text-fcolor-link font-semibold hover:underline items-center gap-2 hover:text-hover-link"
        onClick={handleShowReplies}
      >
        <CommentIcon className="h-6 w-6 fill-fcolor-link group-hover:fill-hover-link" />
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
            src={comment.image.String}
            className="w-9 h-9 rounded-full"
          ></img>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-base-accent leading-none">
              {comment.username.String}
            </p>
            <p className="text-xs italic leading-none">
              <DateParse dateString={comment.date_time} relative={true} />
            </p>
          </div>
          {comment.username.String === user?.username && (
            <ResponseMenu
              editFunc={() => setOpenEdit(!openEdit)}
              deleteFunc={() => setDeleteOpen(true)}
            />
          )}
        </div>

        {openEdit ? (
          <ResponseItem
            elementId={comment.id}
            userId={user!.uid}
            refetch={refetch}
            isEdit={true}
            setOpenEdit={setOpenEdit}
            editDefault={comment.content}
          />
        ) : (
          <p>{comment.content}</p>
        )}
        <div className="flex justify-between">
          <ReplyLabel replies={comment.count_reply} />
          <button
            className="self-end text-sm font-semibold text-fcolor-link hover:underline hover:text-hover-link"
            onClick={handleReply}
          >
            Reply
          </button>
        </div>
        {createReply && (
          <ResponseItem
            elementId={comment.id}
            userId={user!.uid}
            refetch={refetch}
            isReply={true}
            setOpenReply={setCreateReply}
            toggleReplyList={setShowReplies}
          />
        )}
        {showReplies && (
          <ReplyList
            user={user}
            commentId={comment.id}
            setShowReplies={setShowReplies}
            commentRefetch={refetch}
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

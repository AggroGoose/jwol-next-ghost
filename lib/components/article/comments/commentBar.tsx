import { useAuthContext } from "@/lib/context/authContext";
import { SITE_SERVER } from "@/lib/utils/constants";
import { useQuery } from "@tanstack/react-query";
import CommentItem from "./commentItem";
import { Dialog } from "@headlessui/react";
import ResponseItem from "./responseItem";
import DisabledResponse from "./disabledResponse";

export default function CommentBar({
  postId,
  isOpen,
  closeModal,
}: {
  postId: string;
  isOpen: boolean;
  closeModal: () => void;
}) {
  const { user } = useAuthContext();
  const { data, refetch } = useQuery(
    [`comments-${postId}`],
    () => fetchComments(postId),
    { initialData: [] }
  );
  return (
    <Dialog open={isOpen} onClose={() => closeModal()}>
      <Dialog.Panel className="bg-base-100 fixed top-0 right-0 h-screen w-[70vw] max-w-[480px] z-[40] shadow-darklg p-8 overflow-y-scroll no-scrollbar">
        <Dialog.Title className="leading-none">Comments</Dialog.Title>
        <div className="py-8">
          {user ? (
            <ResponseItem
              elementId={postId}
              userId={user.uid}
              refetch={refetch}
            />
          ) : (
            <DisabledResponse />
          )}
        </div>
        <div className="flex flex-col items-center gap-8">
          {data.map((comment) => {
            return (
              <CommentItem
                comment={comment}
                key={comment.id}
                refetch={refetch}
                user={user}
              />
            );
          })}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

const fetchComments = async (postId: string) => {
  const res = await fetch(`${SITE_SERVER}comment/GetCommentPost`, {
    method: "POST",
    body: JSON.stringify({ post_id: postId, limit: 10, page_num: 1 }),
  });
  const data: GansoCommentRes[] = await res.json();
  return data;
};

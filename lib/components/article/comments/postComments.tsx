"use client";

import { useQuery } from "@tanstack/react-query";
import CommentItem from "./commentItem";
import ResponseItem from "./responseItem";
import DisabledResponse from "./disabledResponse";
import { User } from "next-auth";

export default function PostComments({
  postId,
  user,
}: {
  postId: string;
  user: User | undefined;
}) {
  const { data, refetch } = useQuery({
    queryKey: [`comments-${postId}`],
    queryFn: () => fetchComments(postId),
    initialData: [],
  });

  return (
    <div className="mb-6 flex flex-col gap-6 w-full max-w-(--blog-width) mx-auto max-xl:px-3">
      <h2 className="text-always-light">Comments</h2>
      <div>
        {user ? (
          <ResponseItem
            elementId={postId}
            userId={user.id!}
            refetch={refetch}
          />
        ) : (
          <DisabledResponse />
        )}
      </div>
      {data.map((comment) => {
        return (
          <CommentItem
            comment={comment}
            key={comment.comment.id}
            commentRefetch={refetch}
            user={user}
          />
        );
      })}
    </div>
  );
}

const fetchComments = async (postId: string) => {
  const res = await fetch(`/api/comment?id=${postId}&type=comments&limit=5`);
  const data: DBCommentJoin[] = await res.json();
  return data;
};

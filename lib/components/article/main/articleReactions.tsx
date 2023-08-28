"use client";

import { HeartFull } from "@/lib/resources/svg/icons/heartIcon";
import CommentIcon from "@/lib/resources/svg/icons/commentIcon";
import ShareIcon from "@/lib/resources/svg/icons/shareIcon";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { SITE_SERVER } from "@/lib/utils/constants";
import { useAuthContext } from "@/lib/context/authContext";
import CommentBar from "../comments/commentBar";

export default function ArticleReactions({ postId }: { postId: string }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const { user } = useAuthContext();
  const userId = user?.uid || null;

  const { isLoading, refetch } = useQuery(
    ["likes"],
    () => fetchLikes(postId, userId),
    {
      onSuccess: (data) => {
        if (data.isLiked) setPostLiked(true);
        else setPostLiked(false);
      },
    }
  );

  useEffect(() => {
    if (user) refetch();
  }, [user]);

  const createLike = useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      likePost(postId, userId),
  });
  const removeLike = useMutation({
    mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
      unLikePost(postId, userId),
  });

  const handleLike = () => {
    if (!userId) {
      setPostLiked(!postLiked);
      return;
    }
    if (isLoading || createLike.isLoading || removeLike.isLoading) return;
    if (postLiked) {
      setPostLiked(false);
      removeLike.mutate(
        { postId, userId },
        { onError: () => setPostLiked(true) }
      );
    } else {
      setPostLiked(true);
      createLike.mutate(
        { postId, userId },
        { onError: () => setPostLiked(false) }
      );
    }
  };

  const toggleComments = () => setCommentOpen(!commentOpen);

  return (
    <>
      <div className="sticky top-[85vh] ml-auto flex z-10 bg-white/80 rounded-[2rem] overflow-hidden shadow-darkmd xl:flex-col xl:top-[75vh]">
        <button
          className="flex flex-col py-3 transition-colors duration-500 ease-in-out px-3 items-center hover:bg-accent"
          onClick={handleLike}
        >
          <HeartFull
            className={`w-6 h-6 xl:w-7 xl:h-7 transition-colors duration-500 ease-in-out ${
              postLiked ? "fill-primary" : "fill-neutral"
            }`}
          />
        </button>
        <button
          className="flex flex-col py-3 px-3 transition-colors duration-500 ease-in-out items-center hover:bg-accent"
          onClick={toggleComments}
        >
          <CommentIcon className="w-6 h-6 xl:w-7 xl:h-7 fill-neutral" />
        </button>
        <button className="flex flex-col py-3 px-3 transition-colors duration-500 ease-in-out items-center hover:bg-accent">
          <ShareIcon className="w-6 h-6 xl:w-7 xl:h-7 fill-neutral" />
        </button>
      </div>
      {commentOpen && (
        <CommentBar
          postId={postId}
          isOpen={commentOpen}
          closeModal={toggleComments}
        />
      )}
    </>
  );
}

async function fetchLikes(postId: string, userId: string | null) {
  if (!userId) return { isLiked: false, isSaved: false };
  const req: GansoLikeSaveReq = {
    post_id: postId,
    user_id: userId,
  };
  const res: GansoLikeSaveState = await fetch(
    SITE_SERVER + "post/LikeSaveState",
    { method: "POST", body: JSON.stringify(req) }
  ).then((res) => res.json());
  return res;
}

async function likePost(postId: string, userId: string) {
  const req: GansoLikeSaveReq = {
    user_id: userId,
    post_id: postId,
  };

  console.log(req);

  const res: GansoLikeSaveState = await fetch(SITE_SERVER + "post/LikePost", {
    method: "POST",
    body: JSON.stringify(req),
  }).then((res) => res.json());
  return res;
}

async function unLikePost(postId: string, userId: string) {
  const req: GansoLikeSaveReq = {
    user_id: userId,
    post_id: postId,
  };
  const res: GansoLikeSaveState = await fetch(SITE_SERVER + "post/UnlikePost", {
    method: "DELETE",
    body: JSON.stringify(req),
  }).then((res) => res.json());
  return res;
}

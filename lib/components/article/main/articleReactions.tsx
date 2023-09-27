"use client";

import { HeartFull } from "@/lib/resources/svg/icons/heartIcon";
import CommentIcon from "@/lib/resources/svg/icons/commentIcon";
import ShareIcon from "@/lib/resources/svg/icons/shareIcon";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { SITE_SERVER } from "@/lib/utils/constants";
import { useAuthContext } from "@/lib/context/authContext";
import CommentBar from "../comments/commentBar";
import ArticleShare from "./articleShare";

export default function ArticleReactions({
  postId,
  url,
}: {
  postId: string;
  url: string;
}) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
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
      <div className="content-grid md:reaction-grid row-span-full h-max sticky ml-auto flex z-10 md:flex-col top-[90vh] md:top-[75vh] gap-3">
        <button
          className="p-3 transition-colors rounded-full bg-subtle-primary cshadow-flip duration-500 ease-in-out items-center hover:bg-subtle-primary2"
          onClick={handleLike}
        >
          <HeartFull
            className={`w-5 h-5 xl:w-7 xl:h-7 transition-colors duration-500 ease-in-out ${
              postLiked ? "fill-accent-400" : "fill-fcolor-base"
            }`}
          />
        </button>
        <button
          className="p-3 transition-colors rounded-full bg-subtle-primary cshadow-flip duration-500 ease-in-out items-center hover:bg-subtle-primary2"
          onClick={toggleComments}
        >
          <CommentIcon className="w-5 h-5 xl:w-7 xl:h-7 fill-fcolor-base" />
        </button>
        <button
          className="p-3 transition-colors rounded-full bg-subtle-primary cshadow-flip duration-500 ease-in-out items-center hover:bg-subtle-primary2"
          onClick={() => {
            setShareOpen(true);
          }}
        >
          <ShareIcon className="w-5 h-5 xl:w-7 xl:h-7 fill-fcolor-base" />
        </button>
      </div>
      {commentOpen && (
        <CommentBar
          postId={postId}
          isOpen={commentOpen}
          closeModal={toggleComments}
        />
      )}
      {shareOpen && (
        <ArticleShare
          url={url}
          shareOpen={shareOpen}
          closeModal={() => {
            setShareOpen(false);
          }}
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

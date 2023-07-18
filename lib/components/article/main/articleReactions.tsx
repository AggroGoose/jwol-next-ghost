"use client";

import { HeartEmpty, HeartFull } from "@/lib/resources/svg/heartIcon";
import CommentIcon from "@/lib/resources/svg/commentIcon";
import ShareIcon from "@/lib/resources/svg/shareIcon";
import { useState } from "react";

export default function ArticleReactions({ liked = false }) {
  const [postLiked, setPostLiked] = useState(liked);

  const handleLike = () => {
    if (postLiked) {
      setPostLiked(false);
    } else {
      setPostLiked(true);
    }
  };

  return (
    <div className="article_reactions">
      <button className="article_reactions_button" onClick={handleLike}>
        {postLiked ? <HeartFull /> : <HeartEmpty />}
      </button>
      <button className="article_reactions_button">
        <CommentIcon />
      </button>
      <button className="article_reactions_button">
        <ShareIcon />
      </button>
    </div>
  );
}

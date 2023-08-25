"use client";

import { HeartFull } from "@/lib/resources/svg/icons/heartIcon";
import CommentIcon from "@/lib/resources/svg/icons/commentIcon";
import ShareIcon from "@/lib/resources/svg/icons/shareIcon";
import { useState } from "react";

export default function ArticleReactions({ postId }: { postId: string }) {
  const [postLiked, setPostLiked] = useState(false);

  const handleLike = () => {
    if (postLiked) {
      setPostLiked(false);
    } else {
      setPostLiked(true);
    }
  };

  return (
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
      <button className="flex flex-col py-3 px-3 transition-colors duration-500 ease-in-out items-center hover:bg-accent">
        <CommentIcon className="w-6 h-6 xl:w-7 xl:h-7 fill-neutral" />
      </button>
      <button className="flex flex-col py-3 px-3 transition-colors duration-500 ease-in-out items-center hover:bg-accent">
        <ShareIcon className="w-6 h-6 xl:w-7 xl:h-7 fill-neutral" />
      </button>
    </div>
  );
}

function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

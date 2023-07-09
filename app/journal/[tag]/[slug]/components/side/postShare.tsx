"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "next-share";

export default function PostShare({
  tag,
  slug,
}: {
  tag: string;
  slug: string;
}) {
  const url = `https://www.jakosbalay.com/journal/${tag}/${slug}`;
  const size: number = 40;
  return (
    <div className="article_side_share">
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={size} round />
      </RedditShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon size={size} round />
      </TumblrShareButton>
    </div>
  );
}

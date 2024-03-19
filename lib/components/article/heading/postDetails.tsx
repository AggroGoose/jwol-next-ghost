"use client";

import DateParse from "../../helpers/date";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "next-share";

import {
  Facebook,
  FacebookMessenger,
  Reddit,
  Twitter,
} from "@/lib/resources/svg/social";

export default function PostDetails({
  published_at,
  excerpt,
  url,
}: {
  published_at: string;
  excerpt: string;
  url: string;
}) {
  return (
    <div className="flex flex-col gap-8 xl:justify-between xl:basis-[55%] text-always-light px-3">
      <p className="text-xl lg:text-xxl italic max-xl:text-center">{excerpt}</p>
      <div className="flex gap-8 flex-col w-full max-xl:items-center">
        <p>
          <strong className="text-accent-500">Published: </strong>
          <DateParse dateString={published_at} />
        </p>

        <div className="flex gap-4">
          <FacebookShareButton url={url}>
            <Facebook className="hover:opacity-70 aspect-square w-10 lg:w-12 fill-primary-500" />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={url} appId={""}>
            <FacebookMessenger className="hover:opacity-70 aspect-square w-10 lg:w-12 fill-primary-500" />
          </FacebookMessengerShareButton>
          <TwitterShareButton url={url}>
            <Twitter className="hover:opacity-70 aspect-[300/271] w-9 lg:w-11 fill-primary-500" />
          </TwitterShareButton>
          <RedditShareButton url={url}>
            <Reddit className="hover:opacity-70 aspect-square w-10 lg:w-12 fill-primary-500" />
          </RedditShareButton>
        </div>
      </div>
    </div>
  );
}

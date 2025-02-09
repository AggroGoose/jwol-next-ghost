"use client";

import MainArticleCard from "../cards/mainArticleCard";
import Pagination from "../navigation/pagination";
import MainPagePosts from "@/lib/components/article/main/mainPagePosts";

export default function MainPostIndex({
  posts,
  meta,
}: {
  posts: ResponseMore[];
  meta: ghostPostMetaData;
}) {
  if (!(posts.length > 0)) {
    return (
      <div className="flex flex-col gap-8 py-8 min-h-screen">
        <h1 className="text-center text-accent-500">#Recent Posts</h1>
        <div className="flex flex-col gap-8 py-8 bg-always-light rounded-xl">
          <p>No posts were found, please check your search or try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 py-8 min-h-screen">
      <div className="flex flex-col gap-8 w-full max-w-(--blog-width) mx-auto px-3 xl:px-0">
        <h1 className="text-center text-accent-400">Sarcastonaut</h1>
        <p className="text-always-light text-sm md:text-lg text-center">
          Exploring the absurdity of life, one thought at a time.
        </p>
      </div>
      <div className="flex flex-col gap-8 py-8 bg-always-light rounded-xl">
        <MainPagePosts posts={posts} />
        <Pagination meta={meta} />
      </div>
    </div>
  );
}

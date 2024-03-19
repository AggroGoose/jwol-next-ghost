"use client";

import MainArticleCard from "../cards/mainArticleCard";
import Pagination from "../navigation/pagination";

export default function MainPostIndex({
  posts,
  meta,
}: {
  posts: ResponseMore[];
  meta: ghostPostMetaData;
}) {
  if (!(posts.length > 0)) {
    return (
      <div className="flex flex-col gap-8 py-8">
        <h1 className="text-center text-accent-500">#Recent Posts</h1>
        <p>No posts were found, please check your search or try again.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 py-8 min-h-screen">
      <h1 className="text-center text-accent-500">#Recent Posts</h1>
      <div className="flex flex-col gap-8 py-8 bg-always-light rounded-xl">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full max-w-[--body-size] mx-auto">
          {posts.map((post) => (
            <MainArticleCard post={post} key={post.slug} dark={false} />
          ))}
        </div>
        <Pagination meta={meta} />
      </div>
    </div>
  );
}

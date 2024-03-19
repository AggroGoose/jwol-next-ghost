"use client";

import MainArticleCard from "../cards/mainArticleCard";
import Pagination from "../navigation/pagination";

export default function TagPostIndex({
  posts,
  meta,
  tag,
}: {
  posts: ResponseMore[];
  meta: ghostPostMetaData;
  tag: ResponseTag;
}) {
  if (!(posts.length > 0)) {
    return (
      <div className="flex flex-col gap-8 py-8">
        <h1 className="text-center">{tag.name} Articles</h1>
        <p className="text-always-light">
          No posts were found, please check your search or try again.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 py-8 min-h-screen">
      <div className="flex flex-col gap-8 w-full max-w-[--blog-width] mx-auto px-3 xl:px-0">
        <h1 className="text-center text-accent-400">#{tag.name}</h1>
        {tag.description && (
          <p className="text-always-light text-sm md:text-lg text-center">
            {tag.description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-8 py-8 bg-always-light rounded-xl">
        <h2 className="self-center">Recent Posts</h2>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full max-w-[--body-size] mx-auto">
          {posts.map((post) => (
            <MainArticleCard
              post={post}
              key={post.slug}
              badge={false}
              dark={false}
            />
          ))}
        </div>
        <Pagination meta={meta} />
      </div>
    </div>
  );
}

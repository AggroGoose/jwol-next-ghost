import ListArticleCard from "../../cards/listArticleCard";

export default function LatestPagePosts({
  posts,
  tagPost = false,
  tag,
}: {
  posts: ResponseMore[];
  tagPost?: boolean;
  badge?: boolean;
  tag?: { id: string; name: string; slug: string };
}) {
  return (
    <section className=" flex flex-col gap-6 w-full max-w-(--body-size) mx-auto">
      <h3 className="text-center text-always-light font-normal">
        Recent Articles
      </h3>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <ListArticleCard
            post={post}
            key={post.slug}
            badge={true}
            dark={true}
          />
        ))}
      </div>
    </section>
  );
}

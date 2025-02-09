import IndexArticleCard from "../../cards/indexArticleCard";

export default function MainPagePosts({
  posts,
  badge = true,
}: {
  posts: ResponseMore[];
  badge?: boolean;
}) {
  return (
    <section className=" flex flex-col gap-6 w-full max-w-(--body-size) mx-auto">
      <h2 className="text-center text-primary-700 font-normal">
        Recent Articles
      </h2>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <IndexArticleCard post={post} key={post.slug} badge={badge} />
        ))}
      </div>
    </section>
  );
}

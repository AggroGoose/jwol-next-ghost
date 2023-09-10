import MainArticleCard from "../../cards/mainArticleCard";

export default function MorePagePosts({
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
    <div className="mb-6 flex flex-col gap-6">
      {tagPost ? (
        tag ? (
          <h2>Latest Articles Under {tag.name}:</h2>
        ) : (
          <h2>Latest Articles:</h2>
        )
      ) : (
        <h2>Latest Articles:</h2>
      )}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <MainArticleCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

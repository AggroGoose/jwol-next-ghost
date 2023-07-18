import MainArticleCard from "../../cards/mainArticleCard";

export default function MoreByTag({
  posts,
  tag,
}: {
  posts: ResponseMore[];
  tag: { id: string; name: string; slug: string };
}) {
  return (
    <div className="article_more_block">
      <h2>Latest Articles Under {tag.name}:</h2>
      <div className="article_more_block--container">
        {posts.map((post) => (
          <MainArticleCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

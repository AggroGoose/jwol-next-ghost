import MainArticleCard from "../../cards/mainArticleCard";

export default function MoreByLatest({ posts }: { posts: ResponseMore[] }) {
  return (
    <div className="article_more_block">
      <h2>Latest Articles:</h2>
      <div className="article_more_block--container">
        {posts.map((post) => (
          <MainArticleCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

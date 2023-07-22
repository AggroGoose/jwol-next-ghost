import SideArticleCard from "../../cards/sideArticleCard";

export default function PostSideMore({
  morePosts,
}: {
  morePosts: ResponseMore[];
}) {
  return (
    <div className="article_side_more">
      <h2 className="article_side_details--head">Latest Posts</h2>
      <hr />
      {morePosts.map((post) => (
        <>
          <SideArticleCard post={post} key={post.slug} />
          <hr />
        </>
      ))}
    </div>
  );
}

import PostMoreCard from "./postMoreCard";

export default function PostSideMore({
  morePosts,
}: {
  morePosts: Array<{
    title: string;
    excerpt: string;
    slug: string;
    tag: string;
    tagSlug: string;
    featureImg: string | null;
    featureImgAlt: string;
    published: string;
  }>;
}) {
  return (
    <div className="article_side_more">
      <h2 className="article_side_details--head">Latest Posts</h2>
      <hr />
      {morePosts.map((post) => (
        <>
          <PostMoreCard post={post} />
          <hr />
        </>
      ))}
    </div>
  );
}

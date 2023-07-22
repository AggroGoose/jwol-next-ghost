import MainArticleCard from "../../cards/mainArticleCard";

export default function MorePagePosts({
  posts,
  tagPost = false,
  badge = false,
  tag,
}: {
  posts: ResponseMore[];
  tagPost?: boolean;
  badge?: boolean;
  tag?: { id: string; name: string; slug: string };
}) {
  return (
    <div className="article_more_block">
      {tagPost ? (
        tag ? (
          <TagArticles posts={posts} tag={tag.name} />
        ) : (
          <></>
        )
      ) : (
        <PostArticles posts={posts} badge={badge} />
      )}
    </div>
  );
}

function PostArticles({
  posts,
  badge,
}: {
  posts: ResponseMore[];
  badge: boolean;
}) {
  return (
    <>
      <h2>Latest Articles:</h2>
      <div className="article_more_block--container">
        {posts.map((post) => (
          <MainArticleCard post={post} key={post.slug} badge={badge} />
        ))}
      </div>
    </>
  );
}

function TagArticles({ posts, tag }: { posts: ResponseMore[]; tag: string }) {
  return (
    <>
      <h2>Latest Articles Under {tag}:</h2>
      <div className="article_more_block--container">
        {posts.map((post) => (
          <MainArticleCard post={post} key={post.slug} />
        ))}
      </div>
    </>
  );
}

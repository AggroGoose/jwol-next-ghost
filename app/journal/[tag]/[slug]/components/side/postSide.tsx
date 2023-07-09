import PostDetails from "./postDetails";
import PostShare from "./postShare";
import PostSideMore from "./postSideMore";

export default function PostSide({
  post,
  morePosts,
}: {
  post: ResponsePost;
  morePosts: ResponseMore[];
}) {
  return (
    <div className="article_side">
      <PostDetails
        created_at={post.created_at}
        updated_at={post.updated_at}
        tags={post.tags}
      />
      <PostShare tag={post.primary_tag.slug} slug={post.slug} />
      <PostSideMore morePosts={morePosts} />
    </div>
  );
}

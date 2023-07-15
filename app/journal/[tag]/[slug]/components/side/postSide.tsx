import PostDetails from "./postDetails";
import PostShare from "./postShare";
import PostSideMore from "./postSideMore";
import SideAuthor from "./sideAuthor";

export default function PostSide({
  post,
  morePosts,
}: {
  post: ResponsePost;
  morePosts: ResponseMore[];
}) {
  return (
    <div className="article_side">
      <SideAuthor />
      <PostShare tag={post.primary_tag.slug} slug={post.slug} />
      <PostSideMore morePosts={morePosts} />
    </div>
  );
}

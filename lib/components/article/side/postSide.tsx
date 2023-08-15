import SideAuthor from "./sideAuthor";
import SideSocial from "./sideSocial";

export default function PostSide({ morePosts }: { morePosts: ResponseMore[] }) {
  return (
    <div className="article_side">
      <SideSocial />
      <SideAuthor />
      {/* <PostShare tag={post.primary_tag.slug} slug={post.slug} /> */}
    </div>
  );
}

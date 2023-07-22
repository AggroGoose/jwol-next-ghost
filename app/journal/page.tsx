import {
  ghostLatestFiveGeneral,
  ghostPostsforIndex,
} from "@/lib/api/server/ghostServer";
import PostSide from "@/lib/components/article/side/postSide";
import PostIndex from "@/lib/components/pages/postIndex/postIndex";

export default async function Journal() {
  const morePosts = await ghostLatestFiveGeneral();
  const indexPosts = await ghostPostsforIndex();

  return (
    <div className="post_index post-side-grid">
      <PostIndex
        posts={indexPosts}
        title={"Here Are the Latest Posts"}
        badge={true}
      />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

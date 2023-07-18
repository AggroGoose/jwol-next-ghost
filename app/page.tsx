import PostSide from "@/lib/components/article/side/postSide";
import PostIndex from "@/lib/components/pages/postIndex/postIndex";

export default async function Home() {
  const morePostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPage/LastFive`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as { morePosts: ResponseMore[] };
  const { morePosts } = morePostsRes;

  const indexPostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPage/GeneralPosts`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as { returnPosts: ResponseMore[] };
  const indexPosts = indexPostsRes.returnPosts;

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

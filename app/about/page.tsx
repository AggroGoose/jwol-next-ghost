import PostSide from "@/lib/components/article/side/postSide";
import AboutMain from "@/lib/components/pages/about/aboutMain";

export default async function About() {
  const morePostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPage/LastFive`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json())) as { morePosts: ResponseMore[] };
  const { morePosts } = morePostsRes;

  return (
    <div className="page_about post-side-grid">
      <AboutMain />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

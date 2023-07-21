import PostSide from "@/lib/components/article/side/postSide";
import CookiePolicy from "@/lib/components/pages/cookies/cookiePolicy";

export default async function Cookies() {
  const morePostsRes = (await fetch(
    `http://${process.env.VERCEL_URL}/api/ghost/LatestPosts/ForPage/LastFive`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json())) as { morePosts: ResponseMore[] };
  const { morePosts } = morePostsRes;

  return (
    <div className="page_cookie post-side-grid">
      <CookiePolicy />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

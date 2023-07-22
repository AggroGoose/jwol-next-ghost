import { ghostLatestFiveGeneral } from "@/lib/api/server/ghostServer";
import PostSide from "@/lib/components/article/side/postSide";
import CookiePolicy from "@/lib/components/pages/cookies/cookiePolicy";

export default async function Cookies() {
  const morePosts = await ghostLatestFiveGeneral();

  return (
    <div className="page_cookie post-side-grid">
      <CookiePolicy />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

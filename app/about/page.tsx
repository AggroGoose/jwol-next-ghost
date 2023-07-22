import { ghostLatestFiveGeneral } from "@/lib/api/server/ghostServer";
import PostSide from "@/lib/components/article/side/postSide";
import AboutMain from "@/lib/components/pages/about/aboutMain";

export default async function About() {
  const morePosts = await ghostLatestFiveGeneral();

  return (
    <div className="page_about post-side-grid">
      <AboutMain />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

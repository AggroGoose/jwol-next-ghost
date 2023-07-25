import {
  ghostLatestFiveGeneral,
  ghostPostsforIndex,
} from "@/lib/api/server/ghostServer";
import PostSide from "@/lib/components/article/side/postSide";
import PostIndex from "@/lib/components/pages/postIndex/postIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | No Leave Society",
  description:
    "Society is what we make it, and in this society, you don't need anyone's leave to be who you are. With articles and stories around mental health and society we're hoping to influence society to new levels.",
  openGraph: {
    siteName: "No Leave Society",
    type: "website",
    title: "Journal | No Leave Society",
    description:
      "Society is what we make it. With articles and stories around mental health and society, we hope to influence society to new levels.",
    images:
      "https://ghost.jakosbalay.com/content/images/2023/07/No-Leave-Society-Image-Card.png",
    url: "https://www.noleavesociety.com/journal/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | No Leave Society",
    description:
      "Society is what we make it. With articles and stories around mental health and society, we hope to influence society to new levels.",
    images:
      "https://ghost.jakosbalay.com/content/images/2023/07/No-Leave-Society-Image-Card.png",
    creator: "@CompletelyJWOL",
  },
};

export const revalidate = 600;

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

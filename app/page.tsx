import { ghostPostsforIndex } from "@/lib/api/server/ghostServer";
import PostIndex from "@/lib/components/pages/postIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | No Leave Society",
  description:
    "Society is what we make it, and in this society, you don't need anyone's leave to be who you are. With articles and stories around mental health and society we're hoping to influence society to new levels.",
  openGraph: {
    siteName: "No Leave Society",
    type: "website",
    title: "Home | No Leave Society",
    description:
      "Society is what we make it. With articles and stories around mental health and society, we hope to influence society to new levels.",
    images:
      "https://ghost.jakosbalay.com/content/images/2023/07/No-Leave-Society-Image-Card.png",
    url: "https://www.noleavesociety.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | No Leave Society",
    description:
      "Society is what we make it. With articles and stories around mental health and society, we hope to influence society to new levels.",
    images:
      "https://ghost.jakosbalay.com/content/images/2023/07/No-Leave-Society-Image-Card.png",
    creator: "@CompletelyJWOL",
  },
};

export default async function Home() {
  const indexPosts = await ghostPostsforIndex();
  const links = [{ title: "Home", slug: "/" }];

  return (
    <div className="post_index content-grid flex flex-col gap-6 px-3 lg:px-0">
      <PostIndex
        posts={indexPosts}
        title={"Here Are the Latest Posts"}
        badge={true}
        links={links}
      />
    </div>
  );
}

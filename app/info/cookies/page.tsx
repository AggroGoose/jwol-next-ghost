import {
  ghostLatestFiveGeneral,
  ghostMetaSingle,
} from "@/lib/api/server/ghostServer";
import { ghostPageData } from "@/lib/api/server/ghostServer/_ghostPage";
import PostSide from "@/lib/components/article/side/postSide";
import PageMain from "@/lib/components/pages/pageMain";
import { Metadata } from "next";

export const revalidate = 600;

const slug = "cookies";
const destination = "info/cookies";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await ghostMetaSingle(slug, "page");

  return {
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "No Leave Society",
      type: "website",
      title: meta.og_title,
      description: meta.og_description,
      images: meta.og_image,
      url: `https://www.noleavesociety.com/${destination}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: meta.twitter_image,
      creator: "@CompletelyJWOL",
    },
  };
}

export default async function Cookies() {
  const page = await ghostPageData(slug);

  const crumb = {
    name: "Policies",
    link: "",
  };

  return (
    <div className="page_cookies main-site-grid">
      <PageMain page={page} crumb={crumb} />
    </div>
  );
}

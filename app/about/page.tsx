import { ghostMetaSingle } from "@/lib/api/server/ghostServer";
import { ghostPageData } from "@/lib/api/server/ghostServer/_ghostPage";
import PageMain from "@/lib/components/pages/pageMain";
import { Metadata } from "next";
import { ABOUT_ROUTE, ABOUT_URL } from "@/lib/utils/constants";

const slug = "about";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await ghostMetaSingle("about", "page");

  return {
    metadataBase: new URL(ABOUT_URL),
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "Sarcastonaut",
      type: "website",
      title: meta.og_title,
      description: meta.og_description,
      images:
        "https://ghost.jakosbalay.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
      url: ABOUT_URL,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images:
        "https://ghost.jakosbalay.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
      creator: "@CompletelyJWOL",
    },
  };
}

export const revalidate = 600;

export default async function About() {
  const page = await ghostPageData(slug);

  const link = { title: "About", url: ABOUT_ROUTE };

  return (
    <div className="content-grid flex flex-col gap-6 bg-always-dark">
      <PageMain page={page} link={link} excerpt={true} />
    </div>
  );
}

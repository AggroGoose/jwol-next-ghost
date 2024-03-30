import { ghostMetaSingle } from "@/lib/api/server/ghostServer";
import { ghostPageData } from "@/lib/api/server/ghostServer/_ghostPage";
import PageMain from "@/lib/components/pages/pageMain";
import { Metadata } from "next";
import { POLICY_ROUTE, POLICY_URL } from "@/lib/utils/constants";

export const revalidate = 600;

const slug = "cookies";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await ghostMetaSingle(slug, "page");

  return {
    metadataBase: new URL(POLICY_URL + slug),
    title: meta.meta_title,
    description: meta.meta_description,
    openGraph: {
      siteName: "Sarcastonaut",
      type: "website",
      title: meta.og_title,
      description: meta.og_description,
      images: [
        {
          url: "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
          width: 1600,
          height: 800,
          alt: "Letter S logo overlaying a planet floating in space.",
        },
      ],
      url: POLICY_URL + slug,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: [
        {
          url: "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
          width: 1600,
          height: 800,
          alt: "Letter S logo overlaying a planet floating in space.",
        },
      ],
      creator: "@CompletelyJWOL",
    },
  };
}

export default async function Cookies() {
  const page = await ghostPageData(slug);

  const link = { title: "Policies", url: POLICY_ROUTE };

  return (
    <div className="content-grid flex flex-col gap-8 bg-always-dark">
      <PageMain page={page} link={link} includeUpdate={true} />
    </div>
  );
}

import { ghostMetaSingle } from "@/lib/api/server/ghostServer";
import { ghostPageData } from "@/lib/api/server/ghostServer/_ghostPage";
import PageMain from "@/lib/components/pages/pageMain";
import { POLICY_URL } from "@/lib/utils/constants";
import { Metadata } from "next";

export const revalidate = 600;

const slug = "disclaimer";

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
      url: POLICY_URL + slug,
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

export default async function Disclaimer() {
  const page = await ghostPageData(slug);

  const links = [{ title: "Policy", slug: "#" }];

  return (
    <div className="content-grid flex flex-col gap-6 px-3 lg:px-0">
      <PageMain page={page} links={links} includeUpdate={true} />
    </div>
  );
}

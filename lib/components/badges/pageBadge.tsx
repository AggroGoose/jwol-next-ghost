import Link from "next/link";

export default function PageBadge({
  links,
}: {
  links: Array<{ title: string; slug: string }>;
}) {
  return (
    <button className="page_top_badge">
      <PageLinks links={links} />
    </button>
  );
}

function PageLinks({
  links,
}: {
  links: Array<{ title: string; slug: string }>;
}) {
  if (links.length === 1)
    return <Link href={links[0].slug}>{links[0].title}</Link>;
  if (links.length === 2)
    return (
      <>
        <Link href={links[0].slug}>{links[0].title}</Link>
        {` > `}
        <Link href={links[1].slug}>{links[1].title}</Link>
      </>
    );
}

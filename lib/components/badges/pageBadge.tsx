import Link from "next/link";

export default function PageBadge({
  links,
}: {
  links: Array<{ title: string; slug: string }>;
}) {
  return (
    <button className="btn bg-primary font-head rounded-none border-none text-base-100 w-max self-center py-2 px-4 h-min hover:shadow-darkmd hover:bg-secondary">
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
    return (
      <Link
        href={links[0].slug}
        className="text-head3 leading-none font-hdw tracking-hs"
      >
        {links[0].title}
      </Link>
    );
  if (links.length === 2)
    return (
      <>
        <Link href={links[0].slug}>{links[0].title}</Link>
        {` > `}
        <Link href={links[1].slug}>{links[1].title}</Link>
      </>
    );
}

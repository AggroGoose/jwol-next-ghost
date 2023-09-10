import Link from "next/link";

export default function PageBadge({
  links,
}: {
  links: Array<{ title: string; slug: string }>;
}) {
  return (
    <button className="bg-base-primary font-head text-always-light w-max self-center leading-none pt-2.5 pb-1 px-3 h-min uppercase hover:cshadow-dark hover:bg-hover-primary">
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
        className="text-head3 leading-none font-hdw tracking-bs"
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

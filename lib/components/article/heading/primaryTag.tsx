import Link from "next/link";

export default function PrimaryTag({
  primary_tag,
}: {
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
}) {
  return (
    <button className="article__head_content--primarytag">
      <Link href={`/journal/tag/${primary_tag.slug}`}>{primary_tag.name}</Link>
    </button>
  );
}

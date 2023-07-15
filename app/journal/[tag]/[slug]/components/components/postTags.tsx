import Link from "next/link";

export default function PostTags({
  tags,
}: {
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}) {
  return (
    <div className="article_tags">
      <p>Tags:</p>
      {tags.map((tag) => (
        <div className="article_tags--tag">
          <Link
            key={tag.slug}
            href={`/journal/${tag.slug}`}
          >{`#${tag.name}`}</Link>
        </div>
      ))}
    </div>
  );
}

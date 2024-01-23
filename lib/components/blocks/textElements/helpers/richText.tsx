import Link from "next/link";

export default function RichText({
  block,
}: {
  block: LexicalText | LexicalLink;
}) {
  return (
    <>
      {block.type === "link" && (
        <LinkObj url={block.url}>
          <EmphasisCheck level={block.children[0].format} hasLink={true}>
            {block.children[0].text}
          </EmphasisCheck>
        </LinkObj>
      )}
      {block.type === "extended-text" && (
        <EmphasisCheck level={block.format}>{block.text}</EmphasisCheck>
      )}
    </>
  );
}

function LinkObj({
  url,
  children,
}: {
  children: React.ReactNode;
  url: string;
}) {
  const internal = /(www.noleavesociety)/.test(url);
  if (internal)
    return (
      <Link
        href={url}
        className="text-fcolor-link font-semibold md:font-bold hover:text-hover-link hover:underline"
      >
        {children}
      </Link>
    );
  return (
    <a
      href={url}
      className="text-fcolor-link font-semibold md:font-bold hover:text-hover-link hover:underline"
      target="_blank"
    >
      {children}
    </a>
  );
}

function EmphasisCheck({
  children,
  level,
  hasLink = false,
}: {
  children: React.ReactNode;
  level: number;
  hasLink?: boolean;
}) {
  const hasBold = level === 1 || level === 3;
  const classBuilder = `${
    level === 1 || level === 3 ? "font-semibold md:font-bold " : ""
  }${level === 2 || level === 3 ? "italic " : ""}${
    level === 4 ? "underline " : ""
  }${level === 5 ? "line-through" : ""}`.trim();
  if (level > 0) {
    return (
      <span
        className={`${classBuilder}${
          !hasLink && hasBold ? " text-subtle-flip2" : ""
        }`}
      >
        {children}
      </span>
    );
  } else {
    return <>{children}</>;
  }
}

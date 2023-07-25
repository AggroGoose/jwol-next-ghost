import Link from "next/link";

export default function RichText({ elem }: { elem: BlockRichText }) {
  return (
    <LinkCheck elem={elem}>
      <EmphasisCheck elem={elem}>{elem.content}</EmphasisCheck>
    </LinkCheck>
  );
}

function LinkCheck({
  children,
  elem,
}: {
  children: React.ReactNode;
  elem: BlockRichText;
}) {
  if (elem.link) {
    const { url, internal } = elem.link;
    if (internal) return <Link href={url}>{children}</Link>;
    return <a href={url}>{children}</a>;
  } else {
    return <>{children}</>;
  }
}

function EmphasisCheck({
  children,
  elem,
}: {
  children: React.ReactNode;
  elem: BlockRichText;
}) {
  const spanCheck = (elem: BlockRichText) => {
    const { emphasis } = elem;
    if (
      emphasis.bold ||
      emphasis.italic ||
      emphasis.strikethrough ||
      emphasis.underline
    )
      return true;
    return false;
  };
  const classBuilder = `${elem.emphasis.bold ? "bld " : ""}${
    elem.emphasis.italic ? "itl " : ""
  }${elem.emphasis.underline ? "udl " : ""}${
    elem.emphasis.strikethrough ? "str" : ""
  }`;
  if (spanCheck(elem)) {
    return <span className={classBuilder}>{children}</span>;
  } else {
    return <>{children}</>;
  }
}

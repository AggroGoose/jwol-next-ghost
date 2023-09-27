import Link from "next/link";

export default function RichText({ elem }: { elem: BlockRichText }) {
  return (
    <>
      {elem.link && (
        <LinkObj link={elem.link}>
          <EmphasisCheck elem={elem}>{elem.content}</EmphasisCheck>
        </LinkObj>
      )}
      {!elem.link && <EmphasisCheck elem={elem}>{elem.content}</EmphasisCheck>}
    </>
  );
}

function LinkObj({
  link,
  children,
}: {
  children: React.ReactNode;
  link: {
    url: string;
    internal: boolean;
  };
}) {
  const { url, internal } = link;
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
  const classBuilder = `${
    elem.emphasis.bold ? "font-semibold md:font-bold " : ""
  }${elem.emphasis.italic ? "italic " : ""}${
    elem.emphasis.underline ? "underline " : ""
  }${elem.emphasis.strikethrough ? "line-through" : ""}`.trim();
  if (spanCheck(elem)) {
    return (
      <span
        className={`${classBuilder}${
          !elem.link && elem.emphasis.bold ? " text-subtle-flip2" : ""
        }`}
      >
        {children}
      </span>
    );
  } else {
    return <>{children}</>;
  }
}

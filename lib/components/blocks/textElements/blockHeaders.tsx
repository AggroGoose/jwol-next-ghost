import Link from "next/link";
import RichText from "./helpers/richText";

export default function BlockHeaders({
  elem,
  firstH2 = true,
  disableToc = false,
}: {
  elem: BlockHeadCard;
  firstH2?: boolean;
  disableToc?: boolean;
}) {
  const { type, content, tag } = elem;
  const mappedContent = content.map((block, i) => (
    <RichText elem={block} key={i} />
  ));

  if (type === "h1")
    return (
      <h1 id={tag} className="blmain">
        {mappedContent}
      </h1>
    );
  if (type === "h2") {
    if (firstH2 || disableToc) {
      return (
        <h2 className="blmain" id={tag}>
          {mappedContent}
        </h2>
      );
    } else {
      return (
        <>
          <div className="blmain text-center text-sm font-medium italic">
            <Link
              href="#table-of-contents"
              className="text-secondary hover:text-primary hover:underline"
            >
              Return to Table of Contents
            </Link>
          </div>
          <h2 className="blmain" id={tag}>
            {mappedContent}
          </h2>
        </>
      );
    }
  }
  if (type === "h3")
    return (
      <h3 className="blmain" id={tag}>
        {mappedContent}
      </h3>
    );
  if (type === "h4")
    return (
      <h4 className="blmain" id={tag}>
        {mappedContent}
      </h4>
    );
}

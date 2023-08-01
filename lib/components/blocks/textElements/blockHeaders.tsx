import Link from "next/link";
import RichText from "./helpers/richText";

export default function BlockHeaders({
  elem,
  firstH2 = true,
}: {
  elem: BlockHeadCard;
  firstH2?: boolean;
}) {
  const { type, content, tag } = elem;
  const mappedContent = content.map((block, i) => (
    <RichText elem={block} key={i} />
  ));

  if (type === "h1") return <h1 id={tag}>{mappedContent}</h1>;
  if (type === "h2") {
    console.log(tag + ": " + firstH2);
    if (firstH2) {
      return <h2 id={tag}>{mappedContent}</h2>;
    } else {
      return (
        <>
          <div className="block_toc_return">
            <Link href="#table-of-contents">Return to Table of Contents</Link>
          </div>
          <h2 id={tag}>{mappedContent}</h2>
        </>
      );
    }
  }
  if (type === "h3") return <h3 id={tag}>{mappedContent}</h3>;
  if (type === "h4") return <h4 id={tag}>{mappedContent}</h4>;
}

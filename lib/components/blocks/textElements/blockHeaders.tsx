import Link from "next/link";
import RichText from "./helpers/richText";

export default function BlockHeaders({
  block,
  disableToc = false,
}: {
  block: LexicalHead;
  disableToc?: boolean;
}) {
  const { children, tag } = block;
  const mappedContent = children.map((text, i) => (
    <RichText block={text} key={i} />
  ));

  // if (type === "h1")
  //   return (
  //     <h1 id={tag} className="blmain">
  //       {mappedContent}
  //     </h1>
  //   );
  if (tag === "h2") {
    return (
      <h2 className="blmain" id={tag}>
        {mappedContent}
      </h2>
    );
  }
  if (tag === "h3")
    return (
      <h3 className="blmain" id={tag}>
        {mappedContent}
      </h3>
    );
  if (tag === "h4")
    return (
      <h4 className="blmain" id={tag}>
        {mappedContent}
      </h4>
    );
}

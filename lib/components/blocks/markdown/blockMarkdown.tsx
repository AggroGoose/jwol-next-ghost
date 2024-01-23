import BlockList from "../textElements/blockList";
import BlockQuoteMD from "../textElements/blockQuoteMD";

export default function BlockMarkdownCard({
  block,
}: {
  block: LexicalMarkdownParsed;
}) {
  return (
    <>
      {block.children.map((child, i) => {
        if (child.type == "markdownQuote")
          return <BlockQuoteMD block={child} key={i} />;
        if (child.type == "ol" || child.type == "ul")
          return <BlockList block={child} key={i} />;
      })}
    </>
  );
}

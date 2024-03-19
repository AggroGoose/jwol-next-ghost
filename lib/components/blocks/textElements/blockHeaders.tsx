import RichText from "./helpers/richText";

export default function BlockHeaders({ block }: { block: LexicalHead }) {
  const { children, tag } = block;
  const mappedContent = children.map((text, i) => (
    <RichText block={text} key={i} />
  ));
  if (tag === "h2")
    return <h2 className="block-main max-xl:px-3">{mappedContent}</h2>;
  if (tag === "h3")
    return <h3 className="block-main max-xl:px-3">{mappedContent}</h3>;
  if (tag === "h4")
    return <h4 className="block-main max-xl:px-3">{mappedContent}</h4>;
}

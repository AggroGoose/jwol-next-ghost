import headerIdParse from "./helpers/headerParse";
import RichText from "./helpers/richText";

export default function BlockHeaders({ elem }: { elem: BlockTextCard }) {
  const { type, content } = elem;
  const headId = headerIdParse(content);
  const mappedContent = content.map((block, i) => (
    <RichText elem={block} key={i} />
  ));

  if (type === "h1") return <h1 id={headId}>{mappedContent}</h1>;
  if (type === "h2") return <h2 id={headId}>{mappedContent}</h2>;
  if (type === "h3") return <h3 id={headId}>{mappedContent}</h3>;
  if (type === "h4") return <h4 id={headId}>{mappedContent}</h4>;
}

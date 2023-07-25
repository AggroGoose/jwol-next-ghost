import RichText from "./helpers/richText";

export default function BlockList({ elem }: { elem: BlockListCard }) {
  const listItems = elem.content.map((item, i) => {
    return (
      <li key={i}>
        {item.map((richText, i) => (
          <RichText elem={richText} key={i} />
        ))}
      </li>
    );
  });
  if (elem.type === "ol") return <ol>{listItems}</ol>;
  if (elem.type === "ul") return <ul>{listItems}</ul>;
}

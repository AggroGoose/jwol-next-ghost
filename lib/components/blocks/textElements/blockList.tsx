import RichText from "./helpers/richText";

export default function BlockList({ elem }: { elem: BlockListCard }) {
  const listItems = elem.content.map((item, i) => {
    return (
      <li className="pl-2 li-secondary" key={i}>
        {item.map((richText, i) => (
          <RichText elem={richText} key={i} />
        ))}
      </li>
    );
  });
  if (elem.type === "ol")
    return (
      <ol className="ml-6 list-decimal flex flex-col gap-4 blmain">
        {listItems}
      </ol>
    );
  if (elem.type === "ul")
    return (
      <ul className="ml-6 list-disc flex flex-col gap-4 blmain">{listItems}</ul>
    );
}

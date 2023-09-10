import RichText from "./helpers/richText";

export default function BlockList({ elem }: { elem: BlockListCard }) {
  const listItems = elem.content.map((item, i) => {
    return (
      <li
        className="pl-2 marker:font-bold marker:text-base-accent md:pl-3"
        key={i}
      >
        {item.map((richText, i) => (
          <RichText elem={richText} key={i} />
        ))}
      </li>
    );
  });
  if (elem.type === "ol")
    return (
      <ol className="ml-6 list-decimal flex flex-col gap-3 blmain md:ml-10">
        {listItems}
      </ol>
    );
  if (elem.type === "ul")
    return (
      <ul className="ml-6 list-disc flex marker:text-xl flex-col gap-3 blmain md:ml-10">
        {listItems}
      </ul>
    );
}

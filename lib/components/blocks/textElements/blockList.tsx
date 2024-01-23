import RichText from "./helpers/richText";

export default function BlockList({ block }: { block: LexicalList }) {
  const listItems = block.children.map((item, i) => {
    return (
      <li
        className="pl-2 marker:font-bold marker:text-base-accent md:pl-3"
        key={i}
      >
        {item.children.map((richText, i) => (
          <RichText block={richText} key={i} />
        ))}
      </li>
    );
  });
  if (block.type === "ol")
    return (
      <ol className="ml-6 list-decimal flex flex-col gap-3 blmain md:ml-10">
        {listItems}
      </ol>
    );
  if (block.type === "ul")
    return (
      <ul className="ml-6 list-disc flex marker:text-xl flex-col gap-3 blmain md:ml-10">
        {listItems}
      </ul>
    );
}

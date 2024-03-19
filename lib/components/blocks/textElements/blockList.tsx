import RichText from "./helpers/richText";

export default function BlockList({ block }: { block: LexicalList }) {
  const listItems = block.children.map((item, i) => {
    return (
      <li
        className="marker:font-bold marker:text-primary-700 marker:text-lg marker:my-auto lg:pl-2"
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
      <ol className="block-main list-decimal flex flex-col gap-3 ml-8 max-xl:px-2">
        {listItems}
      </ol>
    );
  if (block.type === "ul")
    return (
      <ul className="block-main list-disc flex flex-col gap-3 ml-8 max-xl:px-2">
        {listItems}
      </ul>
    );
}

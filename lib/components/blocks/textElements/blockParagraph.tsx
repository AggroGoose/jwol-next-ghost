import RichText from "./helpers/richText";

export default function BlockParagraph({
  block,
  dropCap = false,
}: {
  block: LexicalPara;
  dropCap?: boolean;
}) {
  const { children } = block;
  return (
    <p
      className={`block-main max-xl:px-3${
        dropCap ? " first-of-type:drop-cap" : ""
      }`}
    >
      {children.map((section, i) => (
        <RichText block={section} key={i} />
      ))}
    </p>
  );
}

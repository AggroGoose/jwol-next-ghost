import RichText from "./helpers/richText";

export default function BlockParagraph({
  elem,
  dropCap = false,
}: {
  elem: BlockTextCard;
  dropCap?: boolean;
}) {
  const { content } = elem;
  return (
    <p className={`${dropCap ? "hasDropCap" : ""}`}>
      {content.map((section, i) => (
        <RichText elem={section} key={i} />
      ))}
    </p>
  );
}

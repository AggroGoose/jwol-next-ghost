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
    <p
      className={`blmain ${
        dropCap
          ? " first-letter:float-left first-letter:text-[4rem] first-letter:leading-[0.6] first-letter:mr-[0.1em] first-letter:my-[0.2em]"
          : ""
      }`}
    >
      {content.map((section, i) => (
        <RichText elem={section} key={i} />
      ))}
    </p>
  );
}

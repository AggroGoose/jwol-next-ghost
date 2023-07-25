import BlockContent from "../blockContent";

export default function BlockMarkdownCard({ elem }: { elem: BlockMarkupCard }) {
  return (
    <>
      <BlockContent content={elem.content} />
    </>
  );
}

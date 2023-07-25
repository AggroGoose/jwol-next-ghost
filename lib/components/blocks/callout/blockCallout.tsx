export default function BlockCallout({ elem }: { elem: BlockCalloutCard }) {
  return (
    <div className="block_callout">
      <div dangerouslySetInnerHTML={{ __html: elem.content }} />
    </div>
  );
}

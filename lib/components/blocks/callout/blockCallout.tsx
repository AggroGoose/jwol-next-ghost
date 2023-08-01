import Image from "next/image";

export default function BlockCallout({ elem }: { elem: BlockCalloutCard }) {
  return (
    <div className="block_callout">
      <Image
        src={"/images/Josh Boba Outline.png"}
        width={1050}
        height={2100}
        alt="Image outline of author drinking boba"
      />
      <div
        className="block_callout_content"
        dangerouslySetInnerHTML={{ __html: elem.content }}
      />
    </div>
  );
}

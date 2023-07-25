import YoutubeCard from "./youtubeCard";

export default function BlockEmbed({ block }: { block: BlockEmbedCard }) {
  if (block.embedType === "YouTube") return <YoutubeCard elem={block} />;
}

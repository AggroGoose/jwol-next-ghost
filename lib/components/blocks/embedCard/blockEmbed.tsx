import YoutubeCard from "./youtubeCard";

export default function BlockEmbed({ block }: { block: LexicalEmbed }) {
  if (block.metadata.provider_name === "YouTube")
    return <YoutubeCard block={block} />;
}

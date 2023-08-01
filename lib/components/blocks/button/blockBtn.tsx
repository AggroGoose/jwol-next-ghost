export default function BlockButton({ block }: { block: BlockButtonCard }) {
  return (
    <a href={block.url} className="block_button" target="_blank">
      {block.label}
    </a>
  );
}

export default function BlockButton({ block }: { block: BlockButtonCard }) {
  return (
    <a
      href={block.url}
      className="blmin w-max text-sm p-4 bg-primary text-base-100 rounded-md mx-auto font-bold leading-none hover:bg-secondary"
      target="_blank"
    >
      {block.label}
    </a>
  );
}

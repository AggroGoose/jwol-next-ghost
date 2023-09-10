export default function BlockButton({ block }: { block: BlockButtonCard }) {
  return (
    <a
      href={block.url}
      className="blmain max-w-full text-sm text-center p-4 bg-base-accent text-always-light rounded-md mx-auto font-bold leading-tight hover:bg-hover-accent"
      target="_blank"
    >
      {block.label}
    </a>
  );
}

export default function BlockButton({ block }: { block: LexicalButton }) {
  return (
    <a
      href={block.buttonUrl}
      className="blmain max-w-full text-sm text-center p-4 bg-base-accent text-always-light rounded-md mx-auto font-bold leading-tight hover:bg-hover-accent"
      target="_blank"
    >
      {block.buttonText}
    </a>
  );
}

export default function BlockButton({ block }: { block: LexicalButton }) {
  return (
    <a
      href={block.buttonUrl}
      className="blmain max-w-full text-sm text-center p-4 bg-accent-600 text-always-light rounded-md mx-auto font-semibold leading-tight hover:bg-accent-500 secondary-font tracking-wide"
      target="_blank"
    >
      {block.buttonText}
    </a>
  );
}

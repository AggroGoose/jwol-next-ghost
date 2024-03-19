export default function BlockButton({ block }: { block: LexicalButton }) {
  return (
    <a
      href={block.buttonUrl}
      className="blmain max-w-full text-center p-4 bg-accent-600 text-always-light leading-none rounded-md mx-auto text-lg hover:bg-accent-500 secondary-font tracking-widest"
      target="_blank"
    >
      {block.buttonText}
    </a>
  );
}

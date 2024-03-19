import QuoteTop from "./SVG/quoteTop";
import RichText from "./helpers/richText";

export default function BlockQuote({ block }: { block: LexicalQuote }) {
  return (
    <blockquote className="relative block-main max-md:px-2">
      <div className="absolute top-0 left-7 px-3 leading-[0] z-[2]">
        <QuoteTop className="aspect-[17/11] w-9 fill-accent-400" />
      </div>
      <div className="grid grid-cols-quote grid-rows-quote mt-3 ml-3 my-0 mb-0">
        <div
          className={`tquote-clip col-start-1 col-end-3 row-start-1 row-end-3 text-lg font-medium flex flex-col gap-6 border-4 border-solid border-fcolor-base rounded-lg z-[1] italic text-center px-6 py-9`}
        >
          {block.children.map((text, i) => {
            return <RichText block={text} key={i} />;
          })}
        </div>
        <div className="bquote-clip col-start-2 col-end-4 row-start-2 row-end-4 border-2 border-solid border-fcolor-base rounded-lg z-0" />
      </div>
    </blockquote>
  );
}

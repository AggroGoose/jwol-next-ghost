import QuoteTop from "./SVG/quoteTop";
import QuoteBot from "./SVG/quoteBot";
import RichText from "./helpers/richText";

export default function BlockQuote({ elem }: { elem: BlockQuoteCard }) {
  const { author } = elem;
  return (
    <blockquote className="relative blmain">
      <div className="absolute top-0 left-7 px-3 leading-[0] z-[2] bg-base-100">
        <QuoteTop className="aspect-[17/11] w-9 fill-primary" />
      </div>
      <div className="grid grid-cols-quote grid-rows-quote mt-3 ml-3 my-0 mb-0">
        <div
          className={`col-start-1 col-end-3 row-start-1 row-end-3 bg-base-100 text-lg font-medium flex flex-col gap-6 border-4 border-solid border-neutral rounded-lg z-[1] italic ${
            author ? wAuthor : noAuthor
          }`}
        >
          {elem.content.map((item, i) => {
            return (
              <p key={i}>
                {item.map((richText, i) => (
                  <RichText elem={richText} key={i} />
                ))}
              </p>
            );
          })}
          {author && <p className="self-end font-bold not-italic">{author}</p>}
        </div>
        <div className="col-start-2 col-end-4 row-start-2 row-end-4 border-2 border-solid border-neutral rounded-lg z-0" />
      </div>
    </blockquote>
  );
}

const wAuthor = "text-left pl-6 py-9 pr-4";
const noAuthor = "text-center px-6 py-9";

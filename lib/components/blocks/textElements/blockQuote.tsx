import QuoteTop from "./SVG/quoteTop";
import QuoteBot from "./SVG/quoteBot";
import RichText from "./helpers/richText";

export default function BlockQuote({ elem }: { elem: BlockQuoteCard }) {
  const { author } = elem;
  return (
    <blockquote className="block_quote">
      <div className="block_quote_quotes quote-top">
        <QuoteTop />
      </div>
      <div className="block_quote_inner">
        <div className={`block_quote_content${author ? " has_author" : ""}`}>
          {elem.content.map((item, i) => {
            return (
              <p key={i}>
                {item.map((richText, i) => (
                  <RichText elem={richText} key={i} />
                ))}
              </p>
            );
          })}
          {author && <p className="block_quote_content--author">{author}</p>}
        </div>
        <div className="block_quote_shadow" />
      </div>
    </blockquote>
  );
}

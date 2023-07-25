import RichText from "./helpers/richText";

export default function BlockQuote({ elem }: { elem: BlockQuoteCard }) {
  const { author } = elem;
  return (
    <blockquote className="block_quote">
      <div className="block_quote--start" />
      <div className="block_quote--content">
        {elem.content.map((item, i) => {
          return (
            <p key={i}>
              {item.map((richText, i) => (
                <RichText elem={richText} key={i} />
              ))}
            </p>
          );
        })}
        {author && (
          <p className="block_quote_content--author">
            {author.map((richText, i) => (
              <RichText elem={richText} key={i} />
            ))}
          </p>
        )}
      </div>
      <div className="block_quote--end" />
    </blockquote>
  );
}

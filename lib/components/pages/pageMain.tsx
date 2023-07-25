import BlockContent from "../blocks/blockContent";

export default function PageMain({ page }: { page: ResponsePage }) {
  return (
    <div className="page_about_main">
      <h1>{page.title}</h1>
      <div className="article__content post-grid">
        <BlockContent content={page.content} />
      </div>
    </div>
  );
}

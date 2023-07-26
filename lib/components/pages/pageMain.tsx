import BlockContent from "../blocks/blockContent";

export default function PageMain({
  page,
  crumb,
}: {
  page: ResponsePage;
  crumb: { name: string; link: string };
}) {
  return (
    <div className="page_main">
      <button className="article_head_content--primarytag">
        <a href="#">{crumb.name}</a>
      </button>
      <h1>{page.title}</h1>
      <div className="block_content post-grid">
        <BlockContent content={page.content} />
      </div>
    </div>
  );
}

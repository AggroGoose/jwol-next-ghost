import PageBadge from "../badges/pageBadge";
import BlockContent from "../blocks/blockContent";

export default function PageMain({
  page,
  links,
}: {
  page: ResponsePage;
  links: Array<{ title: string; slug: string }>;
}) {
  const { content, toc } = page.content;
  return (
    <div className="page_main">
      <PageBadge links={links} />
      <h1>{page.title}</h1>
      <div className="block_content post-grid">
        <BlockContent content={content} />
      </div>
    </div>
  );
}

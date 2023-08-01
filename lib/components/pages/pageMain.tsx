import PageBadge from "../badges/pageBadge";
import BlockContent from "../blocks/blockContent";
import TableofContents from "../blocks/tableOfContents";
import Date from "../helpers/date";

export default function PageMain({
  page,
  links,
  includeUpdate = false,
  disableToc = false,
}: {
  page: ResponsePage;
  links: Array<{ title: string; slug: string }>;
  includeUpdate?: boolean;
  disableToc?: boolean;
}) {
  const { content, toc } = page.content;
  return (
    <div className="page_main">
      <PageBadge links={links} />
      <h1>{page.title}</h1>
      {includeUpdate && (
        <div className="page_main_updated">
          <span>Last Updated: </span>
          <Date dateString={page.updated_at} />
        </div>
      )}
      {!disableToc && <TableofContents toc={toc} />}
      <div className="block_content post-grid">
        <BlockContent content={content} disableToc={disableToc} />
      </div>
    </div>
  );
}

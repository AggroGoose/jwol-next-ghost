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
    <div className="flex flex-col gap-6 mt-6">
      <PageBadge links={links} />
      <h1 className="text-center">{page.title}</h1>
      {includeUpdate && (
        <div className="self-center text-lg leading-none">
          <b>Last Updated: </b>
          <Date dateString={page.updated_at} />
        </div>
      )}
      {!disableToc && <TableofContents toc={toc} />}
      <div className="grid grid-cols-blockGrid gap-6 self-center w-[var(--blog-width)]">
        <BlockContent content={content} disableToc={disableToc} />
      </div>
    </div>
  );
}

import Link from "next/link";
import BlockContent from "../blocks/blockContent";
import Date from "../helpers/date";

export default function PageMain({
  page,
  link,
  includeUpdate = false,
  disableToc = false,
}: {
  page: ResponsePage;
  link: { title: string; url: string };
  includeUpdate?: boolean;
  disableToc?: boolean;
}) {
  const { content } = page;

  return (
    <div className="flex flex-col gap-6 mt-6 max-w-[100vw]">
      <div className="flex flex-col gap-3">
        <div className="text-lg font-bold tracking-wider">
          <Link
            href={"home"}
            className="text-fcolor-link hover:text-hover-link hover:underline"
          >
            Home
          </Link>
          <span className="text-fcolor-base">{` // `}</span>
          <Link
            href={link.url}
            className="text-fcolor-link hover:text-hover-link hover:underline"
          >
            {link.title}
          </Link>
        </div>
        <h1>{page.title}</h1>

        {includeUpdate && (
          <div className="leading-none">
            <strong className="text-subtle-flip2">Last Updated: </strong>
            <Date dateString={page.updated_at} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-page gap-y-6 py-6">
        <div className="content-grid grid grid-cols-blockGrid gap-6 self-center px-3 pb-6 xl:px-0">
          <BlockContent content={content} disableToc={true} />
        </div>
      </div>
    </div>
  );
}

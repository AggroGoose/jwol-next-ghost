import Link from "next/link";
import BlockContent from "../blocks/blockContent";
import Date from "../helpers/date";

export default function PageMain({
  page,
  link,
  includeUpdate = false,
  excerpt = false,
}: {
  page: ResponsePage;
  link: { title: string; url: string };
  includeUpdate?: boolean;
  excerpt?: boolean;
}) {
  const { content } = page;

  return (
    <div className="flex flex-col gap-8 mt-8 max-w-[100vw]">
      <div className="flex flex-col gap-8 px-3 xl:px-0">
        <Link
          href={link.url}
          className="text-head4 font-bold secondary-font leading-none tracking-wider text-accent-500 hover:text-accent-300 self-center"
        >
          #{link.title}
        </Link>
        <h1 className="text-primary-50 text-center leading-none">
          {page.title}
        </h1>
        {excerpt && (
          <p className="w-full max-w-(--body-size) text-center self-center text-always-light text-head4 italic">
            {page.excerpt}
          </p>
        )}

        {includeUpdate && (
          <div className="leading-normal text-always-light self-center">
            <strong className="text-accent-500">Last Updated: </strong>
            <Date dateString={page.updated_at} />
          </div>
        )}
      </div>
      <div className="w-full grid block-grid gap-y-8 self-center py-8 bg-always-light rounded-2xl">
        <BlockContent content={content} />
      </div>
    </div>
  );
}

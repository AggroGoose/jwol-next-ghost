import Link from "next/link";

export default function TableofContents({
  toc,
  react = false,
}: {
  toc: BlockTOCArray;
  react?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 w-[var(--blog-width)] self-center${
        react ? " -mt-[48px] xl:-mt-[180px]" : ""
      }`}
    >
      <h2 id="table-of-contents" className="leading-none text-head2">
        Table of Contents
      </h2>
      <ol className="list-decimal flex flex-col gap-1">
        {toc.map((obj, i) => {
          return (
            <li
              className="ml-6 pl-4 marker:text-fcolor-base marker:font-bold md:ml-10"
              key={i}
            >
              <Link
                href={`#${obj.tag}`}
                className="text-fcolor-link font-bold hover:text-hover-link hover:underline"
              >
                {obj.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

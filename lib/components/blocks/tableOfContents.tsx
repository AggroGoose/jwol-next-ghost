import Link from "next/link";

export default function TableofContents({ toc }: { toc: BlockTOCArray }) {
  return (
    <div className={`content-grid flex flex-col gap-2 self-center`}>
      <h2 id="table-of-contents" className="leading-none text-head2">
        Table of Contents
      </h2>
      <ol className="list-decimal flex flex-col gap-1">
        {toc.map((obj, i) => {
          return (
            <li
              className="pl-4 marker:text-fcolor-base marker:font-bold ml-10"
              key={i}
            >
              <Link
                href={`#${obj.tag}`}
                className="text-fcolor-link font-semibold md:font-bold hover:text-hover-link hover:underline"
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

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
      className={`flex flex-col gap-6 w-[var(--blog-width)] self-center${
        react ? " -mt-[48px] xl:-mt-[156px]" : ""
      }`}
    >
      <h2 id="table-of-contents" className="leading-none text-head2">
        Table of Contents
      </h2>
      <ol className="list-decimal pl-[40px]">
        {toc.map((obj, i) => {
          return (
            <li className="pl-3 li-dark" key={i}>
              <Link
                href={`#${obj.tag}`}
                className="text-secondary font-bold hover:text-primary hover:underline"
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

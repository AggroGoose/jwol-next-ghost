import Link from "next/link";

export default function TableofContents({ toc }: { toc: BlockTOCArray }) {
  return (
    <div className="block_toc">
      <h2 id="table-of-contents">Table of Contents</h2>
      <ol className="block_toc_links">
        {toc.map((obj, i) => {
          return (
            <li key={i}>
              <Link href={`#${obj.tag}`}>{obj.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

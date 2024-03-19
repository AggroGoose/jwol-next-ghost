"use client";

import { useEffect, useState } from "react";
import PageChevron from "./SVG/pageChevron";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Pagination({ meta }: { meta: ghostPostMetaData }) {
  const [pageArray, setPageArray] = useState<Array<number>>([]);
  const pathname = usePathname();
  useEffect(() => {
    if (meta.pages <= 5) {
      const numberArray: Array<number> = [];

      for (let i = 0; i < meta.pages; i++) {
        numberArray.push(i + 1);
      }

      setPageArray(numberArray);
    }
  }, [meta]);

  return (
    <div className={`flex gap-4 justify-center items-center`}>
      <Link
        href={meta.prev ? pathname + "?page=" + meta.prev : ":"}
        className="w-6 h-full"
      >
        <PageChevron
          className={`aspect-[13/9] w-full ${
            meta.prev
              ? "fill-primary-500 hover:fill-primary-700"
              : "fill-primary-100"
          }`}
          left={true}
        />
      </Link>
      {pageArray.map((page, i) => (
        <Link
          href={pathname + "?page=" + page}
          key="i"
          className={`text-lg secondary-font ${
            page == meta.page
              ? "font-bold text-primary-700"
              : "text-primary-500 hover:text-primary-700"
          }`}
        >
          {page}
        </Link>
      ))}
      <Link
        href={meta.next ? pathname + "?page=" + meta.next : ":"}
        className="w-6 h-full"
      >
        <PageChevron
          className={`aspect-[13/9] w-full ${
            meta.next
              ? "fill-primary-500 hover:fill-primary-700"
              : "fill-primary-100"
          }`}
        />
      </Link>
    </div>
  );
}

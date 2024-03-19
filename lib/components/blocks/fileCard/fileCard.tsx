import React from "react";
import parseFileData from "./helpers/parseFileData";
import DownloadIcon from "./SVG/downloadIcon";

export default function FileCard({ block }: { block: LexicalFile }) {
  const { src, fileTitle, fileCaption, fileName, fileSize } = block;
  return (
    <div className="block-main md:block-thin flex flex-col gap-2">
      <a
        className="flex items-stretch justify-between p-1.5 min-h-[92px] border border-solid rounded-md w-full hover:border-2"
        href={src}
        title="Download"
        download
      >
        <div className="flex flex-col justify-between mx-2 my-1 w-full">
          <div className="text-base font-bold">{fileTitle}</div>
          <div className="inline text-xs mt-[2px]">
            <div className="inline font-semibold">{fileName}</div>
            <div className="inline text-sm opacity-60">{fileSize}</div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-[80px] h-full">
          <DownloadIcon className="w-6 h-6 fill-primary" />
        </div>
      </a>
      {fileCaption.length > 0 && (
        <figcaption
          className="mt-3 text-sm italic text-center"
          dangerouslySetInnerHTML={{ __html: block.fileCaption }}
        />
      )}
    </div>
  );
}

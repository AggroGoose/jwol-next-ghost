import React from "react";
import parseFileData from "./helpers/parseFileData";
import DownloadIcon from "./SVG/downloadIcon";

export default function FileCard({ elem }: { elem: ParseElement }) {
  const elemChildren = elem.children as ParseElement[];
  const { fileSource, fileTitle, fileName, fileSize } =
    parseFileData(elemChildren);
  return (
    <div className="block_file">
      <a
        className="block_file_container"
        href={fileSource}
        title="Download"
        download
      >
        <div className="block_file_contents">
          <div className="block_file_title">{fileTitle}</div>
          <div className="block_file_metadata">
            <div className="block_file_filename">{fileName}</div>
            <div className="block_file_filesize">{fileSize}</div>
          </div>
        </div>
        <div className="block_file_icon">
          <DownloadIcon />
        </div>
      </a>
    </div>
  );
}

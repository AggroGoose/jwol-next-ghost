"use client";

import Image from "next/image";

const BlockImage = ({ block }: { block: LexicalImage }) => {
  const { src, height, width, alt, caption } = block;

  const wideImg =
    Number(width) > Number(height) && Number(width) / Number(height) > 1.3;

  return (
    <>
      <figure className={`${wideImg ? "block-main" : "block-thin"}`}>
        <Image
          src={src}
          alt={alt || "No alt provided."}
          sizes="(max-width: 950px) 100vw (max-width: 1200px) 80vw, 60vw"
          width={width}
          height={height}
        />
        {caption.length > 0 && (
          <figcaption
            className="mt-3 text-sm italic text-center"
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        )}
      </figure>
    </>
  );
};

export default BlockImage;

"use client";

import Image from "next/image";

const BlockImage = ({ elem }: { elem: BlockImageCard }) => {
  const { src, height, width, alt, caption } = elem;

  const wideImg = Number(width) > Number(height);

  return (
    <>
      <figure className={`mx-auto ${wideImg ? "blmain" : "blmin"}`}>
        <Image
          src={src}
          alt={alt || "No alt provided."}
          sizes="(max-width: 950px) 100vw (max-width: 1200px) 80vw, 60vw"
          width={width}
          height={height}
        />
        {caption && (
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

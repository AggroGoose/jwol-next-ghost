"use client";

import { useState } from "react";
import Image from "next/image";
import ModalPortal from "@/lib/components/modalPortal";
import ImageModal from "./imageModal";

const BlockImage = ({ elem }: { elem: BlockImageCard }) => {
  const [viewModal, setViewModal] = useState(false);
  const { src, height, width, alt, caption } = elem;

  const wideImg = Number(width) > Number(height);

  return (
    <>
      {viewModal && (
        <ModalPortal>
          <ImageModal
            src={src}
            alt={alt || "No alt provided."}
            width={width}
            height={height}
            caption={caption ? caption : null}
            setViewModal={setViewModal}
          />
        </ModalPortal>
      )}
      <figure
        className={`block_image_card${wideImg ? " block_image_wide" : ""}`}
      >
        <div
          className="block_image"
          onClick={() => {
            setViewModal(true);
          }}
        >
          <Image
            src={src}
            alt={alt || "No alt provided."}
            width={width}
            height={height}
          />
        </div>
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    </>
  );
};

export default BlockImage;

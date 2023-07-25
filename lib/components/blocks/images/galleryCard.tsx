"use client";

import { useState, useRef } from "react";
import ModalPortal from "@/lib/components/modalPortal";
import GalleryModal from "./galleryModal";
import GalleryImageCard from "./galleryImageCard";

export default function BlockGallery({ elem }: { elem: BlockGalleryCard }) {
  const [viewModal, setViewModal] = useState(false);
  const imgNumber = useRef<number>(0);
  const imgGallery = elem.images;
  const rowArr = rowBuilder(elem.images);
  const caption = elem.caption;

  return (
    <>
      {viewModal && (
        <ModalPortal>
          <GalleryModal
            gallery={imgGallery}
            caption={caption ? caption : null}
            setViewModal={setViewModal}
            imgNumber={imgNumber.current}
          />
        </ModalPortal>
      )}
      <figure className="block_gallery">
        <div className="block_gallery_container">
          {rowArr.map((row, i) => {
            return (
              <div className="block_gallery_row" key={i}>
                {row.map((img) => {
                  return (
                    <GalleryImageCard
                      elem={img.image}
                      imgID={img.imgId}
                      key={img.imgId}
                      setViewModal={setViewModal}
                      imgNumber={imgNumber}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    </>
  );
}

const rowBuilder = (images: BlockGalleryImage[]) => {
  const rowArr = [];
  let imageArr = [...images];
  let rows: number;

  if (imageArr.length <= 4) {
    rows = 2;
  } else {
    rows = 3;
  }

  const rowNum = Math.ceil(imageArr.length / rows);

  for (let i = 0; i < rowNum; i++) {
    const rowContents = [];
    if (imageArr.length > rows) {
      for (let i = 0; i < rows; i++) {
        rowContents.push({ imgId: imageArr[i].id, image: imageArr[i] });
      }
      imageArr = imageArr.splice(rows);
    } else if (imageArr.length <= rows) {
      for (let i = 0; i < imageArr.length; i++) {
        rowContents.push({ imgId: imageArr[i].id, image: imageArr[i] });
      }
    }
    rowArr.push(rowContents);
  }

  return rowArr;
};

"use client";

import GalleryImageCard from "./galleryImageCard";

export default function BlockGallery({ elem }: { elem: BlockGalleryCard }) {
  const rowArr = rowBuilder(elem.images);
  const caption = elem.caption;

  return (
    <figure className="blmain">
      <div className="flex flex-col gap-3">
        {rowArr.map((row, i) => {
          return (
            <div className="flex justify-center gap-3" key={i}>
              {row.map((img) => {
                return <GalleryImageCard elem={img.image} key={img.imgId} />;
              })}
            </div>
          );
        })}
      </div>
      {caption && (
        <figcaption
          className="mt-3 tex-sm italic text-center"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
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

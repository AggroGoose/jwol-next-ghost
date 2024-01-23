import Image from "next/image";

export default function GalleryImageCard({
  block,
}: {
  block: LexicalGalleryImage;
  key: number | string;
}) {
  const imgSrc = block.src;
  const imgWidth = Number(block.width);
  const imgHeight = Number(block.height);

  return (
    <div style={{ flex: `${imgWidth / imgHeight} 1 0%` }}>
      <Image
        src={imgSrc}
        alt={"Image in gallery of images. Unable to set alt for galleries."}
        sizes="(max-width: 950px) 100vw (max-width: 1200px) 80vw, 60vw"
        width={imgWidth}
        height={imgHeight}
        className="block m-0 w-full h-full"
      />
    </div>
  );
}

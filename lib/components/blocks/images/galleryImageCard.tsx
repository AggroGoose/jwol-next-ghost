import Image from "next/image";

export default function GalleryImageCard({
  elem,
  setViewModal,
  imgNumber,
  imgID,
}: {
  elem: BlockGalleryImage;
  setViewModal: (arg: boolean) => void;
  imgNumber: React.MutableRefObject<any>;
  imgID: number;
  key: number | string;
}) {
  const imgSrc = elem.src;
  const imgWidth = Number(elem.width);
  const imgHeight = Number(elem.height);

  function handleModal() {
    imgNumber.current = imgID;
    setViewModal(true);
  }
  return (
    <div
      className="block_gallery_image"
      style={{ flex: `${imgWidth / imgHeight} 1 0%` }}
      onClick={handleModal}
    >
      <Image
        src={imgSrc}
        alt={"Image in gallery of images. Unable to set alt for galleries."}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
}

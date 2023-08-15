import Image from "next/image";
import { useCallback, useEffect } from "react";
import useGalleryState from "@/lib/utils/hooks/useGalleryHook";
import ImageClose from "./SVG/imageClose";
import LeftChevron from "./SVG/leftChevron";
import RightChevron from "./SVG/rightChevron";

export default function GalleryModal({
  gallery,
  caption,
  setViewModal,
  imgNumber,
}: {
  gallery: BlockGalleryImage[];
  caption: string | null;
  setViewModal: (arg: boolean) => void;
  imgNumber: number;
}) {
  const [imgValue, setImgValue, imgRef] = useGalleryState(imgNumber);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
  }, [keyDownHandler]);

  function keyDownHandler(e: KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navLeftHandle();
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      navRightHandle();
    }
  }

  function closeModal() {
    setViewModal(false);
  }

  const navLeftHandle = useCallback(() => {
    if (imgRef.current <= 0) {
      const endImg = gallery.length - 1;
      setImgValue(endImg);
      return;
    }
    const prevImg = Number(imgRef.current) - 1;
    setImgValue(prevImg);
  }, [gallery, imgRef, setImgValue]);

  const navRightHandle = useCallback(() => {
    if (imgRef.current >= gallery.length - 1) {
      setImgValue(0);
      return;
    }
    const nextImg = Number(imgRef.current) + 1;
    setImgValue(nextImg);
  }, [gallery, imgRef, setImgValue]);

  return (
    <div className="block_modal">
      <button className="block_modal--image--button" onClick={closeModal}>
        <ImageClose />
      </button>
      <div className="block_modal--content">
        <div className="block_modal--image">
          <Image
            src={gallery[imgValue].src}
            alt={"Image in gallery of images. Unable to set alt for galleries."}
            width={Number(gallery[imgValue].width)}
            height={Number(gallery[imgValue].height)}
          />
        </div>
        {caption && (
          <p
            className="block_modal--caption"
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        )}
      </div>
      <div className="block_modal--navigation">
        <button
          className="block_modal--navigation-left"
          onClick={navLeftHandle}
        >
          <LeftChevron />
        </button>
        <button
          className="block_modal--navigation-right"
          onClick={navRightHandle}
        >
          <RightChevron />
        </button>
      </div>
      <div className="block_modal--background" onClick={closeModal} />
    </div>
  );
}

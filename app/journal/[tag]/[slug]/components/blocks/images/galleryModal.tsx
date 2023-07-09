import Image from "next/image";
import { useCallback, useEffect } from "react";
import contentEval from "@/lib/element/contentEval";
import useGalleryState from "@/lib/hooks/useGalleryHook";
import ImageClose from "./SVG/imageClose";
import LeftChevron from "./SVG/leftChevron";
import RightChevron from "./SVG/rightChevron";

export default function GalleryModal({
  gallery,
  caption,
  setViewModal,
  imgNumber,
}: {
  gallery: {
    src: string;
    width: string;
    height: string;
    alt: string;
  }[];
  caption: ParseElement | ParseText | undefined;
  setViewModal: (arg: boolean) => void;
  imgNumber: number;
}) {
  const [imgValue, setImgValue, imgRef] = useGalleryState(imgNumber);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
  }, []);

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
    <div className="post__modal">
      <button className="post__modal--image--button" onClick={closeModal}>
        <ImageClose />
      </button>
      <div className="post__modal--content">
        <div className="post__modal--image">
          <Image
            src={gallery[imgValue].src}
            alt={gallery[imgValue].alt}
            width={Number(gallery[imgValue].width)}
            height={Number(gallery[imgValue].height)}
          />
        </div>
        {caption && (
          <p className="post__modal--caption">{contentEval(caption)}</p>
        )}
      </div>
      <div className="post__modal--navigation">
        <button
          className="post__modal--navigation-left"
          onClick={navLeftHandle}
        >
          <LeftChevron />
        </button>
        <button
          className="post__modal--navigation-right"
          onClick={navRightHandle}
        >
          <RightChevron />
        </button>
      </div>
      <div className="post__modal--background" onClick={closeModal} />
    </div>
  );
}

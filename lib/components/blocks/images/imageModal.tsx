import Image from "next/image";
import { useEffect } from "react";
import ImageClose from "./SVG/imageClose";

export default function ImageModal({
  src,
  alt,
  width,
  height,
  caption,
  setViewModal,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string | null;
  setViewModal: (arg: boolean) => void;
}) {
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
  }

  function closeModal() {
    setViewModal(false);
  }
  return (
    <div className="block_modal">
      <button className="block_modal--image--button" onClick={closeModal}>
        <ImageClose />
      </button>
      <div className="block_modal--content">
        <div className="block_modal--image">
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
        {caption && (
          <p
            className="block_modal--caption"
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        )}
      </div>
      <div className="block_modal--background" onClick={closeModal} />
    </div>
  );
}

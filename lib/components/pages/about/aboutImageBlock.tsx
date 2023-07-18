import Image from "next/image";

export default function AboutImageBlock() {
  const imgSize = 300;
  return (
    <div className="page_about_main--imageblock">
      <Image
        src="/images/about/CherryBridge.jpg"
        width={imgSize}
        height={imgSize}
        alt="Image of Josh drinking boba tea"
        priority={true}
      />
      <Image
        src="/images/about/LochValeRMNP.jpg"
        width={imgSize}
        height={imgSize}
        alt="Image of Josh drinking boba tea"
        priority={true}
      />
      <Image
        src="/images/about/FilipinoGarlicChicken.jpg"
        width={imgSize}
        height={imgSize}
        alt="Image of Josh drinking boba tea"
        priority={true}
      />
    </div>
  );
}

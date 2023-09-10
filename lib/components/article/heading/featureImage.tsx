import Image from "next/image";

export default function FeatureImage({
  feature_image,
  feature_image_alt,
}: {
  feature_image: string;
  feature_image_alt: string;
}) {
  return (
    <div className="relative w-full aspect-[8/5] col-start-1 lg:aspect-[2/1]">
      <Image
        src={feature_image}
        alt={feature_image_alt}
        fill={true}
        priority={true}
        sizes="(max-width: 1200px) 100vw, 50vw"
        className=" object-cover"
      />
    </div>
  );
}

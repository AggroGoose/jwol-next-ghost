import Image from "next/image";

export default function FeatureImage({
  feature_image,
  feature_image_alt,
  feature_image_caption,
}: {
  feature_image: string;
  feature_image_alt: string;
  feature_image_caption: string | null;
}) {
  return (
    <figure className="xl:basis-[45%] flex flex-col">
      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
        <Image
          src={feature_image}
          alt={feature_image_alt}
          fill={true}
          priority={true}
          sizes="(max-width: 1200px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {feature_image_caption && (
        <figcaption className="mt-3 text-sm italic">
          {feature_image_caption}
        </figcaption>
      )}
    </figure>
  );
}

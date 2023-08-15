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
    <div className="article_feature">
      <Image
        src={feature_image}
        alt={feature_image_alt}
        fill={true}
        priority={true}
        sizes="(max-width: 1200px) 100vw, 50vw"
      />
      {/* {feature_image_caption && (
        <figcaption className="article__feature--caption">
          {feature_image_caption}
        </figcaption>
      )} */}
    </div>
  );
}

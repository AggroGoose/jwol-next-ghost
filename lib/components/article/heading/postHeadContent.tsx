import FeatureImage from "./featureImage";
import PostDetails from "./postDetails";

export default function PostHeadContent({
  feature_image,
  feature_image_alt,
  feature_image_caption,
  excerpt,
  published_at,
  updated_at,
  url,
}: {
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  excerpt: string;
  published_at: string;
  updated_at: string;
  url: string;
}) {
  return (
    <div className="flex flex-col gap-8 xl:gap-12 xl:flex-row-reverse xl:justify-end">
      <PostDetails published_at={published_at} excerpt={excerpt} url={url} />
      {feature_image && (
        <FeatureImage
          feature_image={feature_image}
          feature_image_alt={feature_image_alt}
          feature_image_caption={feature_image_caption}
        />
      )}
    </div>
  );
}

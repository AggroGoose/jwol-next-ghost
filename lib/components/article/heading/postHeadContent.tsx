import FeatureImage from "./featureImage";
import PostDetails from "./postDetails";

export default function PostHeadContent({
  feature_image,
  feature_image_alt,
  feature_image_caption,
  created_at,
  updated_at,
}: {
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  created_at: string;
  updated_at: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      {feature_image && (
        <FeatureImage
          feature_image={feature_image}
          feature_image_alt={feature_image_alt}
        />
      )}
      <PostDetails created_at={created_at} updated_at={updated_at} />
    </div>
  );
}

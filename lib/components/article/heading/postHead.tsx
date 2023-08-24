import FeatureImage from "./featureImage";
import PostHeadContent from "./postHeadContent";

export default function PostHead({
  title,
  feature_image,
  feature_image_alt,
  feature_image_caption,
  excerpt,
  created_at,
  updated_at,
  reading_time,
  primary_tag,
}: {
  title: string;
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  excerpt: string;
  created_at: string;
  updated_at: string;
  reading_time: number;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
}) {
  return (
    <div className="flex flex-col gap-6">
      <PostHeadContent
        created_at={created_at}
        excerpt={excerpt}
        primary_tag={primary_tag}
        reading_time={reading_time}
        title={title}
      />
      {feature_image && (
        <FeatureImage
          feature_image={feature_image}
          feature_image_alt={feature_image_alt}
        />
      )}
    </div>
  );
}

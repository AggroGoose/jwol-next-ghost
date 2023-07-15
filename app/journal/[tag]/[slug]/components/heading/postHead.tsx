import FeatureImage from "./featureImage";
import PostHeadContent from "./postHeadContent";
import PostMeta from "./postMeta";
import PrimaryTag from "./primaryTag";

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
    <div className="article__head">
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
          feature_image_caption={feature_image_caption}
        />
      )}
    </div>
  );
}

import PostHeadContent from "./postHeadContent";
import PostTags from "./postTags";
import PostTitle from "./postTitle";

export default function PostHead({
  title,
  feature_image,
  feature_image_alt,
  feature_image_caption,
  excerpt,
  created_at,
  updated_at,
  primary_tag,
  tags,
}: {
  title: string;
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  excerpt: string;
  created_at: string;
  updated_at: string;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}) {
  return (
    <div className="flex flex-col gap-6">
      <PostTitle excerpt={excerpt} primary_tag={primary_tag} title={title} />
      <PostTags tags={tags} />
      <PostHeadContent
        feature_image={feature_image}
        feature_image_alt={feature_image_alt}
        feature_image_caption={feature_image_caption}
        created_at={created_at}
        updated_at={updated_at}
      />
    </div>
  );
}

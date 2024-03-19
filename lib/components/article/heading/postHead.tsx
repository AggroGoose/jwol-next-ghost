import PostHeadContent from "./postHeadContent";
import PostTitle from "./postTitle";

export default function PostHead({
  title,
  feature_image,
  feature_image_alt,
  feature_image_caption,
  excerpt,
  published_at,
  updated_at,
  primary_tag,
  url,
}: {
  title: string;
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  excerpt: string;
  published_at: string;
  updated_at: string;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
  url: string;
}) {
  return (
    <div className="flex flex-col gap-8 py-8 max-w-[--body-size] mx-auto">
      <PostTitle
        className="w-full flex flex-col gap-4"
        primary_tag={primary_tag}
        title={title}
      />
      <PostHeadContent
        excerpt={excerpt}
        published_at={published_at}
        updated_at={updated_at}
        feature_image={feature_image}
        feature_image_alt={feature_image_alt}
        feature_image_caption={feature_image_caption}
        url={url}
      />
    </div>
  );
}

import genElements from "@/lib/element/genElems";
import PostHead from "./components/heading/postHead";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetch(
    "http://localhost:3000/api/ghost/AllPosts/GetParams"
  ).then((res) => res.json());
  return posts.map((post: { slug: string; tag: string }) => ({
    slug: post.slug,
    tag: post.tag,
  }));
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = (await fetch(
    `http://localhost:3000/api/ghost/SinglePost/${slug}`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as ResponsePost;

  return (
    <>
      <PostHead
        title={post.title}
        feature_image={post.feature_image}
        feature_image_alt={post.feature_image_alt}
        feature_image_caption={post.feature_image_caption}
        created_at={post.created_at}
        updated_at={post.updated_at}
        excerpt={post.excerpt}
        primary_tag={post.primary_tag}
        reading_time={post.reading_time}
      />

      <div className="article__content primary-grid">
        {post.content.map((elem) => genElements(elem))}
      </div>
    </>
  );
}

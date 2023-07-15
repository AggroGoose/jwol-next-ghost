import genElements from "@/lib/element/genElems";
import PostHead from "./components/heading/postHead";
import PostSide from "./components/side/postSide";
import PostTags from "./components/components/postTags";

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

  const morePostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPost/BySlug/${slug}`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as { morePosts: ResponseMore[] };
  const { morePosts } = morePostsRes;
  const tagPosts = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPost/ByTag/${post.primary_tag.slug}/${post.slug}`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as ResponseMore[];

  let firstPara = true;

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
      <div className="post-side-grid">
        <PostSide post={post} morePosts={morePosts} />
        <div className="article__main">
          <PostTags tags={post.tags} />
          <div className="article__content post-grid">
            {post.content.map((elem) => {
              if (firstPara && elem.name === "p") {
                firstPara = false;
                return genElements(elem, true);
              }
              return genElements(elem);
            })}
          </div>
        </div>
      </div>
    </>
  );
}

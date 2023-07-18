import genElements from "@/lib/element/genElems";
import PostHead from "@/lib/components/article/heading/postHead";
import PostSide from "@/lib/components/article/side/postSide";
import PostTags from "@/lib/components/article/main/postTags";
import MoreByTag from "@/lib/components/article/main/moreByTag";
import ArticleReactions from "@/lib/components/article/main/articleReactions";
import MoreByLatest from "@/lib/components/article/main/moreByLatest";

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
  const tagPostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPost/ByTag/${post.primary_tag.slug}/${post.slug}`,
    { next: { revalidate: 20 } }
  ).then((res) => res.json())) as { returnPosts: ResponseMore[] };
  const tagPosts = tagPostsRes.returnPosts;

  let firstPara = true;

  return (
    <>
      <div className="post-side-grid">
        {/* <ArticleReactions /> */}
        <PostSide morePosts={morePosts} />

        <div className="article__main">
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
          {morePosts.length > 0 && <MoreByLatest posts={morePosts} />}
          {tagPosts.length > 0 && (
            <MoreByTag posts={tagPosts} tag={post.primary_tag} />
          )}
        </div>
      </div>
    </>
  );
}

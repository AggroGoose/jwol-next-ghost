import PostSide from "@/lib/components/article/side/postSide";
import PostIndex from "@/lib/components/pages/postIndex/postIndex";
import { Tag } from "@tryghost/content-api";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/ghost/Tags", {
    next: { revalidate: 600 },
  });
  const tags = (await res.json()) as Tag[];

  return tags.map((tag) => {
    tag: tag.slug;
  });
}

export default async function TagPage({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const morePostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPage/LastFive`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json())) as { morePosts: ResponseMore[] };
  const { morePosts } = morePostsRes;

  const indexPostsRes = (await fetch(
    `http://localhost:3000/api/ghost/LatestPosts/ForPage/TagPosts/${tag}`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json())) as { returnPosts: ResponseMore[] };
  const indexPosts = indexPostsRes.returnPosts;

  return (
    <div className="post_index post-side-grid">
      <PostIndex
        posts={indexPosts}
        title={`Here Are the Latest Posts from ${indexPosts[0].tag}`}
      />
      <PostSide morePosts={morePosts} />
    </div>
  );
}

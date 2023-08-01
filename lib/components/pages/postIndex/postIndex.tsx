import Link from "next/link";
import MainArticleCard from "../../cards/mainArticleCard";
import WideArticleCard from "../../cards/wideArticleCard";
import PageBadge from "../../badges/pageBadge";

export default function PostIndex({
  posts,
  title,
  badge = false,
  links,
}: {
  posts: ResponseMore[];
  title: string;
  badge?: boolean;
  links: Array<{ slug: string; title: string }>;
}) {
  if (!(posts.length > 0)) {
    return (
      <div className="page_index_posts">
        <h1>{title}</h1>
        <p>No posts were found, please check your search or try again.</p>
      </div>
    );
  }

  const mainPost = posts[0];
  let additionalPosts: ResponseMore[] = [];

  if (posts.length > 1) {
    const postSlice = posts.slice(1);
    additionalPosts = [...postSlice];
  }

  return (
    <div className="post_index_posts">
      <PageBadge links={links} />
      <h1>{title}</h1>
      {mainPost && <WideArticleCard post={mainPost} badge={badge} />}
      {additionalPosts.length > 0 && (
        <div className="post_index_posts--additional">
          {additionalPosts.map((post) => (
            <MainArticleCard post={post} badge={badge} />
          ))}
        </div>
      )}
    </div>
  );
}

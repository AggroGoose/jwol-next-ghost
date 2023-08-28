import MainArticleCard from "../cards/mainArticleCard";
import WideArticleCard from "../cards/wideArticleCard";
import PageBadge from "../badges/pageBadge";

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
      <div className="flex flex-col gap-8 mb-8 mt-6">
        <h1 className="text-center">{title}</h1>
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
    <div className="flex flex-col gap-8 mb-8 mt-6">
      <PageBadge links={links} />
      <h1 className="text-center">{title}</h1>
      {mainPost && <WideArticleCard post={mainPost} />}
      {additionalPosts.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {additionalPosts.map((post) => (
            <MainArticleCard post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

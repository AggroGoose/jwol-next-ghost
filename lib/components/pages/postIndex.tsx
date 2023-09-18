import MainArticleCard from "../cards/mainArticleCard";
import WideArticleCard from "../cards/wideArticleCard";

export default function PostIndex({
  posts,
  title,
}: {
  posts: ResponseMore[];
  title: string;
}) {
  if (!(posts.length > 0)) {
    return (
      <div className="flex flex-col gap-8 py-8">
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
    <div className="flex flex-col gap-8 px-6 xl:px-0 py-8 min-h-screen">
      <h1 className="text-center">{title}</h1>
      {mainPost && <WideArticleCard post={mainPost} />}
      {additionalPosts.length > 0 && (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {additionalPosts.map((post) => (
            <MainArticleCard post={post} key={post.slug} />
          ))}
        </div>
      )}
    </div>
  );
}

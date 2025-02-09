import Link from "next/link";
import { TAG_ROUTE } from "@/lib/utils/constants";
import ListArticleCard from "../../cards/listArticleCard";

export default function TagPagePosts({
  posts,
  tag,
}: {
  posts: ResponseMore[];
  tag: { id: string; name: string; slug: string };
}) {
  return (
    <section className="bg-primary-900 py-6">
      <div className=" flex flex-col gap-6 w-full max-w-(--body-size) mx-auto">
        <h3 className="text-center max-md:text-head4 text-primary-100 font-normal">
          More From{" "}
          <Link
            className="text-accent-500 hover:text-accent-300"
            href={"/" + tag.slug}
          >
            {"#" + tag.name}
          </Link>
        </h3>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <ListArticleCard post={post} key={post.slug} dark={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

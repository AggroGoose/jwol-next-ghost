import Image from "next/image";
import Link from "next/link";

export default function SideArticleCard({ post }: { post: ResponseMore }) {
  return (
    <div className="article_side_more--card">
      <Link href={`/journal/${post.tagSlug}/${post.slug}`}>
        {post.featureImg ? (
          <div className="article_side_more--grid">
            <p className="article_side_more--title">{post.title}</p>
            <div className="article_side_more--img">
              <Image
                src={post.featureImg}
                alt={post.featureImgAlt}
                fill={true}
              />
            </div>
          </div>
        ) : (
          <p className="article_side_more--title">{post.title}</p>
        )}
      </Link>
    </div>
  );
}

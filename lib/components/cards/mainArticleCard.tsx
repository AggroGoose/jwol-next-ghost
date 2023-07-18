import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";

export default function MainArticleCard({
  post,
  badge = false,
}: {
  post: ResponseMore;
  badge?: boolean;
}) {
  let image: string;
  let imageAlt: string;

  if (post.featureImg) {
    image = post.featureImg;
    imageAlt = post.featureImgAlt;
  } else {
    image = "/images/NoLeaveFallback.png";
    imageAlt = "Fallback image, no Feature Image provided.";
  }

  return (
    <Link href={`/journal/${post.tagSlug}/${post.slug}`}>
      <div className="main_article_card">
        <div className="main_article_card--feature">
          <Image src={image} alt={imageAlt} fill={true} />
        </div>
        {badge && (
          <div className="main_article_card--badge">
            <Link href={`/journal/${post.tagSlug}`}>{post.tag}</Link>
          </div>
        )}
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <Date dateString={post.published} />
        <p className="main_article_card--read">{post.readTime} Minute Read</p>
      </div>
    </Link>
  );
}

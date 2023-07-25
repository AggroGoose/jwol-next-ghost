import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";

export default function WideArticleCard({
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
    <div className="article_card_wide">
      <Link href={`/journal/${post.slug}`}>
        <div className="article_card_wide--feature">
          <Image src={image} alt={imageAlt} fill={true} />
        </div>
      </Link>
      {badge && (
        <div className="article_card_wide--badge">
          <Link href={`/journal/tag/${post.tagSlug}`}>{post.tag}</Link>
        </div>
      )}

      <div className="article_card_wide--content">
        <Link href={`/journal/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
        <Date dateString={post.published} />
        <p>{post.excerpt}</p>
        <p className="article_card_wide--read">{post.readTime} Minute Read</p>
      </div>
    </div>
  );
}

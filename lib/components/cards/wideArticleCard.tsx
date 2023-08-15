import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";
import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";

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
      <Link href={`${BLOG_ROUTE}/${post.slug}`}>
        <div className="article_card_wide--feature">
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={true}
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </div>
      </Link>
      {badge && (
        <div className="article_card_wide--badge">
          <Link href={`${TAG_ROUTE}/${post.tagSlug}`}>{post.tag}</Link>
        </div>
      )}

      <div className="article_card_wide--content">
        <Link href={`${BLOG_ROUTE}/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
        <Date dateString={post.published} />
        <p>{post.excerpt}</p>
        <p className="article_card_wide--read">{post.readTime} Minute Read</p>
      </div>
    </div>
  );
}

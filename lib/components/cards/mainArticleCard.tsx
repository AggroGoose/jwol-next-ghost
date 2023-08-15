import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";
import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";

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
    <div className="main_article_card">
      <Link href={`${BLOG_ROUTE}/${post.slug}`}>
        <div className="main_article_card--feature">
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            sizes="(max-width: 570px) 100vw, (max-width: 950px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
        <h2>{post.title}</h2>
      </Link>
      {badge && (
        <div className="main_article_card--badge">
          <Link href={`${TAG_ROUTE}/${post.tagSlug}`}>{post.tag}</Link>
        </div>
      )}
      <p>{post.excerpt}</p>
      <div className="main_article_card--meta">
        <Date dateString={post.published} />
        <p className="main_article_card--read">{post.readTime} Minute Read</p>
      </div>
    </div>
  );
}

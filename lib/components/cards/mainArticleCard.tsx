import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";
import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";

export default function MainArticleCard({ post }: { post: ResponseMore }) {
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
    <div className="flex flex-col rounded-xl bg-base-100 relative hover:shadow-darkmd">
      <Link href={`${BLOG_ROUTE}/${post.slug}`} className="relative w-full">
        <figure className="relative aspect-[3/2]">
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={true}
            className="object-cover rounded-xl"
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </figure>
      </Link>
      <div className="flex flex-col p-4 gap-2 text-left">
        <div className="flex justify-between w-full items-center">
          <span className="text-sm italic">
            <Date dateString={post.published} />
          </span>
          <Link
            href={`${TAG_ROUTE}/${post.tagSlug}`}
            className="text-sm font-bold text-secondary leading-none"
          >
            {post.tag}
          </Link>
        </div>
        <Link href={`${BLOG_ROUTE}/${post.slug}`} className="h-[72px]">
          <h2 className="card-title font-head leading-tight text-head3 tracking-hs font-hdw">
            {post.title}
          </h2>
        </Link>
        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="text-base font-bold text-secondary hover:text-primary hover:underline"
        >
          Read in {post.readTime} Minutes {">>"}
        </Link>
      </div>
    </div>
  );
}

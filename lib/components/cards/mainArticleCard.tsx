import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";
import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";

export default function MainArticleCard({
  post,
  priority = false,
}: {
  post: ResponseMore;
  priority?: boolean;
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
    <div className="flex flex-col w-full rounded-xl bg-base-tier2 relative hover:cshadow-flip overflow-hidden">
      <Link href={`${BLOG_ROUTE}/${post.slug}`}>
        <figure className="relative aspect-[3/2]">
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={priority}
            className="object-cover"
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </figure>
      </Link>
      <div className="flex flex-col p-4 gap-4 text-left h-full">
        <div className="flex justify-between w-full items-center">
          <p className="text-xs">
            <Date dateString={post.published} />
          </p>
          <Link
            href={`${TAG_ROUTE}/${post.tagSlug}`}
            className="text-sm font-bold text-primary-600 leading-none hover:text-primary-500 hover:underline"
          >
            {post.tag}
          </Link>
        </div>
        <Link href={`${BLOG_ROUTE}/${post.slug}`}>
          <h3 className="leading-tight text-xl hover:text-accent-500 -mb-1">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm line-clamp-2">{post.excerpt}</p>
        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="mt-auto font-bold text-primary-600 hover:text-primary-500 hover:underline"
        >
          Read More {"->"}
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";
import { BLOG_ROUTE, TAG_ROUTE } from "@/lib/utils/constants";

export default function WideArticleCard({ post }: { post: ResponseMore }) {
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
    <div className="flex flex-col bg-base-tier2 hover:cshadow-flip lg:flex-row rounded-xl overflow-hidden">
      <figure className="flex lg:basis-3/5 justify-center items-center">
        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="aspect-[3/2] relative w-full"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={true}
            className="object-cover"
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </Link>
      </figure>
      <div className="flex flex-col gap-4 lg:basis-2/5 p-4">
        <div className="flex justify-between">
          <p className="text-sm italic font-light lg:text-base">
            <Date dateString={post.published} />
          </p>
          <Link
            href={`${TAG_ROUTE}/${post.tagSlug}`}
            className="leading-none text-fcolor-link hover:text-hover-link font-bold text-sm lg:text-base"
          >
            {post.tag}
          </Link>
        </div>
        <Link href={`${BLOG_ROUTE}/${post.slug}`}>
          <h2 className="leading-tight text-xl lg:text-head3 2xl:text-head2 hover:text-hover-accent">
            {post.title}
          </h2>
        </Link>
        <p className="line-clamp-2 md:line-clamp-4 2xl:line-clamp-6 text-sm lg:text-base">
          {post.excerpt}
        </p>

        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="text-lg font-bold text-base-accent hover:text-hover-accent hover:underline mt-auto"
        >
          Read More {"->"}
        </Link>
      </div>
    </div>
  );
}

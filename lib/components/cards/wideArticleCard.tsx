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
    <div className="card lg:card-side bg-base-100 hover:shadow-darkmd">
      <figure className="lg:basis-3/5">
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
      <div className="card-body lg:basis-2/5 gap-4">
        <div className="flex justify-between">
          <p className="italic">
            <Date dateString={post.published} />
          </p>
          <Link
            href={`${TAG_ROUTE}/${post.tagSlug}`}
            className="leading-none text-secondary font-bold"
          >
            {post.tag}
          </Link>
        </div>
        <Link href={`${BLOG_ROUTE}/${post.slug}`}>
          <h2 className="leading-tight">{post.title}</h2>
        </Link>
        <p>{post.excerpt}</p>

        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="text-lg font-bold text-secondary hover:text-primary hover:underline"
        >
          Read in {post.readTime} Minutes {">>"}
        </Link>
      </div>
    </div>
  );
}

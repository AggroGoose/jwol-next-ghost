import Image from "next/image";
import Link from "next/link";
import { BLOG_ROUTE } from "@/lib/utils/constants";

export default function WideArticleCard({ post }: { post: ResponseMore }) {
  let image: string;
  let imageAlt: string;

  if (post.featureImg) {
    image = post.featureImg;
    imageAlt = post.featureImgAlt;
  } else {
    image = "/images/Sarcastonaut Fallback.png";
    imageAlt = "Fallback image, no Feature Image provided.";
  }
  return (
    <div className="flex flex-col bg-base-tier2 hover:cshadow-flip lg:flex-row rounded-sm overflow-hidden">
      <figure className="flex lg:basis-3/5 justify-center items-center">
        <Link
          href={`/${post.tagSlug}/${post.slug}`}
          className="aspect-[3/2] relative w-full"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={true}
            className="object-cover hover:opacity-70"
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </Link>
      </figure>
      <div className="flex flex-col gap-2 lg:basis-2/5 p-2 text-center lg:text-left">
        <Link
          href={`/${post.tagSlug}`}
          className="text-xl secondary-font tracking-wider text-primary-600 leading-none hover:text-primary-500 hover:underline"
        >
          {post.tag}
        </Link>
        <Link href={`/${post.tagSlug}/${post.slug}`}>
          <h3 className="leading-tight hover:text-accent-400 hover:underline">
            {post.title}
          </h3>
        </Link>
        <p className="line-clamp-4 2xl:line-clamp-6">{post.excerpt}</p>

        <Link
          href={`${BLOG_ROUTE}/${post.slug}`}
          className="font-semibold text-primary-600 max-lg:hidden hover:text-primary-500 hover:underline mt-auto"
        >
          Read More {"->"}
        </Link>
      </div>
    </div>
  );
}

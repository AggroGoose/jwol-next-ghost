import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";

export default function IndexArticleCard({
  post,
  priority = false,
  badge = false,
}: {
  post: ResponseMore;
  priority?: boolean;
  badge?: boolean;
}) {
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
    <div className="flex gap-4 w-full relative items-start lg:items-center">
      <figure className="relative w-full basis-2/5 md:basis-1/4">
        <Link href={`/${post.tagSlug}/${post.slug}`}>
          <div className="relative aspect-[3/2] rounded-md lg:rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill={true}
              priority={priority}
              className="object-cover hover:opacity-70"
              sizes="25vw"
            />
          </div>
        </Link>
        {badge && (
          <Link
            href={`/${post.tagSlug}`}
            className="text-xxs lg:text-xs font-secondary tracking-wide lg:tracking-wider text-always-light leading-none bg-accent-600 hover:opacity-75 px-2 py-1 lg:px-2.5 lg:py-1.5 uppercase font-bold absolute top-0 left-0 lg:top-1 lg:left-1 text-center"
          >
            {post.tag}
          </Link>
        )}
      </figure>
      <div className="basis-3/5 md:basis-3/4 flex flex-col gap-2 h-full max-xl:pr-3">
        <Link href={`/${post.tagSlug}/${post.slug}`}>
          <h4 className="leading-tight text-sm md:text-xxl tracking-wider line-clamp-3 md:line-clamp-2 max-w-max text-primary-700 max-lg:hover:underline">
            {post.title}
          </h4>
        </Link>
        <p className="text-xs lg:text-sm line-clamp-2 lg:line-clamp-3 text-always-dark">
          {post.excerpt}
        </p>
        <p className="text-xs md:text-sm italic text-primary-500">
          <Date dateString={post.published} />
        </p>
      </div>
    </div>
  );
}

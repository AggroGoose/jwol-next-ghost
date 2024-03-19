import Image from "next/image";
import Link from "next/link";
import Date from "../helpers/date";

export default function MainArticleCard({
  post,
  priority = false,
  badge = true,
  dark = true,
}: {
  post: ResponseMore;
  priority?: boolean;
  badge?: boolean;
  dark?: boolean;
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
    <div className="flex w-full relative overflow-hidden gap-4 items-center">
      <Link href={`/${post.tagSlug}/${post.slug}`} className="basis-2/5">
        <figure className="relative aspect-[1/1]">
          <Image
            src={image}
            alt={imageAlt}
            fill={true}
            priority={priority}
            className="object-cover hover:opacity-70"
            sizes="(max-width: 950px) 100vw, 50vw"
          />
        </figure>
      </Link>
      <div className="basis-3/5 flex flex-col gap-2 pr-3 xl:pr-0">
        {badge && (
          <Link
            href={`/${post.tagSlug}`}
            className={`text-xs md:text-sm secondary-font tracking-wide font-bold leading-none hover:text-accent-300 ${
              dark ? "text-accent-500" : "text-accent-600"
            }`}
          >
            #{post.tag}
          </Link>
        )}
        <Link href={`/${post.tagSlug}/${post.slug}`}>
          <h3
            className={`leading-tight text-base md:text-lg line-clamp-3 md:line-clamp-2 tracking-wider ${
              dark
                ? "text-primary-200 hover:text-primary-100"
                : "hover:text-primary-400"
            }`}
          >
            {post.title}
          </h3>
        </Link>
        <p
          className={`text-sm line-clamp-3 max-md:hidden ${
            dark ? "text-always-light" : "text-always-dark"
          }`}
        >
          {post.excerpt}
        </p>
        <p
          className={`text-xs font-bold ${
            dark ? "text-accent-500" : "text-accent-600"
          }`}
        >
          <Date dateString={post.published} />
        </p>
      </div>
    </div>
  );
}

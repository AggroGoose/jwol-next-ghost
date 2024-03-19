"use server";

import ghostAdmin from "../ghostAdmin";

/* 3 Functions: ghostPostsforIndex, ghostLatestFiveGeneral, ghostLatestFiveforTag */

//Returns a list of the latest posts for index pages like the main Journal page or the Tag specific pages. Default is 15 posts but has an optional limit field to increase the number of posts requested. Will eventually look into pagination as blog grows.

export async function ghostPostsforIndex(page = 1, limit = 15, tag?: string) {
  const returnPosts: ResponseMore[] = [];

  const res = await ghostAdmin.posts
    .browse({
      limit,
      filter: `status:published${tag ? "+tag:" + tag : ""}`,
      page,
      order: "published_at DESC",
      include: ["tags", "count.posts"],
    })
    .catch((err: Error) => {
      console.error(err);
    });

  let posts = [] as GhostPost[];

  if (res) {
    posts = [...res] as GhostPost[];
  }

  const meta = res.meta as ghostPostMeta;

  posts.forEach((post) => {
    const postObj = {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      tag: post.primary_tag?.name || "",
      tagSlug: post.primary_tag?.slug || "",
      featureImg: post.feature_image,
      featureImgAlt: post.feature_image_alt || "",
      published: post.published_at,
      readTime: post.reading_time,
    };

    returnPosts.push(postObj);
  });

  const returnObj: ResponseIndex = {
    posts: returnPosts,
  };

  if (meta) returnObj.meta = meta.pagination;

  return returnObj;
}

//Gets latest 5 articles for card or side banners. If a slug is provided, the returned articles will skip the current article.

export async function ghostLatestFiveGeneral(slug?: string) {
  let limit: number;
  slug ? (limit = 6) : (limit = 5);

  const res = await ghostAdmin.posts
    .browse({
      limit,
      filter: "status:published",
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err: Error) => {
      console.error(err);
    });

  let posts = [] as GhostPost[];

  if (res) {
    posts = [...res] as GhostPost[];
  }

  const returnPosts: ResponseMore[] = [];

  posts.forEach((post) => {
    if (post.slug !== slug && returnPosts.length < 5) {
      const postObj = {
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        tag: post.primary_tag.name,
        tagSlug: post.primary_tag.slug,
        featureImg: post.feature_image,
        featureImgAlt: post.feature_image_alt || "",
        published: post.published_at,
        readTime: post.reading_time,
      };

      returnPosts.push(postObj);
    }
  });
  return returnPosts;
}

//Gets latest 5 articles filtered by tag for cards or side banners. If a slug is provided, the returned articles will skip the current article.

export async function ghostLatestFiveforTag(tag: string, slug?: string) {
  const returnPosts: ResponseMore[] = [];

  let limit: number;
  slug ? (limit = 6) : (limit = 5);

  const res = await ghostAdmin.posts
    .browse({
      limit,
      filter: `status:published+tag:${tag}`,
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err: Error) => {
      console.error(err);
    });

  let posts = [] as GhostPost[];

  if (res) {
    posts = [...res] as GhostPost[];
  }

  posts.forEach((post) => {
    if (post.slug !== slug && returnPosts.length < 5) {
      const postObj = {
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        tag: post.primary_tag.name,
        tagSlug: post.primary_tag.slug,
        featureImg: post.feature_image,
        featureImgAlt: post.feature_image_alt || "",
        published: post.published_at,
        readTime: post.reading_time,
      };

      returnPosts.push(postObj);
    }
  });

  return returnPosts;
}

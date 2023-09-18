"use server";

import ghost from "../../ghost";

/* 3 Functions: ghostPostsforIndex, ghostLatestFiveGeneral, ghostLatestFiveforTag */

//Returns a list of the latest posts for index pages like the main Journal page or the Tag specific pages. Default is 15 posts but has an optional limit field to increase the number of posts requested. Will eventually look into pagination as blog grows.

export async function ghostPostsforIndex(tag?: string, limit = 15) {
  const returnPosts: ResponseMore[] = [];

  let filter: string;
  tag ? (filter = `tag:${tag}`) : (filter = "");

  const res = await ghost.posts
    .browse({
      limit,
      filter,
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });

  let posts = [] as GhostPost[];

  if (res) {
    posts = [...res] as GhostPost[];
  }

  posts.forEach((post) => {
    const postObj = {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      tag: post.primary_tag.name,
      tagSlug: post.primary_tag.slug,
      featureImg: post.feature_image,
      featureImgAlt: post.feature_image_alt || "",
      published: post.created_at,
      readTime: post.reading_time,
    };

    returnPosts.push(postObj);
  });

  return returnPosts;
}

//Gets latest 5 articles for card or side banners. If a slug is provided, the returned articles will skip the current article.

export async function ghostLatestFiveGeneral(slug?: string) {
  let limit: number;
  slug ? (limit = 6) : (limit = 5);

  const res = await ghost.posts
    .browse({
      limit,
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err) => {
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
        published: post.created_at,
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

  const res = await ghost.posts
    .browse({
      limit,
      filter: `tag:${tag}`,
      order: "published_at DESC",
      include: "tags",
    })
    .catch((err) => {
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
        published: post.created_at,
        readTime: post.reading_time,
      };

      returnPosts.push(postObj);
    }
  });

  return returnPosts;
}

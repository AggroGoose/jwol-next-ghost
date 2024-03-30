"use server";

import ghostAdmin from "../ghostAdmin";
const ghost = ghostAdmin;

export async function ghostMetaSingle(
  slug: string,
  type: "post" | "page" = "post"
) {
  let client;

  type === "page" ? (client = ghost.pages) : (client = ghost.posts);

  const post = (await client.read({ slug }).catch((err: Error) => {
    console.error(err);
  })) as GhostPost;

  const metaData: ResponseMetaPost = {
    meta_title: post.meta_title || post.title,
    meta_description: post.meta_description || post.excerpt,
    og_image:
      post.og_image ||
      post.feature_image ||
      "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
    og_title: post.og_title || post.title,
    og_description:
      post.og_description || post.meta_description || post.excerpt,
    twitter_image:
      post.twitter_image ||
      post.og_image ||
      post.feature_image ||
      "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
    twitter_title: post.twitter_title || post.meta_title || post.title,
    twitter_description:
      post.twitter_description ||
      post.og_description ||
      post.meta_description ||
      post.excerpt,
    og_alt: post.feature_image_alt || "Article feature image",
    published_at: post.published_at,
    updated_at: post.updated_at,
  };

  return metaData;
}

export async function ghostMetaTag(tag: string) {
  const post = (await ghost.tags.read({ slug: tag }).catch((err: Error) => {
    console.error(err);
  })) as GhostTag;

  const metaData: ResponseMeta = {
    meta_title: post.meta_title || `${post.name} Articles | Sarcastonaut`,
    meta_description:
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
    og_image:
      post.og_image ||
      post.feature_image ||
      "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
    og_title:
      post.og_title ||
      post.meta_title ||
      `${post.name} Articles | Sarcastonaut`,
    og_description:
      post.og_description ||
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
    twitter_image:
      post.twitter_image ||
      post.og_image ||
      post.feature_image ||
      "https://write.sarcastonaut.com/content/images/2024/03/Sarcastonaut-Social-Media.png",
    twitter_title:
      post.twitter_title ||
      post.meta_title ||
      `${post.name} Articles | Sarcastonaut`,
    twitter_description:
      post.twitter_description ||
      post.og_description ||
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
  };

  return metaData;
}

import ghost from "../../ghost";

// FETCH Route Parameters for getStaticPaths
export async function ghostMetaSingle(slug: string) {
  const post = (await ghost.posts
    .read({ slug }, { include: "tags" })
    .catch((err) => {
      console.error(err);
    })) as GhostPost;

  const metaData: ResponseMeta = {
    meta_title: post.meta_title || post.title,
    meta_description: post.meta_description || post.excerpt,
    og_image: post.og_image || post.feature_image || "/NoLeaveFallback.png",
    og_title: post.og_title || post.title,
    og_description:
      post.og_description || post.meta_description || post.excerpt,
    primary_tag: post.primary_tag.name,
    twitter_image:
      post.twitter_image ||
      post.og_image ||
      post.feature_image ||
      "/NoLeaveFallback.png",
    twitter_title: post.twitter_title || post.meta_title || post.title,
    twitter_description:
      post.twitter_description ||
      post.og_description ||
      post.meta_description ||
      post.excerpt,
  };

  return metaData;
}

export async function ghostMetaTag(tag: string) {
  const post = (await ghost.tags.read({ slug: tag }).catch((err) => {
    console.error(err);
  })) as GhostTag;

  const metaData: ResponseMeta = {
    meta_title:
      post.meta_title ||
      `Journals Tagged Under ${post.name} | No Leave Society`,
    meta_description:
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
    og_image: post.og_image || post.feature_image || "/NoLeaveFallback.png",
    og_title:
      post.og_title ||
      post.meta_title ||
      `Journals Tagged Under ${post.name} | No Leave Society`,
    og_description:
      post.og_description ||
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
    primary_tag: post.name,
    twitter_image:
      post.twitter_image ||
      post.og_image ||
      post.feature_image ||
      "/NoLeaveFallback.png",
    twitter_title:
      post.twitter_title ||
      post.meta_title ||
      `Journals Tagged Under ${post.name} | No Leave Society`,
    twitter_description:
      post.twitter_description ||
      post.og_description ||
      post.meta_description ||
      post.description ||
      `Index of journals listed under the tag ${post.name}`,
  };

  return metaData;
}

"use server";

import ghost from "../ghostAdmin";
import { parseLexical } from "@/lib/utils/scripts/parseLexical";

/* Two functions contained: ghostGetSinglePost and ghostGetTag */

//Used to get single post for blog page data then transform information and combine with Database result before sending to client.

export async function ghostGetSinglePost(slug: string) {
  const post = (await ghost.posts.read({ slug }).catch((err: Error) => {
    console.error(err);
  })) as GhostAdminPost;

  const lexicalObj = (await JSON.parse(post.lexical)) as LexicalObject;
  const lexicalRoot = lexicalObj.root;
  const content = parseLexical(lexicalRoot);

  //Tag objects returned from Ghost contains a lot of bloat. Request object could probably limit this itself, but for ease of use we're stripping the tag objects down here.

  const primTag: ResponseTag = {
    id: post.primary_tag.id,
    name: post.primary_tag.name,
    slug: post.primary_tag.slug,
  };

  const tagArr: ResponseTag[] = [];
  post.tags.forEach((tag, i) => {
    if (i > 0) {
      const newTag: ResponseTag = {
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
      };

      tagArr.push(newTag);
    }
  });

  //Final object returned containing all the post information needed for building the post page, combining DB information, and removing unnecessary API fields.

  const postData: ResponsePost = {
    slug: post.slug,
    id: post.id,
    title: post.title,
    feature_image: post.feature_image,
    feature_image_alt: post.feature_image_alt || "Post feature image",
    feature_image_caption: post.feature_image_caption,
    created_at: post.created_at,
    published_at: post.published_at,
    updated_at: post.updated_at,
    excerpt: post.excerpt,
    reading_time: post.reading_time,
    primary_tag: primTag,
    tags: tagArr,
    content,
  };

  return postData;
}

export async function ghostGetTag(tag: string) {
  const res = (await ghost.tags.read({ slug: tag }).catch((err: Error) => {
    console.error(err);
  })) as GhostTag;

  const responseObj: ResponseTag = {
    id: res.id,
    name: res.name,
    slug: res.slug,
  };

  if (res.description) responseObj.description = res.description;

  return responseObj;
}

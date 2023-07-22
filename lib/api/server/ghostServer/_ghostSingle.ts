import prisma from "../../prisma";
import ghost from "../../ghost";

//Used to get single post for blog page data then transform information and combine with Database result before sending to client.

export async function ghostGetSinglePost(slug: string) {
  const post = (await ghost.posts
    .read({ slug }, { include: "tags" })
    .catch((err) => {
      console.error(err);
    })) as GhostPost;

  // Takes raw HTML from ghost and transformse it into JS Objects to be able to manually build components and classes vs the Ghost default classes. May be overkill, might test just using raw Ghost classes at a later date to compare performance.
  // const parsePost = parseHTML(post.html);

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

  // If no database result for post, it will create a new database result which will be used for tracking likes, comments and to add custom fields not provided by Ghost.

  const dbPost = await prisma.post.upsert({
    where: { slug: post.slug },
    update: {},
    create: {
      id: post.id,
      slug: post.slug,
    },
  });

  //Final object returned containing all the post information needed for building the post page, combining DB information, and removing unnecessary API fields.

  const postData: ResponsePost = {
    slug: post.slug,
    id: post.id,
    title: post.title,
    feature_image: post.feature_image,
    feature_image_alt: post.feature_image_alt || "Post feature image",
    feature_image_caption: post.feature_image_caption,
    audio_url: dbPost.audioURL,
    likes: dbPost.likeCount,
    saves: dbPost.saveCount,
    created_at: post.created_at,
    updated_at: post.updated_at,
    excerpt: post.excerpt,
    reading_time: post.reading_time,
    primary_tag: primTag,
    tags: tagArr,
    content: post.html,
  };

  return postData;
}

import ghost from "../../ghostAdmin";
import { parseMD } from "@/lib/utils/scripts/parseMobiledoc";

export async function ghostPageData(slug: string) {
  const post = (await ghost.pages.read({ slug }).catch((err: Error) => {
    console.error(err);
  })) as GhostAdminPost;

  const mobiledocObj = (await JSON.parse(post.mobiledoc)) as MDObject;
  const content = parseMD(mobiledocObj);

  const postData: ResponsePage = {
    slug: post.slug,
    id: post.id,
    title: post.title,
    feature_image: post.feature_image,
    feature_image_alt: post.feature_image_alt || "Post feature image",
    feature_image_caption: post.feature_image_caption,
    created_at: post.created_at,
    updated_at: post.updated_at,
    excerpt: post.excerpt,
    content,
  };

  return postData;
}

"use server";

import ghostAdmin from "../ghostAdmin";
const ghost = ghostAdmin;

// FETCH Route Parameters for getStaticPaths
export async function ghostRouteParams(type: "tag" | "post", tag?: string) {
  const postArr: Array<{ slug: string; tag: string }> = [];
  if (type === "tag") {
    const res = (await ghost.tags.browse()) as ResponseTag[];
    res.forEach((tag) => {
      const tagObj = {
        slug: tag.slug,
        tag: "",
      };

      postArr.push(tagObj);
    });
  } else if (type === "post") {
    const res = (await ghost.posts.browse({
      filter: `status:published${tag ? "+tag:" + tag : ""}`,
      include: "tags",
    })) as ResponsePost[];

    res.forEach((post) => {
      if (post.primary_tag) {
        const postObj = {
          slug: post.slug,
          tag: post.primary_tag.slug,
        };

        postArr.push(postObj);
      } else {
        console.error("No Primary Tag found for post slug: " + post.slug);
      }
    });
  }

  return postArr;
}

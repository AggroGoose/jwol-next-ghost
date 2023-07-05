import { Tag } from "@tryghost/content-api";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/ghost/Tags");
  const tags = (await res.json()) as Tag[];

  return tags.map((tag) => {
    tag: tag.slug;
  });
}

export default function TagPage({
  params: { tag },
}: {
  params: { tag: string };
}) {
  return <h1>Welcome to the {tag} main page!</h1>;
}

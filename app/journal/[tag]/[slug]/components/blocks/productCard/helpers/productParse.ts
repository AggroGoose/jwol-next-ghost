import contentEval from "@/lib/element/contentEval";

export default function productParse(elem: ParseElement) {
  if (!elem.children) return null;
  const base = elem.children[0] as ParseElement;
  if (!base.children) return null;

  const baseChildren = base.children as ParseElement[];

  const baseFinder = (string: string) => {
    return baseChildren?.find((child) =>
      child.attributes?.class?.includes(string)
    );
  };

  const image = base.children.find(
    (child) => (child.name = "img")
  ) as ParseElement;
  const linkContainer = base.children.find(
    (child) => (child.name = "a")
  ) as ParseElement;
  const link = linkContainer?.attributes.href;
  const titleContainer = baseFinder("title-container")
    ?.children[0] as ParseText;
  const title = titleContainer ? titleContainer.data : null;
  const rating = baseFinder("card-rating")?.children;
  const description = baseFinder("card-description");
  const descriptionContent = description ? contentEval(description) : null;

  if (!image || !link || !title) return null;

  return { image, title, rating, descriptionContent, link };
}

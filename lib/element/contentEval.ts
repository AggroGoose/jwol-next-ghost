import childBuilder from "./childBuilder";

export default function contentEval(
  elem: ParseElement | ParseText | null | undefined
) {
  if (!elem) return [];
  if (elem.name === "text") {
    const textElem = elem as ParseText;
    console.log("We found a text object.");
    console.log(textElem);
    return [textElem.data];
  } else {
    const htmlElem = elem as ParseElement;
    return childBuilder(htmlElem.children);
  }
}

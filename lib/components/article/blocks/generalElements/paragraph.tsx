import contentEval from "@/lib/element/contentEval";
import { createElement } from "react";

export default function Paragraph({ elem }: { elem: ParseElement }) {
  const attribs: {
    className?: string;
  } = {};
  if (elem.attributes.firstChild) attribs.className = "hasDropCap";
  const paragraph = createElement("p", attribs, ...contentEval(elem));
  return <>{paragraph}</>;
}

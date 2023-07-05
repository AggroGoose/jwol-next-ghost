import contentEval from "@/lib/element/contentEval";
import { createElement } from "react";

export default function Paragraph({ elem }: { elem: ParseElement }) {
  const paragraph = createElement("p", {}, ...contentEval(elem));
  return <>{paragraph}</>;
}

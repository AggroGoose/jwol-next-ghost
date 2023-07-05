import { createElement } from "react";
import contentEval from "@/lib/element/contentEval";

export default function CalloutCard({ elem }: { elem: ParseElement }) {
  if (!elem.children) return null;
  const elemChildren = elem.children as ParseElement[];
  const textDiv = elemChildren.find((child) =>
    child?.attributes?.class?.includes("kg-callout-text")
  );
  if (!textDiv) return null;

  return (
    <div className="article__callout">
      <CallOut elem={textDiv} />
    </div>
  );
}

const CallOut = ({ elem }: { elem: ParseElement }) => {
  const innerText = contentEval(elem);
  return createElement("p", {}, ...innerText);
};

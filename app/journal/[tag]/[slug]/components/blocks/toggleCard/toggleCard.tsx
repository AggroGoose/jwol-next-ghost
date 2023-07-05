"use client";

import { Fragment, createElement, useState } from "react";
import ToggleArrow from "./SVG/toggleArrow";
import contentEval from "@/lib/element/contentEval";

export default function ToggleCard({ elem }: { elem: ParseElement }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!elem.children) return null;

  const elemChildren = elem.children as ParseElement[];

  const headingElem = elemChildren
    .find((child) => child.attributes.class?.includes("toggle-heading"))
    ?.children?.find((child) => child.name == "h4") as ParseElement;
  const headingContent = headingElem.children[0] as ParseText;
  const heading = headingContent.data;

  const textDiv = elemChildren.find((child) =>
    child.attributes.class?.includes("toggle-content")
  );

  if (!textDiv) return null;

  const toggleChildren = contentEval(textDiv);

  const toggleContent = createElement(Fragment, {}, ...toggleChildren);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className="kg-card kg-toggle-card"
      data-kg-toggle-state={isExpanded ? "open" : "close"}
    >
      <div className="kg-toggle-heading" onClick={toggleExpand}>
        <h4 className="kg-toggle-heading-text">{heading || "Expand"}</h4>
        <button className="kg-toggle-card-icon" onClick={toggleExpand}>
          <ToggleArrow />
        </button>
      </div>
      <div className="kg-toggle-content">{toggleContent}</div>
    </div>
  );
}

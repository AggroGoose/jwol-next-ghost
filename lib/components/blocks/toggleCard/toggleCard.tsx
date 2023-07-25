"use client";

import { useState } from "react";
import ToggleArrow from "./SVG/toggleArrow";

export default function BlockToggle({ elem }: { elem: BlockToggleCard }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className="block_toggle"
      data-block-toggle={isExpanded ? "open" : "close"}
    >
      <div className="block_toggle_head" onClick={toggleExpand}>
        <h4 className="block_toggle_head--text">{elem.title}</h4>
        <button className="block_toggle_head--icon" onClick={toggleExpand}>
          <ToggleArrow />
        </button>
      </div>
      <div
        className="block_toggle_content"
        dangerouslySetInnerHTML={{ __html: elem.content }}
      />
    </div>
  );
}

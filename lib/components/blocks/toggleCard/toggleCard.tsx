"use client";

import { useState } from "react";
import ToggleArrow from "./SVG/toggleArrow";
import { Transition } from "@headlessui/react";

export default function BlockToggle({ elem }: { elem: BlockToggleCard }) {
  const [isExpanded, setIsExpanded] = useState(false);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className="blmain p-6 shadow-smd rounded-lg"
      data-block-toggle={isExpanded ? "open" : "close"}
    >
      <div
        className="cursor-pointer flex justify-between items-start"
        onClick={toggleExpand}
      >
        <h4 className="block_toggle_head--text">{elem.title}</h4>
        <button className="block_toggle_head--icon" onClick={toggleExpand}>
          <ToggleArrow
            className={`w-5 h-5 fill-secondary transition-all duration-500 ease-in-out -rotate-180${
              isExpanded ? " transform-none" : ""
            }`}
          />
        </button>
      </div>
      <Transition
        show={isExpanded}
        className="overflow-hidden"
        enter="transition transition-[max-height] duration-1000 ease-in-out"
        enterFrom="transform max-h-0"
        enterTo="transform max-h-screen"
        leave="transition transition-[max-height] duration-500 ease-in-out"
        leaveFrom="transform max-h-screen"
        leaveTo="transform max-h-0"
      >
        <div
          className={`flex flex-col gap-4 pt-4`}
          dangerouslySetInnerHTML={{ __html: elem.content }}
        />
      </Transition>
    </div>
  );
}

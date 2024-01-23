"use client";

import { useState } from "react";
import ToggleArrow from "./SVG/toggleArrow";
import { Transition } from "@headlessui/react";

export default function BlockToggle({ block }: { block: LexicalToggle }) {
  const [isExpanded, setIsExpanded] = useState(false);
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className="blmain p-6 cshadow-dark rounded-lg bg-base-tier2"
      data-block-toggle={isExpanded ? "open" : "close"}
    >
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleExpand}
      >
        <h3
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: block.heading }}
        />
        <button className="leading-0" onClick={toggleExpand}>
          <ToggleArrow
            className={`w-5 h-5 fill-primary-500 transition-all duration-500 ease-in-out hover:fill-hover-primary ${
              isExpanded ? "-rotate-180" : "rotate-0"
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
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      </Transition>
    </div>
  );
}

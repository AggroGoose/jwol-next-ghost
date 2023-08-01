"use client";

import { useRef, useState } from "react";
import BlockAudio from "./audio/blockAudio";
import BlockCallout from "./callout/blockCallout";
import BlockGallery from "./images/galleryCard";
import BlockImage from "./images/imageCard";
import BlockProduct from "./productCard/productCard";
import BlockToggle from "./toggleCard/toggleCard";
import BlockEmbed from "./embedCard/blockEmbed";
import BlockHeaders from "./textElements/blockHeaders";
import BlockParagraph from "./textElements/blockParagraph";
import BlockList from "./textElements/blockList";
import BlockQuote from "./textElements/blockQuote";
import BlockMarkdownCard from "./markdown/blockMarkdown";
import BlockButton from "./button/blockBtn";

export default function BlockContent({
  content,
  dropCap = false,
  disableToc = false,
}: {
  content: BlockArray;
  dropCap?: boolean;
  disableToc?: boolean;
}) {
  const firstPara = useRef(true);
  const firstH2 = useRef(true);

  return (
    <div className="block_content post-grid">
      {content.map((elem) => {
        if (elem.type === "p") {
          if (firstPara.current && dropCap) {
            firstPara.current = false;
            return <BlockParagraph elem={elem} dropCap={true} key={elem.id} />;
          }
          return <BlockParagraph elem={elem} key={elem.id} />;
        }
        if (elem.type === "h2") {
          if (firstH2.current) {
            firstH2.current = false;
            return (
              <BlockHeaders
                elem={elem}
                disableToc={disableToc}
                firstH2={true}
                key={elem.id}
              />
            );
          }
          return (
            <BlockHeaders
              elem={elem}
              disableToc={disableToc}
              firstH2={false}
              key={elem.id}
            />
          );
        }
        if (/(h1)|(h3)|(h4)/.test(elem.type))
          return <BlockHeaders elem={elem as BlockHeadCard} key={elem.id} />;
        if (/(ul)|(ol)/.test(elem.type))
          return <BlockList elem={elem as BlockListCard} key={elem.id} />;
        if (elem.type === "blockquote")
          return <BlockQuote elem={elem} key={elem.id} />;
        if (elem.type === "audio")
          return <BlockAudio elem={elem} key={elem.id} />;
        if (elem.type === "callout")
          return <BlockCallout elem={elem} key={elem.id} />;
        if (elem.type === "gallery")
          return <BlockGallery elem={elem} key={elem.id} />;
        if (elem.type === "embed")
          return <BlockEmbed block={elem} key={elem.id} />;
        if (elem.type === "image")
          return <BlockImage elem={elem} key={elem.id} />;
        if (elem.type === "product")
          return <BlockProduct elem={elem} key={elem.id} />;
        if (elem.type === "toggle")
          return <BlockToggle elem={elem} key={elem.id} />;
        if (elem.type === "markup")
          return <BlockMarkdownCard elem={elem} key={elem.id} />;
        if (elem.type === "button")
          return <BlockButton block={elem} key={elem.id} />;
      })}
    </div>
  );
}

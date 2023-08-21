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
    <>
      {content.map((elem) => {
        if (elem.type === "p") {
          if (firstPara.current && dropCap) {
            firstPara.current = false;
            return (
              <BlockParagraph elem={elem} dropCap={true} key={"p" + elem.id} />
            );
          }
          return <BlockParagraph elem={elem} key={"p" + elem.id} />;
        }
        if (elem.type === "h2") {
          if (firstH2.current) {
            firstH2.current = false;
            return (
              <BlockHeaders
                elem={elem}
                disableToc={disableToc}
                firstH2={true}
                key={"h" + elem.id}
              />
            );
          }
          return (
            <BlockHeaders
              elem={elem}
              disableToc={disableToc}
              firstH2={false}
              key={"h" + elem.id}
            />
          );
        }
        if (/(h1)|(h3)|(h4)/.test(elem.type))
          return (
            <BlockHeaders elem={elem as BlockHeadCard} key={"h" + elem.id} />
          );
        if (/(ul)|(ol)/.test(elem.type))
          return <BlockList elem={elem as BlockListCard} key={"l" + elem.id} />;
        if (elem.type === "blockquote")
          return <BlockQuote elem={elem} key={"q" + elem.id} />;
        if (elem.type === "audio")
          return <BlockAudio elem={elem} key={"a" + elem.id} />;
        if (elem.type === "callout")
          return <BlockCallout elem={elem} key={"c" + elem.id} />;
        if (elem.type === "gallery")
          return <BlockGallery elem={elem} key={"g" + elem.id} />;
        if (elem.type === "embed")
          return <BlockEmbed block={elem} key={"e" + elem.id} />;
        if (elem.type === "image")
          return <BlockImage elem={elem} key={"i" + elem.id} />;
        if (elem.type === "product")
          return <BlockProduct elem={elem} key={"pr" + elem.id} />;
        if (elem.type === "toggle")
          return <BlockToggle elem={elem} key={"t" + elem.id} />;
        if (elem.type === "markup")
          return <BlockMarkdownCard elem={elem} key={"m" + elem.id} />;
        if (elem.type === "button")
          return <BlockButton block={elem} key={"b" + elem.id} />;
      })}
    </>
  );
}

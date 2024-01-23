"use client";

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
  disableToc = true,
  dropCap = false,
}: {
  content: LexicalContentArray;
  disableToc?: boolean;
  dropCap?: boolean;
}) {
  return (
    <>
      {content.map((elem, i) => {
        if (elem.type === "paragraph")
          return <BlockParagraph elem={elem} dropCap={dropCap} key={"p" + i} />;
        if (elem.type === "heading")
          return (
            <BlockHeaders elem={elem} disableToc={disableToc} key={"h" + i} />
          );
        if (elem.type === "quote" || elem.type === "aside")
          return <BlockQuote elem={elem} key={"q" + i} />;
        if (elem.type === "audio")
          return <BlockAudio elem={elem} key={"a" + i} />;
        if (elem.type === "callout")
          return <BlockCallout elem={elem} key={"c" + i} />;
        if (elem.type === "gallery")
          return <BlockGallery elem={elem} key={"g" + i} />;
        if (elem.type === "embed")
          return <BlockEmbed block={elem} key={"e" + i} />;
        if (elem.type === "image")
          return <BlockImage elem={elem} key={"i" + i} />;
        if (elem.type === "product")
          return <BlockProduct elem={elem} key={"pr" + i} />;
        if (elem.type === "toggle")
          return <BlockToggle elem={elem} key={"t" + i} />;
        if (elem.type === "markdownParsed")
          return <BlockMarkdownCard elem={elem} key={"m" + i} />;
        if (elem.type === "button")
          return <BlockButton block={elem} key={"b" + i} />;
      })}
    </>
  );
}

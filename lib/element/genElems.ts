import {
  ComponentClass,
  createElement,
  DetailedReactHTMLElement,
  FunctionComponent,
} from "react";
import childBuilder from "./childBuilder";

import AudioCard from "@/app/journal/[tag]/[slug]/components/blocks/audio/audioCard";
import BlockQuote from "@/app/journal/[tag]/[slug]/components/blocks/blockQuote/blockQuote";
import BookmarkCard from "@/app/journal/[tag]/[slug]/components/blocks/bookmark/bookmarkCard";
import CalloutCard from "@/app/journal/[tag]/[slug]/components/blocks/callout/calloutCard";
import FileCard from "@/app/journal/[tag]/[slug]/components/blocks/fileCard/fileCard";
import GalleryCard from "@/app/journal/[tag]/[slug]/components/blocks/images/galleryCard";
import Header2 from "@/app/journal/[tag]/[slug]/components/blocks/generalElements/header2";
import SectionHeaderCard from "@/app/journal/[tag]/[slug]/components/blocks/sectionHeader/sectionHeaderCard";
import ImageCard from "@/app/journal/[tag]/[slug]/components/blocks/images/imageCard";
import ProductCard from "@/app/journal/[tag]/[slug]/components/blocks/productCard/productCard";
import ToggleCard from "@/app/journal/[tag]/[slug]/components/blocks/toggleCard/toggleCard";
import contentEval from "./contentEval";
import YoutubeCard from "@/app/journal/[tag]/[slug]/components/blocks/embedCard/youtubeCard";
import OtherEmbed from "@/app/journal/[tag]/[slug]/components/blocks/embedCard/otherEmbed";
import findAudioDetails from "@/app/journal/[tag]/[slug]/components/blocks/audio/helpers/findAudioDetails";
import Paragraph from "@/app/journal/[tag]/[slug]/components/blocks/generalElements/paragraph";

export default function genElements(elem: ParseElement) {
  switch (elem.name) {
    case "h2":
      return specComp(Header2, elem);
    case "blockquote":
      if (!elem.attributes?.class || !elem.attributes?.id)
        return specComp(BlockQuote, elem);
    case "p":
      return specComp(Paragraph, elem);
    case "h3":
      const textContent = contentEval(elem);
      return createElement(elem.name, { key: elem.id }, ...textContent);
    case "ul":
    case "ol":
      return createElement(
        elem.name,
        { key: elem.id },
        ...listArray(elem.children)
      );
    case "hr":
      return createElement("hr", { key: elem.id });
    case "figure":
      if (elem.attributes?.class) {
        const figCom = elem.attributes.class;
        switch (true) {
          case figCom.includes("kg-image-card"):
            return specComp(ImageCard, elem);
          case figCom.includes("kg-gallery-card"):
            return specComp(GalleryCard, elem);
          case figCom.includes("kg-bookmark-card"):
            return specComp(BookmarkCard, elem);
          case figCom.includes("kg-embed-card"):
            if (!elem.children) return;
            const child1 = elem.children[0];
            if (child1.name == "iframe") {
              if (child1.attributes?.src?.includes("youtube")) {
                return specComp(YoutubeCard, elem);
              } else {
                return specComp(OtherEmbed, elem);
              }
            }
        }
      }
    case "div":
      if (elem.attributes.class) {
        const divCom = elem.attributes.class;
        switch (true) {
          case divCom.includes("kg-audio-card"):
            const audioElem = elem as AudioElement;
            audioElem.additional = { audio: findAudioDetails(elem) };
            return specComp(AudioCard, elem);
          case divCom.includes("kg-callout-card"):
            return specComp(CalloutCard, elem);
          case divCom.includes("kg-toggle-card"):
            return specComp(ToggleCard, elem);
          case divCom.includes("kg-file-card"):
            return specComp(FileCard, elem);
          //   case divCom.includes("kg-button-card"):
          //     return specComp(PostButtonCard, elem);
          case divCom.includes("kg-header-card"):
            return specComp(SectionHeaderCard, elem);
          case divCom.includes("kg-product-card"):
            return specComp(ProductCard, elem);
          default:
            const divTent = contentEval(elem);
            return createElement("div", { key: elem.id }, ...divTent);
        }
      }
  }
}

function listArray(children: (ParseElement | ParseText)[] | undefined) {
  const arr: Array<DetailedReactHTMLElement<{}, HTMLElement>> = [];
  if (!children) return arr;
  children.forEach((child) => {
    if (child.name == "li") {
      if (child.children) {
        arr.push(createElement("li", {}, ...childBuilder(child.children)));
      }
    }
  });

  return arr;
}

function specComp(
  component:
    | string
    | FunctionComponent<{ elem: any }>
    | ComponentClass<{ elem: any }, any>,
  elem: ParseElement
) {
  return createElement(component, { elem, key: elem.id });
}

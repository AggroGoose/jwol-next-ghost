/* Card Objects in mobileDoc are going to be more complex this may need to split into more files as the app grows. */

import BlockGallery from "@/lib/components/blocks/images/galleryCard";
import parseMarkdownString from "./_parseMarkdownString";

export default function mdCardtoBlock(
  cardArray: MDCardArray,
  n: number,
  i: number
) {
  const card = cardArray[n];
  const type = card[0];

  //Callouts are the most frequent card in this group that I use, so I'll iterate them first.

  if (type === "callout") {
    const coData = card[1];
    const callOutObj: BlockCalloutCard = {
      id: i,
      type: "callout",
      content: coData.calloutText,
      emoji: coData.calloutEmoji,
    };

    return callOutObj;
  }

  if (type === "button") {
    const btnData = card[1];
    const btnObject: BlockButtonCard = {
      id: i,
      type: "button",
      label: btnData.buttonText,
      url: btnData.buttonUrl,
    };

    return btnObject;
  }

  if (type === "markdown") {
    const mdData = card[1].markdown;
    const mdObject = parseMarkdownString(mdData, i);
    return mdObject;
  }

  if (type === "audio") {
    const auData = card[1];
    const audioObject: BlockAudioCard = {
      id: i,
      duration: auData.duration,
      src: auData.src,
      title: auData.title,
      type: "audio",
    };

    return audioObject;
  }

  if (type === "embed") {
    const { url, metadata, html } = card[1];
    const embedObj: BlockEmbedCard = {
      id: i,
      title: metadata.title,
      type: "embed",
      url,
      embedType: metadata.provider_name,
    };

    return embedObj;
  }

  if (type === "product") {
    const prodData = card[1];
    const productObj: BlockProductCard = {
      id: i,
      type: "product",
      title: prodData.productTitle,
      buttonEnabled: prodData.productButtonEnabled,
      buttonLabel: prodData.productButton,
      buttonUrl: prodData.productUrl,
      description: prodData.productDescription,
      rating: prodData.productStarRating,
      image: prodData.productImageSrc,
      height: prodData.productImageHeight,
      width: prodData.productImageWidth,
      ratingEnabled: prodData.productRatingEnabled,
    };

    return productObj;
  }

  if (type === "image") {
    const imgData = card[1];
    const imgObj: BlockImageCard = {
      src: imgData.src,
      height: imgData.height,
      width: imgData.width,
      id: i,
      type: "image",
    };

    if (imgData.alt) imgObj.alt = imgData.alt;
    if (imgData.caption) imgObj.caption = imgData.caption;

    return imgObj;
  }

  if (type === "gallery") {
    const { images, caption } = card[1];
    const newImages: BlockGalleryImage[] = [];

    for (let i = 0; i < images.length; i++) {
      const { height, width, src } = images[i];
      newImages.push({
        height,
        width,
        id: i,
        src,
      });
    }

    const galleryObj: BlockGalleryCard = {
      id: i,
      type: "gallery",
      images: newImages,
      caption,
    };

    return galleryObj;
  }

  if (type === "toggle") {
    const elem = card[1];
    const togObj: BlockToggleCard = {
      id: i,
      type: "toggle",
      title: elem.heading,
      content: elem.content,
    };

    return togObj;
  }
}

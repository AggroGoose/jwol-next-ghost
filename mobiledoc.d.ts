/* This TS file is broken into 3 sections for the MobileDoc Category Types: Cards, Markups, and Sections. */

type MDObject = {
  version: string;
  atoms: Array<[string, string, {}]>;
  cards: MDCardArray;
  markups: MDMarkupArray;
  sections: MDSectionArray;
};

//MD Card Objects, Identified by the number '10' in Sections.

type MDCardArray = Array<
  | MDCardMarkdown
  | MDCardEmbed
  | MDCardCallout
  | MDCardImage
  | MDCardGallery
  | MDCardProduct
  | MDCardAudio
  | MDCardHR
  | MDButtonCard
  | MDCardToggle
>;
type MDCardToggle = ["toggle", { heading: string; content: string }];
type MDCardMarkdown = ["markdown", { markdown: string }];
type MDButtonCard = [
  "button",
  { alignment: string; buttonUrl: string; buttonText: string }
];
type MDCardEmbed = [
  "embed",
  {
    url: string;
    html: JSON;
    type: "video" | "rich";
    metadata: MDYouTubeMeta | MDSoundCloudMeta;
  }
];
type MDYoutubeMeta = {
  title: string;
  author_name: string;
  author_url: string;
  height: number;
  width: number;
  version: string;
  provider_name: "YouTube";
  provider_url: "https://www.youtube.com/";
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
};
type MDSoundCloudMeta = {
  title: string;
  author_name: string;
  author_url: string;
  height: number;
  width: number;
  version: string;
  provider_name: "SoundCloud";
  provider_url: "https://soundcloud.com";
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
};
type MDCardCallout = [
  "callout",
  {
    calloutEmoji: string;
    calloutText: string;
    backgroundColor: string;
  }
];
type MDCardImage = [
  "image",
  {
    src: string;
    width: number;
    height: number;
    alt?: string;
    caption?: string;
  }
];
type MDCardGallery = [
  "gallery",
  { images: Array<MDGalleryImage>; caption?: string }
];
type MDGalleryImage = {
  filename: string;
  row: number;
  width: number;
  height: number;
  src: string;
};
type MDCardProduct = [
  "product",
  {
    productButtonEnabled: boolean;
    productRatingEnabled: boolean;
    productStarRating: number;
    productButton: string;
    productUrl: string;
    productTitle: string;
    productDescription: string;
    productImageSrc: string;
    productImageWidth: number;
    productImageHeight: number;
  }
];
type MDCardAudio = [
  "audio",
  {
    loop: boolean;
    src: string;
    title: string;
    duration: number;
    mimeType: string;
  }
];
type MDCardHR = ["hr", {}];

type MDCardHTML = ["html", string];

//MD Markup Objects, identified by the the middle array of Rich Text Sections.

type MDMarkupArray = Array<MDMarkupElem | MDMarkupLink>;

type MDMarkupElem = ["strong" | "em" | "b" | "i" | "u" | "s" | "sub" | "sup"];
type MDMarkupLink = ["a", ["href", string, "rel", string]];

//MD Sections, these are what determine the layout and placement of returned blocks.

type MDSectionArray = Array<
  MDSectionText | MDSectionCard | MDSectionList | MDBlockQuote
>;
type MDSectionText = [1, "h1" | "h2" | "h3" | "h4" | "p", MDRichTextArray];
type MDBlockQuote = [1, "blockquote", MDRichTextArray];
type MDRichTextArray = Array<MDRichText>;
type MDRichText = [0, Array<numb>, number, string];
type MDRichTextAtom = [1, Array<numb>, number, number, string];
type MDSectionCard = [10, number];
type MDSectionList = [3, "ul" | "ol", Array<MDRichTextArray>];

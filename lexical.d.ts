type LexicalBlock = {
  direction: "ltr";
  format: string;
  indent: number;
  version: number;
};

type LexicalContentArray = Array<
  | LexicalAudio
  | LexicalBookmark
  | LexicalButton
  | LexicalCallout
  | LexicalEmbed
  | LexicalFile
  | LexicalHead
  | LexicalHeaderCard
  | LexicalGallery
  | LexicalHR
  | LexicalHtml
  | LexicalImage
  | LexicalMarkdown
  | LexicalMarkdownParsed
  | LexicalPara
  | LexicalProduct
  | LexicalQuote
  | LexicalToggle
  | LexicalVideo
>;

interface LexicalRoot extends LexicalBlock {
  type: "root";
  children: LexicalContentArray;
}

type LexicalAudio = {
  type: "audio";
  version: number;
  duration: number;
  mimeType: "audio/mpeg";
  src: string;
  title: string;
  thumbnailSrc: string;
};

type LexicalBookmark = {
  type: "bookmark";
  version: number;
  url: string;
  metadata: {
    icon: string;
    title: string;
    description: string;
    author: string;
    publisher: string;
    thumbnail: string;
  };
  caption: string;
};

type LexicalButton = {
  type: "button";
  version: number;
  buttonText: string;
  alignment: string;
  buttonUrl: string;
};

type LexicalCallout = {
  type: "callout";
  version: number;
  calloutText: string;
  calloutEmoji: string;
  backgroundColor: string;
};

interface LexicalEmbed extends LexicalBlock {
  type: "embed";
  version: number;
  url: string;
  embedType: "video" | "rich" | "twitter";
  html: "string";
  caption: string;
  metadata: LexicalYoutube | LexicalSoundCloud | LexicalTwitter;
}

type LexicalFile = {
  type: "file";
  src: string;
  fileTitle: string;
  fileCaption: string;
  fileName: string;
  fileSize: number;
};

interface LexicalHead extends LexicalBlock {
  type: "heading";
  children: Array<LexicalText>;
  tag: "h2" | "h3";
}

type LexicalHeaderCard = {
  type: "header";
  version: number;
  size: string;
  style: string;
  buttonEnabled: boolean;
  buttonUrl: string;
  buttonText: string;
  header: string;
  subheader: string;
  backgroundImageSrc: string;
  accentColor: string;
  alignment: string;
  backgroundColor: string;
  backgroundImageWidth: null | number;
  backgroundImageHeight: null | number;
  backgroundSize: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  layout: string;
  swapped: boolean;
};

type LexicalGallery = {
  type: "gallery";
  version: 1;
  images: Array<LexicalGalleryImage>;
  caption: string;
};

type LexicalGalleryImage = {
  row: number;
  src: string;
  width: number;
  height: number;
  filename: string;
};

type LexicalHR = {
  type: "horizontalrule";
  version: number;
};

type LexicalHtml = {
  type: "html";
  version: number;
  html: string;
};

type LexicalImage = {
  type: "image";
  version: number;
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  caption: string;
  cardWidth: string;
  href: string;
};

interface LexicalLink extends LexicalBlock {
  type: "link";
  rel: null | string;
  target: null | string;
  title: null | string;
  url: string;
  children: Array<LexicalText>;
}

type LexicalMarkdown = {
  type: "markdown";
  version: number;
  markdown: string;
};

interface LexicalMarkdownParsed {
  type: "markdownParsed";
  version: number;
  children: Array<LexicalMarkdownQuote | LexicalList>;
}

type LexicalMarkdownQuote = {
  type: "markdownQuote";
  version: number;
  children: Array<LexicalPara>;
  author?: string;
};

interface LexicalList extends LexicalBlock {
  type: "ol" | "ul";
  children: Array<LexicalListItem>;
}

type LexicalListItem = {
  type: "li";
  children: Array<LexicalText | LexicalLink>;
  id: number;
};

interface LexicalPara extends LexicalBlock {
  type: "paragraph";
  children: Array<LexicalText | LexicalLink>;
}

type LexicalProduct = {
  type: "product";
  version: number;
  productImageSrc: string;
  productImageWidth: number;
  productImageHeight: number;
  productTitle: string;
  productDescription: string;
  productRatingEnabled: boolean;
  productStarRating: number;
  productButtonEnabled: boolean;
  productButton: string;
  productUrl: string;
};

interface LexicalQuote extends LexicalBlock {
  type: "quote" | "aside";
  children: Array<LexicalText>;
}

type LexicalText = {
  detail: number;
  format: number;
  mode: "normal";
  style: string;
  text: string;
  type: "extended-text";
  version: number;
};

type LexicalToggle = {
  type: "toggle";
  version: number;
  heading: string;
  content: string;
};

type LexicalTwitter = {
  url: string;
  author_name: string;
  author_url: string;
  html: string;
  width: number;
  height: number;
  type: "twitter";
  cach_age: string;
  provider_name: "Twitter";
  provider_url: string;
  version: string;
};

type LexicalVideo = {
  type: "video";
  version: number;
  src: string;
  caption: string;
  fileName: string;
  mimeType: string;
  width: number;
  height: number;
  duration: number;
  thumbnailSrc: string;
  customThumbnailSrc: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  cardWidth: string;
  loop: boolean;
};

type LexicalYoutube = {
  title: string;
  author_name: string;
  author_url: string;
  type: "video";
  height: number;
  width: number;
  version: string;
  provider_name: "YouTube";
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
  html: string;
};

type LexicalSoundCloud = {
  title: string;
  author_name: string;
  author_url: string;
  type: "rich";
  height: number;
  width: number;
  version: string;
  provider_name: "SoundCloud";
  provider_url: string;
  description: string;
  thumbnail_url: string;
  html: string;
};

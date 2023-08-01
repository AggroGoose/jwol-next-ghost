type BlockObject = {
  content: BlockArray;
  toc: BlockTOCArray;
};
type BlockTOCArray = Array<BlockTOCObject>;
type BlockTOCObject = {
  id: number | string;
  title: string;
  tag: string;
};
type BlockArray = Array<
  | BlockEmbedCard
  | BlockCalloutCard
  | BlockImageCard
  | BlockGalleryCard
  | BlockProductCard
  | BlockAudioCard
  | BlockHRCard
  | BlockToggleCard
  | BlockTextCard
  | BlockListCard
  | BlockMarkupCard
  | BlockQuoteCard
  | BlockButtonCard
  | BlockHeadCard
>;
type BlockButtonCard = {
  id: number | string;
  type: "button";
  label: string;
  url: string;
};
type BlockEmbedCard = {
  id: number | string;
  type: "embed";
  url: string;
  title: string;
  caption?: string;
  embedType: "YouTube" | "SoundCloud";
};
type BlockCalloutCard = {
  id: number | string;
  type: "callout";
  emoji: string;
  content: string;
};
type BlockImageCard = {
  id: number | string;
  type: "image";
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
};
type BlockGalleryCard = {
  id: number | string;
  type: "gallery";
  images: Array<BlockGalleryImage>;
  caption?: string;
};
type BlockGalleryImage = {
  id: number;
  title?: string;
  height: number;
  width: number;
  src: string;
};
type BlockProductCard = {
  id: number | string;
  type: "product";
  buttonEnabled: boolean;
  ratingEnabled: boolean;
  rating: number;
  buttonLabel: string;
  buttonUrl: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
};
type BlockAudioCard = {
  id: number | string;
  type: "audio";
  src: string;
  title: string;
  duration: number;
};
type BlockHRCard = {
  id: number | string;
  type: "hr";
};
type BlockToggleCard = {
  id: number | string;
  type: "toggle";
  title: string;
  content: string;
};
type BlockTextCard = {
  id: number | string;
  type: "p";
  content: BlockRichTextArr;
};
type BlockHeadCard = {
  id: number | string;
  type: "h1" | "h2" | "h3" | "h4";
  tag: string;
  content: BlockRichTextArr;
};
type BlockQuoteCard = {
  id: number | string;
  type: "blockquote";
  content: Array<BlockRichTextArr>;
  author?: string;
};
type BlockListCard = {
  id: number | string;
  type: "ol" | "ul";
  content: Array<BlockRichTextArr>;
};
type BlockMarkupCard = {
  id: number | string;
  type: "markup";
  content: BlockArray;
};
type BlockRichTextArr = Array<BlockRichText>;
type BlockRichText = {
  content: string;
  emphasis: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
  };
  link: { url: string; internal: boolean } | null;
};

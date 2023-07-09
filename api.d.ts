type GhostPost = {
  slug: string;
  id: string;
  uuid: string;
  title: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: public;
  created_at: string;
  updated_at: string;
  custom_excerpt: string | null;
  codeinjection_head: null;
  codeinjection_foot: null;
  custom_template: null;
  canonical_url: null;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  comments: boolean;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  meta_title: string | null;
  meta_description: string | null;
  email_subject: string | null;
  frontmatter: null;
  feature_image_alt: string | null;
  feature_image_caption: string | null;
  primary_tag: GhostTag;
  tags: GhostTag[];
};

type GhostTag = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  feature_image: string | null;
  visibility: string;
  accent_color: string | null;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  codeinjection_head: null;
  codeinjection_foot: null;
  canonical_url: string | null;
  url: string;
};

interface MainPost extends GhostPost {
  content: ParseElement[];
}
type ResponseTag = {
  id: string;
  name: string;
  slug: string;
};
type ResponsePost = {
  slug: string;
  id: string;
  title: string;
  feature_image: string | null;
  feature_image_alt: string;
  feature_image_caption: string | null;
  created_at: string;
  updated_at: string;
  excerpt: string;
  reading_time: number;
  og_image: string;
  og_title: string;
  og_description: string;
  twitter_image: string;
  twitter_title: string;
  meta_title: string;
  meta_description: string;
  content: ParseElement[];
  primary_tag: ResponseTag;
  tags: ResponseTag[];
  audio_url: string | null;
  likes: number;
  saves: number;
};

type ResponseMore = {
  title: string;
  excerpt: string;
  slug: string;
  tag: string;
  tagSlug: string;
  featureImg: string | null;
  featureImgAlt: string;
  published: string;
};

type ParseElement = {
  name: string;
  attributes: ElemAttribs;
  id: string | number;
  children: Array<ParseText | ParseElement>;
  content?: string;
};

type ParseText = {
  name: "text";
  id: string | number;
  data: string;
};

interface AudioElement extends ParseElement {
  additional: {
    audio: { imgSrc: string; audioSrc: string; audioTitle: string };
  };
}

type CheerioElem = {
  tagName: string;
  type: "tag" | "script" | "style" | "text";
  name: string;
  attribs: { [attr: string]: string };
  "x-attribsNamespace": { [attr: string]: string };
  "x-prefixNamespace": { [attr: string]: string };
  children: CheerioElem[];
  childNodes: CheerioElem[] | null;
  lastChild: CheerioElem | null;
  firstChild: CheerioElem | null;
  next: CheerioElem | null;
  nextSibling: CheerioElem;
  prev: CheerioElem | null;
  previousSibling: CheerioElem;
  parent: CheerioElem;
  parentNode: CheerioElem;
  nodeValue: string;
  data?: string | undefined;
  startIndex?: number | undefined;
  endIndex?: number | undefined;
};

type ElemAttribs = {
  content?: string;
  children?: Object[];
  key?: string | number | undefined;
  id?: string;
  className?: string;
  class?: string;
  href?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  title?: string;
};

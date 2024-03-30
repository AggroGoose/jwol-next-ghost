let SITE_URI: string;
let SITE_SERVER: string;
const prodServer = true;

if (process.env.NODE_ENV === "production") {
  if (process.env.VERCEL_ENV === "preview") {
    SITE_URI = "https://no-leave-society-git-localdev-stoicgoose.vercel.app";
  } else {
    SITE_URI = "https://www.sarcastonaut.com";
  }
} else {
  SITE_URI = "http://localhost:3000";
}

if (prodServer) {
  SITE_SERVER = "https://ganso.noleavesociety.com/";
} else {
  SITE_SERVER = "http://localhost:8080/";
}

const ABOUT_SLUG = "about";
const BLOG_SLUG = "journal";
const POLICY_SLUG = "policies";
const TAG_SLUG = "tag";
const USER_SLUG = "user";

const ABOUT_ROUTE = "/" + ABOUT_SLUG;
const BLOG_ROUTE = "/" + BLOG_SLUG;
const POLICY_ROUTE = "/" + POLICY_SLUG;
const TAG_ROUTE = "/" + TAG_SLUG;
const USER_ROUTE = "/" + USER_SLUG;

const SITE_URL = SITE_URI + "/";

const ABOUT_URL = SITE_URL + ABOUT_SLUG + "/";
const BLOG_URL = SITE_URL + BLOG_SLUG + "/";
const POLICY_URL = SITE_URL + POLICY_SLUG + "/";
const TAG_URL = SITE_URL + TAG_SLUG + "/";
const USER_URL = SITE_URL + USER_SLUG + "/";

export {
  SITE_URI,
  SITE_URL,
  SITE_SERVER,
  ABOUT_ROUTE,
  ABOUT_URL,
  BLOG_ROUTE,
  BLOG_URL,
  POLICY_ROUTE,
  POLICY_URL,
  TAG_ROUTE,
  TAG_URL,
  USER_ROUTE,
  USER_URL,
};

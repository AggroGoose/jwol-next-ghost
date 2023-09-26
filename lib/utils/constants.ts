let SITE_URL: string;
let SITE_SERVER: string;
const prodServer = true;

if (process.env.NODE_ENV === "production") {
  if (process.env.VERCEL_ENV === "preview") {
    SITE_URL = "https://no-leave-society-git-localdev-stoicgoose.vercel.app/";
  } else {
    SITE_URL = "https://www.noleavesociety.com/";
  }
} else {
  SITE_URL = "http://localhost:3000/";
}

if (prodServer) {
  SITE_SERVER = "https://ganso.noleavesociety.com/";
} else {
  SITE_SERVER = "http://localhost:8080/";
}

const ABOUT_ROUTE = "/about";
const BLOG_ROUTE = "/journal";
const POLICY_ROUTE = "/policies";
const TAG_ROUTE = "/journal/tag";
const USER_ROUTE = "/user";

const ABOUT_URL = SITE_URL + ABOUT_ROUTE + "/";
const BLOG_URL = SITE_URL + BLOG_ROUTE + "/";
const POLICY_URL = SITE_URL + POLICY_ROUTE + "/";
const TAG_URL = SITE_URL + TAG_ROUTE + "/";
const USER_URL = SITE_URL + USER_ROUTE + "/";

export {
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

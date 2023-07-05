import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";

let ghost: GhostAPI;
const url = process.env.GHOST_URL || "";
const key = process.env.GHOST_CONTENT || "";

if (process.env.NODE_ENV === "production") {
  ghost = new GhostContentAPI({
    url,
    key,
    version: "v5.0",
  });
} else {
  if (!global.ghost) {
    global.ghost = new GhostContentAPI({
      url,
      key,
      version: "v5.0",
    });
  }

  ghost = global.ghost;
}

export default ghost;

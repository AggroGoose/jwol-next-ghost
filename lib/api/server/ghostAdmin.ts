// @ts-expect-error
import GhostAdminAPI from "@tryghost/admin-api";
import { GhostAPI } from "@tryghost/content-api";

type GhostAdminAPI = GhostAPI;

const url = process.env.GHOST_URL || "";
const token = process.env.GHOST_ADMIN || "";

const ghostAdmin = new GhostAdminAPI({
  url,
  key: token,
  version: "v5.0",
});

// if (process.env.NODE_ENV === "production") {
//   ghostAdmin =
// } else {
//   if (!global.ghost) {
//     global.ghostAdmin = new GhostAdminAPI({
//       url,
//       key,
//       version: "v5.0",
//     });
//   }

//   ghostAdmin = global.ghostAdmin;
// }

export default ghostAdmin;

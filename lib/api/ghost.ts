import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";

let ghost: GhostAPI;
const url = process.env.GHOST_URL || "";
const token = process.env.GHOST_CONTENT || "";

if (process.env.NODE_ENV === "production") {
  ghost = new GhostContentAPI({
    url,
    key: token,
    version: "v5.0",
    makeRequest: async ({ url, method, params, headers }) => {
      const apiUrl = new URL(url);

      Object.keys(params).map((key) =>
        apiUrl.searchParams.set(key, encodeURIComponent(params[key]))
      );

      return fetch(apiUrl.toString(), { method, headers }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return { data: await res.json() };
      });
    },
  });
} else {
  if (!global.ghost) {
    global.ghost = new GhostContentAPI({
      url,
      key: token,
      version: "v5.0",
      makeRequest: async ({ url, method, params, headers }) => {
        const apiUrl = new URL(url);

        Object.keys(params).map((key) =>
          apiUrl.searchParams.set(key, encodeURIComponent(params[key]))
        );

        return fetch(apiUrl.toString(), { method, headers }).then(
          async (res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }

            return { data: await res.json() };
          }
        );
      },
    });
  }

  ghost = global.ghost;
}

export default ghost;

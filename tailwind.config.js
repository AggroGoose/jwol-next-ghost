/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-primary)"],
      head: ["var(--font-secondary)"],
      tertiary: ["var(--font-tertiary)"],
    },
    fontSize: {
      xxs: "var(--font-tiny)",
      xs: "var(--font-smaller)",
      sm: "var(--font-small)",
      base: "var(--font-regular)",
      lg: "var(--font-large)",
      xl: "var(--font-larger)",
      head1: "var(--font-head1)",
      head2: "var(--font-head2)",
      head3: "var(--font-head3)",
    },
    screens: {
      sm: "360px",
      md: "575px",
      lg: "950px",
      xl: "1200px",
      xxl: "1475px",
    },
    extend: {
      spacing: {
        "under-head": "calc(var(--header-height) - 2px)",
      },
      minHeight: {
        "under-head": "calc(100vh - (var(--header-height) - 2px))",
      },
      lineHeight: {
        0: "0",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--alt-color)",
        neutral: "var(--color-darkest)",
        "base-100": "var(--color-lightest)",
        info: "#21C1DA",
        success: "#65DA21",
        warning: "#DA9621",
        error: "#DA4A34",
      },
      fontWeight: {
        hdw: "var(--font-head-weight)",
      },
      gridTemplateColumns: {
        sideBar:
          "[side-start] var(--sidenav-width) [content-start] 1fr [content-end]",
        blockGrid:
          "[main-start] 1fr [min-start] repeat(6, 1fr) [min-end] 1fr [main-end]",
        mainGrid:
          "[left-start] 1fr [content-start] var(--body-size) [content-end] 1fr [right-end]",
        product: "1fr max-content",
        quote: "12px 1fr 12px",
      },
      gridTemplateRows: {
        quote: "12px 1fr 12px",
      },
      gridColumnStart: {
        cont: "content-start",
        "cont-end": "content-end",
        side: "side-start",
        main: "main-start",
        min: "min-start",
        left: "left-start",
      },
      gridColumnEnd: {
        cont: "content-end",
        "cont-start": "content-start",
        main: "main-end",
        min: "min-end",
        "min-start": "min-start",
        right: "right-end",
      },
      letterSpacing: {
        ps: "var(--font-space)",
        hs: "var(--font-head-space)",
        bs: "var(--font-badge-space)",
      },
      boxShadow: {
        pmd: "0 4px 6px -1px var(--primary-hsla), 0 2px 4px -2px var(--primary-hsla)",
        plg: "0 10px 15px -3px var(--primary-hsla), 0 4px 6px -4px var(--shadow-primary)",
        smd: "0 4px 6px -1px var(--secondary-hsla), 0 2px 4px -2px var(--secondary-hsla)",
        slg: "0 10px 15px -3px var(--secondary-hsla), 0 4px 6px -4px var(--secondary-hsla)",
        darkmd:
          "0 4px 6px -1px var(--dark-hsla), 0 2px 4px -2px var(--dark-hsla)",
        darklg:
          "0 20px 25px -5px var(--dark-hsla), 0 8px 10px -6px var(--dark-hsla)",
      },
    },
  },
  plugins: [require("daisyui")],
};

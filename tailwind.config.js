const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-primary)"],
      head: ["var(--font-secondary)"],
    },
    fontSize: {
      xxs: "var(--font-tiny)",
      xs: "var(--font-smaller)",
      sm: "var(--font-small)",
      base: "var(--font-regular)",
      lg: "var(--font-large)",
      xl: "var(--font-larger)",
      xxl: "var(--font-xlarge)",
      head1: "var(--font-head1)",
      head2: "var(--font-head2)",
      head3: "var(--font-head3)",
      head4: "var(--font-head4)",
    },
    screens: {
      sm: "360px",
      md: "550px",
      lg: "950px",
      xl: "1200px",
      xxl: "1475px",
    },
    slideFill: {
      primary: "var(--primary-500)",
      accent: "var(--accent-400)",
    },
    extend: {
      spacing: {
        "under-head": "calc(var(--header-height) - 2px)",
        react: "calc(90vh)",
      },
      minHeight: {
        "under-head": "calc(100vh - (var(--header-height) - 2px))",
      },
      lineHeight: {
        0: "0",
      },
      colors: {
        always: {
          dark: "var(--color-darkest)",
          light: "var(--color-lightest)",
        },
        primary: {
          light: "var(--primary-light)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          1000: "var(--primary-1000)",
          dark: "var(--primary-dark)",
        },
        accent: {
          light: "var(--accent-light)",
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          1000: "var(--accent-1000)",
          dark: "var(--accent-dark)",
        },
        info: "#21C1DA",
        success: "#65DA21",
        warning: "#ca101f",
        error: "hsl(355, 80%, 50%)",
      },
      fontWeight: {
        hdw: "var(--font-head-weight)",
      },
      gridTemplateColumns: {
        sideBar:
          "[side-start] var(--sidenav-width) [content-start] 1fr [content-end]",
        blockGrid:
          "[main-start] 1fr [min-start] repeat(6, 1fr) [min-end] 1fr [main-end]",
        blockGridSm:
          "[main-start] 1fr [min-start] repeat(10, 1fr) [min-end] 1fr [main-end]",
        mainGrid:
          "[left-start] 1fr [content-start] var(--body-size) [content-end] 1fr [right-end]",
        article:
          "1fr [content-start] var(--blog-width) [content-end] minmax(56px,1fr) [react-end]",
        articlesm: "[content-start] 1fr [content-end] max-content [react-end]",
        page: "1fr [content-start] var(--blog-width) [content-end] 1fr",
        feature: "3fr 1fr",
        product: "1fr max-content",
        quote: "12px 1fr 12px",
        nav: "1fr 6fr 1fr",
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
        hs: "var(--font-secondary-space)",
        bs: "var(--font-badge-space)",
      },
      boxShadow: {
        pmd: "0 4px 6px -1px var(--primary-hsla), 0 2px 4px -2px var(--primary-hsla)",
        plg: "0 10px 15px -3px var(--primary-hsla), 0 4px 6px -4px var(--shadow-primary)",
        darkmd:
          "0 4px 6px -1px var(--dark-hsla), 0 2px 4px -2px var(--dark-hsla)",
        darklg:
          "0 20px 25px -5px var(--dark-hsla), 0 8px 10px -6px var(--dark-hsla)",
        amd: "0 4px 6px -1px var(--accent-hsla), 0 2px 4px -2px var(--accent-hsla)",
        alg: "0 20px 25px -5px var(--accent-hsla), 0 8px 10px -6px var(--accent-hsla)",
        flipmd:
          "0 4px 6px -1px var(--flip-hsla), 0 2px 4px -2px var(--flip-hsla)",
        fliplg:
          "0 20px 25px -5px var(--flip-hsla), 0 8px 10px -6px var(--flip-hsla)",
      },
      colorShadow: {
        primary: "var(--primary-hsla)",
        accent: "var(--accent-hsla)",
        flip: "var(--flip-hsla)",
        dark: "var(--dark-hsla)",
        light: "var(--light-hsla)",
      },
      gradients: {
        "conic-silver":
          "conic-gradient(#8a8a8a, #e0e0e0, #909090, #f1f2f1, #949392, #cfcfcf, #8a8a8a)",
        main: "linear-gradient(175deg, var(--primary-dark) 25%, var(--primary-800) 55%, var(--primary-dark) 69%)",
        "main-rotate":
          "linear-gradient(-45deg, var(--primary-500), var(--accent-500))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
    plugin(function ({ addVariant, matchUtilities, theme, addUtilities }) {
      addVariant("thumb", ["&::-webkit-slider-thumb", "&::-moz-range-thumb"]);
      addVariant("wk-thumb", "&::-webkit-slider-thumb");
      addVariant("track", [
        "&::-webkit-slider-runnable-track",
        "&::-moz-range-track",
        "&::-moz-range-progress",
      ]);
      addUtilities({
        ".drop-cap": {
          "&::first-letter": {
            float: "left",
            lineHeight: "1",
            fontSize: "4.25rem",
            marginRight: "0.18em",
            marginTop: "0.1em",
            color: "var(--primary-600)",
            borderBottom: "4px solid var(--primary-500)",
            borderRight: "4px solid var(--accent-500)",
            padding: "0.4rem 0.8rem",
            fontFamily: "var(--font-secondary)",
            fontWeight: "700",
          },
        },
        ".link-underline": {
          position: "relative",
          lineHeight: "1.25",
          zIndex: "0",
          "&::after": {
            backgroundColor: "var(--accent-500)",
            bottom: "0",
            content: `""`,
            left: "-3px",
            position: "absolute",
            right: "-3px",
            top: "85%",
            zIndex: "-1",
            transitionDuration: "0.5s",
            transitionProperty: "top",
          },
          "&:hover::after": {
            top: "0",
          },
        },
        ".primary-font": {
          fontFamily: "var(--font-primary)",
        },
        ".secondary-font": {
          fontFamily: "var(--font-secondary)",
        },
        ".block-full": {
          gridColumn: "full",
        },
        ".block-wide": {
          gridColumn: "wide",
        },
        ".block-main": {
          gridColumn: "main",
        },
        ".block-thin": {
          gridColumn: "thin",
        },
      });
      matchUtilities(
        {
          "wk-width": (value) => ({
            "--progress-width": value,
          }),
          "range-h": (value) => ({
            height: value,
            "--track-height": value,
          }),
          "thumb-h": (value) => ({
            "--thumb-height": value,
          }),
        },

        { values: theme("spacing") }
      );
      matchUtilities(
        {
          gradient: (value) => ({
            backgroundImage: value,
          }),
          "gradient-hover": (value) => ({
            backgroundSize: "200% auto",
            backgroundImage: value,
            "&:hover": {
              backgroundPosition: "right center",
            },
          }),
        },
        {
          values: theme("gradients"),
        }
      );
      matchUtilities(
        {
          cshadow: (value) => ({
            boxShadow: `0 4px 6px -1px ${value}, 0 2px 4px -2px ${value}`,
          }),
          "cshadow-lg": (value) => ({
            boxShadow: `0 20px 25px -5px ${value}, 0 8px 10px -6px ${value}`,
          }),
          "cshadow-rd": (value) => ({
            boxShadow: `0 0 4px 3px ${value}`,
          }),
        },
        {
          values: theme("colorShadow"),
        }
      );
      matchUtilities(
        {
          progress: (value) => ({
            "--track-color": value,
            "&::-webkit-slider-runnable-track": {
              backgroundImage:
                "linear-gradient(90deg, var(--track-color) var(--progress-width), transparent var(--progress-width))",
            },
            "&::-moz-range-progress": {
              background: "var(--track-color)",
            },
          }),
        },
        { values: flattenColorPalette(theme("colors")) }
      );
    }),
  ],
};

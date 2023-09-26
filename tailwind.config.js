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
    },
    screens: {
      sm: "360px",
      md: "575px",
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
        base: {
          main: "var(--background-base)",
          tier2: "var(--background-tier2)",
          tier3: "var(--background-tier3)",
          primary: "var(--background-primary)",
          accent: "var(--background-accent)",
          flip: "var(--background-flip)",
        },
        fcolor: {
          base: "var(--font-color-main)",
          head: "var(--font-color-head)",
          link: "var(--font-color-link)",
          flip: "var(--font-color-flip)",
        },
        subtle: {
          primary: "var(--subtle-color-primary)",
          primary2: "var(--subtle-color-primary2)",
          accent: "var(--subtle-color-accent)",
          flip: "var(--subtle-color-flip)",
          flip2: "var(--subtle-color-flip2)",
        },
        hover: {
          base: "var(--hover-color-base)",
          primary: "var(--hover-color-primary)",
          accent: "var(--hover-color-accent)",
          link: "var(--hover-color-link)",
          warning: "#ac000e",
        },
        primary: {
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
        feature: "3fr 1fr",
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
        main: "linear-gradient(135deg, var(--primary-500), var(--accent-500) 60%,var(--primary-500))",
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
            lineHeight: "0.69",
            fontSize: "4rem",
            marginRight: "0.08em",
            marginTop: "0.14em",
            color: "var(--subtle-color-accent)",
          },
        },
        ".bg-texture": {
          background: "var(--grunge-image)",
          backgroundSize: "cover",
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

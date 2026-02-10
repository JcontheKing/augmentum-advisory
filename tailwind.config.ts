import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#1a3a5c", // Primary navy from logo
          950: "#102a43",
        },
        teal: {
          50: "#e6ffff",
          100: "#b3fffc",
          200: "#80fff9",
          300: "#4dfff6",
          400: "#1afff3",
          500: "#01aca8", // Primary teal from logo
          600: "#018a87",
          700: "#016866",
          800: "#004645",
          900: "#002423",
        },
        // Neutral grays for backgrounds
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      fontFamily: {
        serif: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Unified typography scale
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],    // 72px - large display
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],   // 60px - page hero (lg)
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],      // 48px - page hero (base)
        "display-sm": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],   // 44px - section heading (lg)
        "heading-2xl": ["2.375rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 38px - section heading (md)
        "heading-xl": ["2rem", { lineHeight: "1.3" }],                                // 32px - section heading (base)
        "heading-lg": ["1.5rem", { lineHeight: "1.4" }],                              // 24px - card/feature titles
        "heading-md": ["1.25rem", { lineHeight: "1.4" }],                             // 20px - small headings
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],                                // 20px - subtitles
        "body-md": ["1.125rem", { lineHeight: "1.7" }],                               // 18px - body text
        "body-sm": ["1rem", { lineHeight: "1.6" }],                                   // 16px - supporting text
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],          // 12px - metadata
      },
      spacing: {
        // Consistent spacing scale
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      maxWidth: {
        "content-sm": "640px",
        "content-md": "768px",
        "content-lg": "1024px",
        "content-xl": "1280px",
        "content-2xl": "1440px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scroll": "scroll 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

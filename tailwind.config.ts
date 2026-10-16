import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0A",
          soft: "#111111",
          card: "#1A1A1A",
          elevated: "#1E1E1E",
        },
        line: "#2A2A2A",
        muted: "#9CA3AF",
        subtle: "#6B7280",
      },
      fontFamily: {
        // Poppins via next/font (matches Figma body spec)
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Full display stack lives in globals.css (:root --font-display).
        // Prefers TT Supermolot Neue if present, otherwise Chakra Petch fallback.
        display: ["var(--font-display)"],
      },
      maxWidth: {
        shell: "1200px",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [
    // Custom `tablet:` variant — a bounded media query (≥768px AND <1280px)
    // that targets iPad mini through iPad Pro without affecting mobile or
    // laptop. Implemented as a plugin (not a `screens` entry) so Tailwind's
    // `min-[*]:` arbitrary variants continue to work. The `html &` wrapper
    // bumps selector specificity by one element so `tablet:` consistently
    // wins over `md:`/`lg:` utilities at the tablet range regardless of
    // where Tailwind places it in the generated CSS source order.
    plugin(({ addVariant }) => {
      addVariant(
        "tablet",
        "@media (min-width: 768px) and (max-width: 1279.98px) { html & }"
      );
    }),
  ],
};

export default config;

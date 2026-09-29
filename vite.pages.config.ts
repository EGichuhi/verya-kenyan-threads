// Build config for GitHub Pages deployment (static site, no server runtime).
// Used by .github/workflows/deploy-pages.yml — the normal Lovable build keeps
// using vite.config.ts. Set PAGES_BASE (e.g. https://user.github.io/repo/) to
// make asset URLs match a GitHub Pages project subpath.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "static" },
  vite: { base: process.env.PAGES_BASE || "/" },
});

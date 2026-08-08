import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
//
// NOTE: Kimi's `kimi-plugin-inspect-react` was removed because it's not a
// public npm package and would fail `npm install` on Cloudflare Pages.
// Use React DevTools in browser if you need a similar view in dev.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

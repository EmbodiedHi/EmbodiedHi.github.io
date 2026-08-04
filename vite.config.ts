import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research/index.html"),
        team: resolve(__dirname, "team/index.html"),
        publications: resolve(__dirname, "publications/index.html"),
        news: resolve(__dirname, "news/index.html"),
        notFound: resolve(__dirname, "404.html")
      }
    }
  }
});

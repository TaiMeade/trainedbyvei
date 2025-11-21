// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/trainedbyvei/",   // IMPORTANT for GitHub Pages
});

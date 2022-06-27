import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vitejs-vite-ekqdje/',
  root: __dirname,
  base: "/vitejs-vite-ekqdje/",
  resolve: {
    alias: [
      {
        find: /^assets\//,
        replacement: path.join(__dirname, "../assets/"),
      },
    ],
  },
  plugins: [vue(), ssr(), svgLoader({})],
});

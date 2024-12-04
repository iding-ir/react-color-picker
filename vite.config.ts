import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  css: {
    modules: {
      generateScopedName: "[name] - [local] - [hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/config.scss" as *;`,
      },
    },
  },
});

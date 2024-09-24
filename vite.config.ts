import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodePackageImporter } from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        importers: [new NodePackageImporter()],
        additionalData: `@use "pkg:bulma/sass/utilities" as utilities;`,
      },
    },
  },
  plugins: [react()],
});

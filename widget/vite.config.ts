import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import imports from "postcss-import";
import autoprefixer from "autoprefixer";
import blender from "postcss-icon-blender";
import lit from "rollup-plugin-postcss-lit";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        blender(),
        imports(),
        tailwind(), 
        autoprefixer(),
      ],
    },
  },
  plugins: [lit({ importPackage: "lit-element" })],
  build: {
    minify: 'terser',
    terserOptions: {
      mangle: true,
      compress: true,
    },
    lib: {
      // name: 'widget',
      formats: ["cjs"],
      fileName: 'widget',
      entry: "src/noadshls-widget.ts",
      // name: 'widget',
      // formats: ["umd"],
      // fileName: 'widget',
      // entry: "src/noadshls-widget.ts",
    },
    rollupOptions: {
      // external: /^lit/,
    },
  },
});

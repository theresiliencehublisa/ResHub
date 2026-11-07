import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const PROJECT_ROOT = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  root: PROJECT_ROOT,
  ssr: {
    noExternal: [],
  },
  build: {
    ssr: path.resolve(PROJECT_ROOT, "src/entry-server.tsx"),
    outDir: path.resolve(PROJECT_ROOT, "dist/server-ssr"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "entry-server.js",
      },
    },
  },
});

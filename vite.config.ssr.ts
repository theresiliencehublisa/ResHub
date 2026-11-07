import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname),
  ssr: {
    noExternal: [],
  },
  build: {
    ssr: path.resolve(import.meta.dirname, "client/src/entry-server.tsx"),
    outDir: path.resolve(import.meta.dirname, "dist/server-ssr"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "entry-server.js",
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

import { cloudflare } from "@cloudflare/vite-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: mode === "production" ? (process.env.VITE_BASE_PATH ?? "/DannySec/") : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Only remove hash from images — keeps hash on CSS/JS for cache busting
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(name)) {
            return "assets/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  publicDir: "public", // Ensures public/ files are copied to dist/
}));
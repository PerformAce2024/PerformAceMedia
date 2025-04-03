import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add server configuration for both dev and preview
  server: {
    allowedHosts: ["www.performacemedia.com", "performacemedia.com"],
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    allowedHosts: ["www.performacemedia.com", "performacemedia.com"],
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    // Production optimization settings
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
        // Ensure asset filenames include hashes for cache busting
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    // Configure output directory
    outDir: "dist",
    // Clean the output directory before building
    emptyOutDir: true,
  },
});

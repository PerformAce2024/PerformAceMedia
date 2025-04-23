import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; media-src 'self' https://pacreatives.s3.ap-south-1.amazonaws.com https://*.amazonaws.com; connect-src 'self' https://pacreatives.s3.ap-south-1.amazonaws.com https://*.amazonaws.com; img-src 'self' data: https://*.amazonaws.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';",
    },
  },
});

//  Configuration for the build tool that compiles and bundles the React code for the browser.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set frontend to run on port 3000
  },
});

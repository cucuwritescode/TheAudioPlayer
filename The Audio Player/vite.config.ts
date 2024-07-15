import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 4000,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
});
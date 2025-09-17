import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ➊ import plugin tailwind

export default defineConfig({
  plugins: [
    react(), // ➋ plugin React để hỗ trợ JSX/HMR
    tailwindcss(), // ➌ plugin kích hoạt Tailwind theo cách v4
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSlideshowImage from "react-slideshow-image";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      rollupOptions: {
         external: [reactSlideshowImage],
      },
   },
});

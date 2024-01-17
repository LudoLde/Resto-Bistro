import { defineConfig } from "vite";
import reactSlideshowImage from "react-slideshow-image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import react from "@vitejs/plugin-react";

// Configure Font Awesome
library.add(fab, far, fas);

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), reactSlideshowImage],
   jsx: {
      factory: "React.createElement",
      fragment: "React.Fragment",
   },
   build: {
      rollupOptions: {
         external: [
            "react-slideshow-image",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/free-solid-svg-icons",
         ],
      },
   },
});

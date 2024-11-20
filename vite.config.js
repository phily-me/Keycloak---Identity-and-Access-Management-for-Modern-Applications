import { defineConfig } from "vite";
import path from "path";

// Shared Vite config
export default defineConfig(({ _, mode }) => {
  const rootFolder = mode; // `mode` will be set to 'ch1', 'ch2', etc. when running `npm run ch1`
  return {
    root: path.resolve(__dirname, rootFolder, "frontend"), // Set the root to the specific frontend folder
    build: {
      outDir: path.resolve(__dirname, `dist/${rootFolder}`), // Output to the respective folder in dist/
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    middleware: {
      // .svg 확장자 파일에 대한 Content-Type을 설정합니다.
      "*": (req, res, next) => {
        if (req.url.endsWith(".svg")) {
          res.setHeader("Content-Type", "image/svg+xml");
        }
        next();
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "Font/[name][extname]", // 폰트 파일을 정적 자원으로 포함되도록 설정
      },
    },
  },
});

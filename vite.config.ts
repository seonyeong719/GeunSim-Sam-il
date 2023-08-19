import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "Font/[name][extname]", // 폰트 파일을 정적 자원으로 포함되도록 설정
      },
    },
  },
});

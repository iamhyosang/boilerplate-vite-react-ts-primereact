import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// alias는 tsconfig.app.json에도 추가 필요
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      layouts: "/src/layouts",
      pages: "/src/pages",
      lib: "/src/lib",
    },
  },
})

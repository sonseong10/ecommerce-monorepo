import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  root: './',
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    fs: {
      allow: ['.'],
    },
  },
  build: {
    outDir: '../../dist/apps/admin',
    emptyOutDir: true,
  },
})

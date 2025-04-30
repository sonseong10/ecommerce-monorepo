// apps/service/vite.config.ts
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: './apps/service', // 경로 변경
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './apps/service/src'),
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: ['.'],
    },
  },
  build: {
    outDir: '../../dist/apps/service',
    emptyOutDir: true,
  },
});

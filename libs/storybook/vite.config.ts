import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 원한다면 경로에 맞게 수정
    },
  },
  build: {
    outDir: '../../../dist/libs/storybook', // 모노레포 기준으로 경로 조정
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyStorybook',
      fileName: (format) => `storybook.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    root: './apps/admin',
    base: '/',
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      fs: {
        allow: ['.'],
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENV),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      outDir: '../../dist/apps/admin',
      emptyOutDir: true,
    },
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'pictorial_messenger',
      filename: 'remoteEntry.js',
      exposes: {
        './widget': './src/index.ts',
      },
      shared: {
        react: {
          requiredVersion: '^18.3.1',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^18.3.1',
          singleton: true,
        },
      },
    }),
  ],
  server: {
    origin: 'http://localhost:3000',
    port: 3000,
  },
  base: 'http://localhost:3000',
  preview: {
    port: 3000,
  },
  build: {
    target: 'chrome89',
    cssCodeSplit: false,
  },
})

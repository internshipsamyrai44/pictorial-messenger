import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'pictorial_messenger',
      filename: 'remoteEntry.js',
      exposes: {
        './DirectWidget': './src/DirectWidget.tsx'
      },
      shared: {
        react: {
          requiredVersion: '^18.3.1',
        },
        'react-dom': {
          requiredVersion: '^18.3.1',
        }
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  server: {
    port: 4173
  },
  preview: {
    port: 4173
  }
});

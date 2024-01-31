import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ['packages/components'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'packages/components/index.ts'),
      name: 'MyMeaninglessButton',
      fileName: (format) => `meaningless-button.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});

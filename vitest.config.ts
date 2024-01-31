import {defineConfig} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*test.{ts,tsx}'],
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['packages/**/*'],
    },
    css: false,
  },
});

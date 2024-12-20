import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.spec.ts'],
    exclude: ['node_modules/**'],
	reporters:'verbose'
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
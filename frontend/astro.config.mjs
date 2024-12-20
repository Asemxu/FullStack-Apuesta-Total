import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

export default defineConfig({
    server: { port: 3000},
    output: 'server',
    integrations: [
        tailwind(),
    ],
    vite: {
        resolve: {
            alias: {
                '@': resolve('./src')
            },
        },
        test: {
            globals: true,
            environment: 'happy-dom',
            setupFiles: './vitest.setup.ts'
        }
    },
    devToolbar: {
        enabled: false
    }
});
// @ts-check
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

export default defineConfig({
    server: { port: 3000},
    output:'server',
    adapter: node({
        mode: "standalone",
    }),
    integrations: [tailwind()],
    vite: {
        resolve: {
            alias: {
                '@': resolve('./src')
            },
        },
    },
    devToolbar: {
        enabled: false
    }
});
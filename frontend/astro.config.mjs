// @ts-check
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react"

export default defineConfig({
    server: { port: 3000},
    output:'server',
    adapter: node({
        mode: "standalone",
    }),
    integrations: [tailwind(),react()],
    devToolbar: {
        enabled: false
    }
});
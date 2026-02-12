import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/thread-2/",
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                studio: resolve(__dirname, 'studio.html'),
                approach: resolve(__dirname, 'approach.html'),
            },
        },
    },
    publicDir: 'public'
})

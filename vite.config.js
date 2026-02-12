import { defineConfig } from "vite";

export default defineConfig({
    base: "/thread-2/",
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public'
})

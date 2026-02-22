import { defineConfig } from 'vite'

export default defineConfig({
    // Using './' makes paths relative, which works for both 
    // github.io/repo-name/ and custom domains.
    base: './',
    build: {
        outDir: 'dist',
    }
})

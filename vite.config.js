import { defineConfig } from 'vite'

export default defineConfig({
    // If you are deploying to a custom domain (like oreocleaning.com), base should be '/'
    // If you are deploying to github.io/repo-name/, base should be '/repo-name/'
    base: '/',
    build: {
        outDir: 'dist',
    }
})

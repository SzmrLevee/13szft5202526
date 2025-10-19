import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: true,
        allowedHosts: ['frontend.vm1.test']
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
        }
    }
})
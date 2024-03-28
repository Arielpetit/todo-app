import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            workbox: {
                clientsClaim: true,
                skipWaiting: true

            },

            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable_icon.png'],
            manifest: {
                name: 'Tchiks Todo app',
                short_name: 'TODO',
                description: 'This todo app will help you keep track on your daily todo activities',
                theme_color: '#becdaf',
                icons: [
                  {
                    src: 'android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                  },
                  {
                    src: 'android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                  },
                  {
                    src: 'android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any'
                  },
                  {
                    src: 'android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable'
                  }
                ],
                screenshots: [
                 {
                   src: 'android-chrome-512x512.png',
                   sizes: '512x512',
                   type: 'image/png'
                 },
                 {
                  src: 'android-chrome-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  form_factor:'wide'
                 }
                ]

            },
            devOptions: {enabled: true}
        })
        , react()

    ]
})
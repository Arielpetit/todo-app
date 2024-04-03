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

            includeAssets: ['favicon.ico'],
            manifest: {
                name: 'My PWA app',
                short_name: 'PWA',
                description: 'my first pwa',
                theme_color: '#becdaf',
                icons: [
                    {
                        src: 'vite.svg',
                        sizes: '32x32',
                        type: 'image/svg'

                    },
                    {
                        src: 'vite.svg',
                        sizes: '32x32',
                        type: 'image/svg',

                    },
                    
                ],
                screenshots: [
                  {
                    src: 'logo512.png',
                    sizes: '512x512',
                    type: 'image/png'
                  },
                  {
                   src: 'logo512.png',
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

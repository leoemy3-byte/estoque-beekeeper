import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Beekeeper Estoque',
        short_name: 'Beekeeper',
        description: 'Sistema de Controle de Estoque',
        theme_color: '#141414',
        background_color: '#0A0A0A',
        display: 'standalone',
        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});

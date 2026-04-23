import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('@apollo/client') || id.includes('graphql')) {
            return 'apollo'
          }

          if (id.includes('@tanstack/react-query')) {
            return 'react-query'
          }

          if (
            id.includes('framer-motion') ||
            id.includes('lucide-react') ||
            id.includes('@phosphor-icons/react')
          ) {
            return 'ui-libs'
          }

          if (id.includes('react') || id.includes('scheduler')) {
            return 'react-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
})

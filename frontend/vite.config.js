import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vanshopfy-backend-h4febxd0fkd3bjc0.uksouth-01.azurewebsites.net', // Your backend URL
        //  target: '"http://localhost:3000', // Your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
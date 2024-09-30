import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: 'html',
    setup: (server) => {
      server.middlewares.use(history({
        rewrites: [
          { from: /\/.*\.(html|js|css|png|jpg|jpeg|gif|svg|ico|json)$/, to: context => context.parsedUrl.pathname }
        ]
      }))
    }
  }
})
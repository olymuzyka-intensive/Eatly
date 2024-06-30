import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://olymuzyka-intensive.github.io/App-Eatly',
  plugins: [react()],  
})

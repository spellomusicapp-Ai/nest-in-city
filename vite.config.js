import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project at github.io/nest-in-city/, not the
  // domain root. Every image/video path is resolved through src/utils/asset.js
  // against import.meta.env.BASE_URL, which this drives, so this now actually
  // takes effect (unlike a bare `base` with hardcoded '/assets/...' strings).
  base: '/nest-in-city/',
  plugins: [react()],
})

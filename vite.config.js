import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' lets the build work on Vercel, GitHub Pages project sites, and Netlify.
export default defineConfig({ plugins: [react()], base: './' })

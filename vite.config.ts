/// <reference types="vitest/config" />
// https://vitest.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Käytä users.metropolia basea vain jos ajat users.metropoliassa. Muuten käytä basea ''.
  base: '/~jespermv/Hybridisovellukset/context/',
  //base: '',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest-setup.js',
  },
})


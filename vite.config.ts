import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import glob from 'unplugin-glob/vite'

export default defineConfig({
  plugins: [solidPlugin(), glob({ dts: true })],
})

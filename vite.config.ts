import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import glob from 'unplugin-glob/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [solidPlugin(), glob({ dts: true }), Inspect()],
})

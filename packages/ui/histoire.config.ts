import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  vite: {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS({
        presets: [presetUno()],
      }),
    ],
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
    },
  },
  tree: {
    groups: [
      {
        id: 'ui',
        title: 'Easy-UI',
      },
    ],
  },
  setupFile: './src/histoire-setup.tsx',
  theme: {
    title: 'My Component Library',
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: '80%',
    },
    responsiveDisabled: true,
    autoPropsDisabled: false,
  },
  plugins: [HstVue()],
})
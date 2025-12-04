import { HstVue } from '@histoire/plugin-vue'
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  // 添加 Histoire 配置
  histoire: {
    vite: {
      server: {
        fs: {
          allow: [
            searchForWorkspaceRoot(process.cwd()),
          ],
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
      title: 'My Component Library', // 你的组件库名称
    },
    defaultStoryProps: {
      layout: {
        type: 'grid',
        width: '80%',
      },
      responsiveDisabled: true,
      autoPropsDisabled: false,
    },
    plugins: [
      HstVue(), // Vue 插件
    ],
  },
})
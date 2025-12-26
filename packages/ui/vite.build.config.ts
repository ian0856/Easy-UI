import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['src/**/*.story.vue', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EasyUI',
      fileName: (format) => `easy-ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', '@vueuse/core', '@iconify/vue', 'lodash', 'zod'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'VueUse',
          '@iconify/vue': 'IconifyVue',
          lodash: '_',
          zod: 'Zod',
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: 'terser',
  },
})


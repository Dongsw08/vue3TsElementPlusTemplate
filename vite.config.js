import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [ElementPlusResolver()],
    }),
    // viteMockServe({
    //   supportTs:true
    // })
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

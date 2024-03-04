import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefix from 'autoprefixer'
import path from 'path'

// 引入插件
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: "gzip",
      threshold: 10240, // 大于 10kb 的文件进行压缩
      verbose: true, // 是否在控制台中输出压缩结果
      ext: ".gz",
      deleteOriginFile: true, // 源文件压缩后是否删除
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefix],
    },
  },
  resolve: {
    alias: {
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  server: {
    port: 5050, // 开发服务器端口
    strictPort: true,
    cors: true, // 默认启用并允许任何源
    hmr: true,
  },
  base: "./", // 开发或生产中使用的基本公共路径
  build: {
    target: "esnext",
    assetsDir: "assets",
    cssCodeSplit: true, // 使用css代码拆分
    sourcemap: false, // 构建后是否生成 source map 文件
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境去掉控制台console
        drop_console: true,
        // 生产环境去掉控制台 debugger
        drop_debugger: true,
        // 删除无法访问的代码, 默认为true
        dead_code: true,
      },
    },
    chunkSizeWarningLimit: 2000, // 区块大小警告限制
    // 资源打包目录 (chunk 分为 index 和 vendor)
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          return "index";
        },
      },
    },
  },
});

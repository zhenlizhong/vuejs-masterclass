import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueRouter(),
        Components({ /* options */ }),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: element => element.startsWith('iconify-icon')
                }
            }
        }),
        AutoImport({
            // targets to transform
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
                /\.md$/, // .md
            ],
            // global imports to register
            imports: [
                // presets
                'vue',
                // 'vue-router'
                VueRouterAutoImports,
                {
                    pinia: ['defineStore', 'storeToRefs', 'acceptHMRUpdate']
                }
            ],
            // Filepath to generate corresponding .d.ts file.
            // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
            // Set `false` to disable.
            // dts: './auto-imports.d.ts',
            dts: true,
            // Include auto-imported packages in Vite's `optimizeDeps` options
            // Recommend to enable
            viteOptimizeDeps: true,
            dirs: ['src/stores']
        }),],
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()]
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
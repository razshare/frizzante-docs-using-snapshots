import { svelte } from "@sveltejs/vite-plugin-svelte"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import { prefix } from "./pages.config.json"
const file = fileURLToPath(import.meta.url)
const dir = path.dirname(file).replace(/\\+/, "/")
const dev = (process.env.DEV ?? "0") === "1"
let base = prefix
let sourcemap: "inline" | boolean = false
if (dev) {
    sourcemap = "inline"
    base = ""
}
// https://vite.dev/config/
export default defineConfig({
    base,
    plugins: [
        tailwindcss(),
        svelte({
            compilerOptions: {
                css: "injected",
            },
        }),
    ],
    resolve: {
        alias: {
            "$lib": `${path.resolve(dir, "./lib")}`,
            "$gen": `${path.resolve(dir, "../.gen")}`,
            "$pages": `${path.resolve(dir, "./pages.config.json")}`,
            "$exports.client": `${path.resolve(dir, "./exports.client.ts")}`,
            "$exports.server": `${path.resolve(dir, "./exports.server.ts")}`,
        },
    },
    build: {
        copyPublicDir: false,
        sourcemap,
        rollupOptions: {
            input: {
                index: "./index.html",
            },
            output: {
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
})

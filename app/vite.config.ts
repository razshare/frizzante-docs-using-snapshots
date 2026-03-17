import { svelte } from "@sveltejs/vite-plugin-svelte"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

const file = fileURLToPath(import.meta.url)
const dir = path.dirname(file).replace(/\\+/, "/")
const dev = (process.env.DEV ?? "0") === "1"

let sourcemap: "inline" | boolean = false
if (dev) {
    sourcemap = "inline"
}

let base: "" | "frizzante-docs-using-snapshots" = "frizzante-docs-using-snapshots"
if (dev) {
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
        },
    },
})

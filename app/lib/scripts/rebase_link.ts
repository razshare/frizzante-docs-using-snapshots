import { IS_BROWSER } from "./core/is_browser"
let local = true
if (IS_BROWSER) {
    local = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
}
export function rebaseLink(path: string): string {
    if (local) {
        return path
    }
    return `/frizzante-docs-using-snapshots/${path}`
}

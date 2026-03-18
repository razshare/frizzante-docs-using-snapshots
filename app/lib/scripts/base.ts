import { prefix } from "$pages"
export function base(path: string): string {
    const dev = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    if (dev) {
        return path
    }
    const suffix = path.replace(/^\/+/, "")
    return `${prefix}/${suffix}`.replace(/^\/+/, "/")
}

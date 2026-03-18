import { prefix } from "$pages"
export function base(path: string, options: { dev: boolean }): string {
    if (options.dev) {
        return path
    }
    const suffix = path.replace(/^\/+/, "")
    return `${prefix}/${suffix}`.replace(/^\/+/, "/")
}

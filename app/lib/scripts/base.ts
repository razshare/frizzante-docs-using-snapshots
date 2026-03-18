import { prefix } from "$pages"
export function base(path: string): string {
    const suffix = path.replace(/^\/+/, "")
    return `${prefix}/${suffix}`.replace(/^\/+/, "/")
}

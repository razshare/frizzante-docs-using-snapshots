import { IS_BROWSER } from "./core/is_browser"

export function base(path: string): string {
    const suffix = path.replace(/^\//, "")
    const value = `./${suffix}`
    if (IS_BROWSER) {
        console.log(value)
    }
    return value
}

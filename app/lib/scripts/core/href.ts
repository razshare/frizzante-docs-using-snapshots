import { IS_BROWSER } from "$lib/scripts/core/is_browser.ts"
import { route } from "$lib/scripts/core/route.ts"
import { swap } from "$lib/scripts/core/swap"
import { swapping } from "$lib/scripts/core/swapping.ts"
import type { View } from "$lib/scripts/core/view"
import { getContext } from "svelte"
export function href(path = ""): {
    href: string
    onclick: (event: MouseEvent) => Promise<boolean>
} {
    path = `/frizzante-docs-using-snapshots${path}`
    if (!IS_BROWSER) {
        return {
            href: path,
            async onclick() {
                return true
            },
        }
    }
    const anchor = document.createElement("a")
    anchor.href = path
    const view = getContext("view") as View<never>
    route(view)
    return {
        href: path,
        async onclick(event: MouseEvent) {
            swapping.active = true
            event.preventDefault()
            try {
                const record = await swap(anchor, view)
                record()
            } catch (error) {
                console.error("swapping failed", error)
            }
            swapping.active = false
            return false
        },
    }
}

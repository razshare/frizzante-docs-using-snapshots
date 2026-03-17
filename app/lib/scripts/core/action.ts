import { IS_BROWSER } from "$lib/scripts/core/is_browser.ts"
import { route } from "$lib/scripts/core/route.ts"
import { swap } from "$lib/scripts/core/swap"
import { swapping } from "$lib/scripts/core/swapping.ts"
import type { View } from "$lib/scripts/core/view"
import { getContext } from "svelte"
export function action(path = ""): {
    action: string
    onsubmit: (event: Event) => Promise<void>
} {
    if (!IS_BROWSER) {
        return { action: path, async onsubmit() {} }
    }
    const view = getContext("view") as View<never>
    route(view)
    return {
        action: path,
        async onsubmit(event: Event) {
            swapping.active = true
            event.preventDefault()
            try {
                const form = event.target as HTMLFormElement
                await swap(form, view).then(function done(record) {
                    record()
                })
            } catch (error) {
                console.error("swapping failed", error)
            }
            swapping.active = false
        },
    }
}

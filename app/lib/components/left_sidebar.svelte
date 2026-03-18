<style>
    :root {
        --left-sidebar-padding: 1rem;
        --left-sidebar-item-padding: 0.5rem;
        --left-sidebar-item-roundness: 1rem;
        --left-sidebar-item-hover-background: rgba(162, 222, 206, 0.1);
    }
    .left-sidebar {
        padding: var(--left-sidebar-padding);
    }
    .left-sidebar-item {
        display: grid;
        grid-template-columns: auto 1fr;
        padding: var(--left-sidebar-item-padding);
        border-radius: var(--left-sidebar-item-roundness);
        grid-template-areas: "left-sidebar-hint left-sidebar-text";
    }
    .left-sidebar-item:hover {
        background-color: var(--left-sidebar-item-hover-background);
    }
    .left-sidebar-hint {
        grid-area: left-sidebar-hint;
    }
    .left-sidebar-text {
        grid-area: left-sidebar-text;
    }
    .icon {
        padding-right: 0.1rem;
        top: 0.1rem;
    }
</style>

<script lang="ts">
    import Icon from "$lib/components/icons/icon.svelte"
    import Link from "$lib/components/links/link.svelte"
    import MenuItem from "$lib/components/menu_item.svelte"
    import { base } from "$lib/scripts/base"
    import type { View } from "$lib/scripts/core/view"
    import { mdiArrowRight, mdiCloudRefresh } from "@mdi/js"
    import { getContext } from "svelte"
    const view = getContext("view") as View<unknown>
    type Item = { text: string; viewName: string; href: string }
</script>

{#snippet item(item: Item)}
    <Link href={item.href}>
        {#snippet children({ pending })}
            <div class="left-sidebar-item">
                <div class="left-sidebar-hint">
                    {#if pending}
                        <div class="icon"><Icon path={mdiCloudRefresh} /></div>
                    {:else if view.name === item.viewName}
                        <div class="icon"><Icon path={mdiArrowRight} /></div>
                    {/if}
                </div>
                <div class="left-sidebar-text">
                    <MenuItem>{item.text}</MenuItem>
                </div>
            </div>
        {/snippet}
    </Link>
{/snippet}

<div class="left-sidebar">
    {@render item({ text: "Get Started", viewName: "GetStarted", href: base("/get_started") })}
    {@render item({ text: "Basics", viewName: "Basics", href: base("/basics") })}
    {@render item({ text: "Web Sockets", viewName: "WebSockets", href: base("/web_sockets") })}
    {@render item({ text: "Server Sent Events", viewName: "ServerSentEvents", href: base("/server_sent_events") })}
    {@render item({ text: "Guards", viewName: "Guards", href: base("/guards") })}
    {@render item({ text: "Views", viewName: "Views", href: base("/views") })}
    {@render item({ text: "Web Standards", viewName: "WebStandards", href: base("/web_standards") })}
    {@render item({ text: "Cli", viewName: "Cli", href: base("/cli") })}
    {@render item({ text: "Type Definitions", viewName: "TypeDefinitions", href: base("/type_definitions") })}
    {@render item({ text: "Snapshots", viewName: "Snapshots", href: base("/snapshots") })}
    {@render item({ text: "Todos Example", viewName: "TodosExample", href: base("/todos_example") })}
    {@render item({ text: "Docker", viewName: "Docker", href: base("/docker") })}
    {@render item({ text: "Issues", viewName: "Issues", href: base("/issues") })}
    {@render item({ text: "Contributing", viewName: "Contributing", href: base("/contributing") })}
    {@render item({ text: "Faq", viewName: "Faq", href: base("/faq") })}
</div>

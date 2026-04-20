<style>
    :root {
        --right-sidebar-gap: 0.5rem;
        --right-sidebar-padding: 1rem;
        --right-sidebar-item-roundness: 1rem;
        --right-sidebar-text: #cecdc3;
        --right-sidebar-text-active: #a2dece;
    }
    .right-sidebar {
        display: grid;
        gap: var(--right-sidebar-gap);
        padding: var(--right-sidebar-padding);
        padding-top: 0;
    }
    .right-sidebar-item {
        border-radius: var(--right-sidebar-item-roundness);
        color: var(--right-sidebar-text);
        text-decoration: none;
        opacity: 0.5;
    }
    .right-sidebar-item:hover {
        text-decoration: none;
        opacity: 1;
    }
    .active {
        opacity: 1;
        color: var(--right-sidebar-text-active);
        font-weight: bold;
    }
</style>

<script lang="ts">
    import MenuItem from "$lib/components/menu_item.svelte"
    import { textToAnchor } from "$lib/scripts/text_to_anchor"
    type Item = { text: string; shift: number }
    type Props = { items: Item[] }
    let { items }: Props = $props()
</script>

{#snippet item(item: Item)}
    {@const id = textToAnchor(item.text)}
    <a href="#{id}" class="right-sidebar-item" style:--right-sidebar-item-shift={item.shift}>
        <MenuItem>{item.text}</MenuItem>
    </a>
{/snippet}

<div class="right-sidebar">
    {#each items as value, index (index)}
        {@render item(value)}
    {/each}
</div>

<style>
    :root {
        --title-text: #a2dece;
    }
    .title {
        display: grid;
        grid-template-areas: "text link";
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1rem;
        grid-area: link;
        display: grid;
        align-items: center;
    }
    .title:hover {
        text-decoration: none;
    }
    .text {
        grid-area: text;
        color: var(--title-text);
    }
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2.2rem;
    }
    h3 {
        font-size: 2rem;
    }
    h4 {
        font-size: 1.7rem;
    }
    h5 {
        font-size: 1.5rem;
    }
    h6 {
        font-size: 1rem;
    }
    .no-margin {
        margin: 0;
    }
</style>

<script lang="ts">
    import { textToAnchor } from "$lib/scripts/text_to_anchor"
    import { mdiLinkVariant } from "@mdi/js"
    import Icon from "./icons/icon.svelte"

    type Props = {
        text: string
        type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
        noMargin?: boolean
    }
    let { text, type: tag = "h1", noMargin = false }: Props = $props()
    let hovered = $state(false)
    let id: string = $derived(textToAnchor(text))

    function typeToSize(tag: string): string {
        switch (tag) {
            case "h1":
                return "2.5rem"
            case "h2":
                return "2.2rem"
            case "h3":
                return "2rem"
            case "h4":
                return "1.7rem"
            case "h5":
                return "1.5rem"
            default:
                return "1rem"
        }
    }

    function onmouseover() {
        hovered = true
    }

    function onfocus() {
        hovered = true
    }

    function onmouseout() {
        hovered = false
    }

    function onblur() {
        hovered = false
    }
</script>

<a class="title" href="#{id}" {onmouseover} {onmouseout} {onfocus} {onblur}>
    <div class="text" style="font-size:{typeToSize(tag)}">
        {#if tag === "h1"}
            <h1 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h1>
        {:else if tag === "h2"}
            <h2 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h2>
        {:else if tag === "h3"}
            <h3 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h3>
        {:else if tag === "h4"}
            <h4 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h4>
        {:else if tag === "h5"}
            <h5 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h5>
        {:else}
            <h6 {id} class:no-margin={noMargin}>
                <span>{text}</span>
            </h6>
        {/if}
    </div>
    <div class="icon">
        {#if hovered}
            <Icon path={mdiLinkVariant} size={typeToSize(tag)} />
        {/if}
    </div>
</a>

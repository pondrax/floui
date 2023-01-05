<script lang="ts">
  import { clsx } from "$lib/utils";

  export let col: boolean = false;
  export let gap: boolean = false;
  export let justifyCenter: boolean = false;

  export let demo: boolean = false;

  let className = "";
  export { className as class };

  $: classes = clsx("flex", className, {
    "flex-col": col,
    "gap-3": gap,
    "justify-center": justifyCenter,
    demo: demo,
  });
</script>

<div class={classes}>
  <slot />
</div>

<style>
  :global(.demo) {
    background-image: radial-gradient(hsl(var(--b1)) 10%, transparent 30%),
      radial-gradient(hsl(var(--b1)) 10%, transparent 30%);
    background-position: 0px 0px, 0.5em 0.5em;
    background-size: 0.25em 0.25em;
    border-radius: 0 0.5em 0.5em 0.5em;
    margin-top: -2px;
    background-color: hsl(var(--b3));
    justify-content: center;
    border: 2px solid hsla(var(--b3) / var(--tw-bg-opacity, 1));
    overflow: auto;
  }
</style>

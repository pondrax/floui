<script lang="ts">
  import { getContext } from "svelte";
  import { TABS } from "./tabs.svelte";

  // @ts-ignore
  const { registerTab, selectedTab } = getContext(TABS);
  export let title = "Tab Title";
  let className: string = "";
  export { className as class };
  registerTab(title, className);
</script>

{#if $selectedTab == title}
  <slot />
{/if}

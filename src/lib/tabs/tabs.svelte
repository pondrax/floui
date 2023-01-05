<script context="module">
  export const TABS = {};
</script>

<script lang="ts">
  import { setContext, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import { clsx } from "$lib/utils";

  export let bordered: boolean = false;
  export let lifted: boolean = false;
  export let boxed: boolean = false;

  let className = "";
  export { className as class };

  $: classes = clsx("tab", className, {
    "tab-bordered": bordered,
    "tab-lifted": lifted,
    "tab-boxed": boxed,
  });
  let tabs: any[] = [];
  const selectedTab = writable(null);

  setContext(TABS, {
    registerTab: (title: null, className:any) => {
      tabs = [...tabs, title];
      selectedTab.update((current) => current || title);

      onDestroy(() => {
        tabs = tabs.filter((t) => t !== title);
        selectedTab.update((current) =>
          current === title ? title || tabs[tabs.length - 1] : current
        );
      });
    },

    selectedTab,
  });
</script>

<div>
  <div class="tabs">
    {#each tabs as title}
      <button
        class={classes}
        class:tab-active={$selectedTab == title}
        on:click={() => selectedTab.set(title)}
      >
        {title}
      </button>
    {/each}
  </div>
  <div class="panel">
    <slot />
  </div>
</div>

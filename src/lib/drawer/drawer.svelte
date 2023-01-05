<script lang="ts">
  import { clsx } from "$lib/utils";

  let className = "";
  export { className as class };

  export let open: boolean = false;
  let toggle: HTMLInputElement;
  $: if (toggle) {
    toggle.checked = open;
  }

  export let end: boolean = false;
  export let mobile: boolean = false;

  export let compact: boolean = false;
  export let width: string = "w-72";

  $: classes = clsx("drawer", "rounded-lg", className, {
    "drawer-end": end,
    "drawer-mobile": mobile,
    "drawer-open": open,
  });
  $: menuClasses = clsx(
    "menu",
    "p-2",
    "bg-base-100",
    "text-base-content",
    width,
    {
      "menu-compact": compact,
    }
  );
</script>

<div class={classes}>
  <input bind:this={toggle} type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <slot />
  </div>
  <div class="drawer-side">
    <button on:click={() => (open = false)} class="drawer-overlay" />
    <ul class={menuClasses}>
      <slot name="menu" />
    </ul>
  </div>
</div>
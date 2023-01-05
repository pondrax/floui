<script lang="ts">
  import { clsx } from "$lib/utils";

  let className = "";
  export { className as class };

  export let end: boolean = false;
  export let top: boolean = false;
  export let bottom: boolean = false;
  export let left: boolean = false;
  export let right: boolean = false;
  export let hover: boolean = false;
  export let open: boolean = false;

  export let compact: boolean = false;
  export let width: string = "w-64";

  $: classes = clsx("dropdown", className, {
    "dropdown-end": end,
    "dropdown-top": top,
    "dropdown-bottom": bottom,
    "dropdown-left": left,
    "dropdown-right": right,
    "dropdown-hover": hover,
    "dropdown-open": open,
  });

  $: contentClasses = clsx(
    "dropdown-content",
    "shadow",
    "bg-base-100",
    "rounded-box",
    "p-2",
    "menu",
    width,
    {
      "menu-compact": compact,
    }
  );
</script>

<div class={classes}>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <label tabindex="0"><slot name="label" /></label>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class={contentClasses}>
    <li><slot /></li>
    <!-- <li><a>Item 2</a></li> -->
  </ul>
</div>

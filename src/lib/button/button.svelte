<script lang="ts">
  import { clsx } from "$lib/utils";

  let className = "";
  export { className as class };

  export let href: string = "";
  export let type: "button" | "submit" | "reset" | null | undefined = "button";

  export let unstyled: boolean = false;

  export let primary: boolean = false;
  export let secondary: boolean = false;
  export let accent: boolean = false;
  export let info: boolean = false;
  export let success: boolean = false;
  export let warning: boolean = false;
  export let error: boolean = false;
  export let ghost: boolean = false;
  export let link: boolean = false;
  export let outline: boolean = false;
  export let active: boolean = false;

  export let glass: boolean = false;
  export let loading: boolean = false;

  // Responsive use class
  export let tiny: boolean = false;
  export let medium: boolean = false;
  export let large: boolean = false;
  $: small = !(tiny || medium || large);

  export let gap: boolean = false;
  export let wide: boolean = false;
  export let block: boolean = false;
  export let circle: boolean = false;
  export let square: boolean = false;

  $: classes = clsx(className, {
    glass,
    loading,
    "btn":!unstyled,
    "gap-2": !loading && gap,
    "btn-primary": primary,
    "btn-secondary": secondary,
    "btn-accent": accent,
    "btn-info": info,
    "btn-success": success,
    "btn-warning": warning,
    "btn-error": error,
    "btn-ghost": ghost,
    "btn-link": link,
    "btn-outline": outline,
    "btn-active": active,
    "btn-wide": wide,
    "btn-block": block,
    "btn-circle": circle,
    "btn-square": square,
    "btn-xs": tiny,
    "btn-sm": small,
    "btn-md": medium,
    "btn-lg": large,
  });
</script>

{#if href}
  <a {href} class={classes} {...$$restProps} on:click>
    <slot />
  </a>
{:else}
  <button class={classes} {...$$restProps} {type} on:click>
    <slot />
  </button>
{/if}

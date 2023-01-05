<script lang="ts">
  import { browser } from "$app/environment";
  import { Button } from "$lib/button";

  export let content: string = "";
  let tip: "Copy" | "Copied" = "Copy";

  $: lines = content
    .trim()
    .split("\n")
    .map((l) => l.trim());

  const copy = () => {
    if (browser && navigator) {
      navigator.clipboard.writeText(lines.join("\n"));
      tip = "Copied";
      setTimeout(() => (tip = "Copy"), 5000);
    }
  };
</script>

<div class="mockup-code text-sm relative">
  <div
    class="tooltip tooltip-left tooltip-accent absolute top-3 right-3"
    data-tip={tip}
  >
    <Button tiny on:click={copy}>Copy</Button>
  </div>
  {#each lines as line, i}
    <pre data-prefix={i + 1}><code>{line}</code></pre>
  {/each}
</div>

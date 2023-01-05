<script lang="ts">
  import * as UI from "$lib";
  // import { Button } from "@pondra/kiteui";

  let glass: boolean = false;
</script>

<!-- <h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p> -->

{glass}
<UI.Button primary class="coba" {glass}>Coba</UI.Button>
<br />
<br />
<br />
<br />
<br />
<button on:click={() => glass =!glass}>toggle</button>
<!-- <Button bind:glass on:click={() => console.log("click")}>Test</Button> -->

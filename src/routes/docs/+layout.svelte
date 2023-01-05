<script lang="ts">
  import { Button, Drawer, Dropdown, Flex } from "$lib";
  import { theme } from "$lib/stores";

  let sidebarOpen = true;
</script>

<Drawer bind:open={sidebarOpen} mobile compact>
  <main class="p-2">
    <div class="relative p-5 bg-base-200 min-h-screen rounded-2xl">
      <Flex class="justify-between sticky top-0 left-0 right-0 z-10">
        <div>
          <Button
            on:click={() => (sidebarOpen = !sidebarOpen)}
            ghost
            class="lg:hidden"
          >
            <i class="ri-menu-line" />
          </Button>
        </div>
        <div>
          <Dropdown compact end width="w-32">
            <Button ghost slot="label"><i class="ri-sun-line" /></Button>
            <Button unstyled on:click={() => ($theme = "light")}>Light</Button>
            <Button unstyled on:click={() => ($theme = "dark")}>Dark</Button>
            <Button unstyled on:click={() => ($theme = "cupcake")}
              >Cupcake</Button
            >
          </Dropdown>
        </div>
      </Flex>
      <slot />
    </div>
  </main>
  <svelte:fragment slot="menu">
    <li class="menu-title text-center p-5">
      <div>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="alt" />
          </div>
        </div>
        <h1 class="text-xl">Floui</h1>
      </div>
    </li>
    <li></li>
    <li class="menu-title"><span>Actions</span></li>
    <li><a href="/docs/button">Button</a></li>
    <li><a href="/docs/drawer">Drawer</a></li>
    <li><a href="/docs/modal">Modal</a></li>
    <li><a href="/docs/swap">Swap</a></li>
    <li></li>
    <li class="menu-title"><span>Data Display</span></li>
    <li><a href="/docs/dropdown">Dropdown</a></li>
  </svelte:fragment>
</Drawer>

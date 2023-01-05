<script>
  import { Button, Code, Drawer, Flex, Tab, Tabs } from "$lib";
  let open = false;
</script>

<Flex col gap>
  <div>
    <h3># Drawer</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Drawer bind:open compact class="h-96">
            <Button on:click={() => (open = true)}>Open Drawer</Button>
            <svelte:fragment slot="menu">
              <li>
                <img
                  class="avatar"
                  src="https://api.lorem.space/image/face?w=150&h=150"
                  alt="avatar"
                />
              </li>
              <li>
                <Button unstyled>Menu 1</Button>
              </li>
              <li>
                <Button unstyled>Menu 2</Button>
              </li>
            </svelte:fragment>
          </Drawer>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Dropdown>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>`}
        />
      </Tab>
    </Tabs>
  </div>
</Flex>

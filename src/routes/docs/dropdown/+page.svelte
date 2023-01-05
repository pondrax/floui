<script>
  import { Button, Code, Dropdown, Flex, Tab, Tabs } from "$lib";
</script>

<Flex col gap>
  <div>
    <h3># Dropdown</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pb-32">
          <Dropdown>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
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

  <div>
    <h3># Dropdown Compact</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pb-24">
          <Dropdown compact>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
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
  
  <div>
    <h3># Dropdown End</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pb-32">
          <Dropdown end>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Dropdown end>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Dropdown Top</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pt-32">
          <Dropdown top>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Dropdown top>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>`}
        />
      </Tab>
    </Tabs>
  </div>

  
  <div>
    <h3># Dropdown Left</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pb-24">
          <Dropdown left>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Dropdown left>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>`}
        />
      </Tab>
    </Tabs>
  </div>
  <div>
    <h3># Dropdown Right</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3 pb-24">
          <Dropdown right>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Dropdown right>
            <Button slot="label">Label</Button>
            <div>Item a</div>
            <div>Item b</div>
          </Dropdown>`}
        />
      </Tab>
    </Tabs>
  </div>
</Flex>

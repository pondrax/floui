<script>
  import { Button, Code, Flex, Tab, Tabs } from "$lib";
</script>

<Flex col gap>
  <div>
    <h3># Buttons with brand colors</h3>
    <Tabs lifted>
      <Tab title="Preview" class="bg-gray-100">
        <Flex gap demo class="p-3">
          <Button>Neutral</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button accent>Accent</Button>
          <Button ghost>Ghost</Button>
          <Button link>Link</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button>Neutral</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button accent>Accent</Button>
          <Button ghost>Ghost</Button>
          <Button link>Link</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Buttons with state colors</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button info>Info</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button info>Info</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Buttons with outline colors</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button outline>Neutral</Button>
          <Button outline primary>Primary</Button>
          <Button outline secondary>Secondary</Button>
          <Button outline accent>Accent</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button outline>Neutral</Button>
            <Button outline primary>Primary</Button>
            <Button outline secondary>Secondary</Button>
            <Button outline accent>Accent</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Outline with state colors</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button outline info>Info</Button>
          <Button outline success>Success</Button>
          <Button outline warning>Warning</Button>
          <Button outline error>Error</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button outline>Neutral</Button>
            <Button outline primary>Primary</Button>
            <Button outline secondary>Secondary</Button>
            <Button outline accent>Accent</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Button sizes</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button tiny>Tiny</Button>
          <Button>Small (default)</Button>
          <Button medium>Medium</Button>
          <Button large>Large</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button outline>Neutral</Button>
            <Button outline primary>Primary</Button>
            <Button outline secondary>Secondary</Button>
            <Button outline accent>Accent</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Responsive button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button class="btn-xs md:btn-lg">Responsive class</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button outline>Neutral</Button>
            <Button outline primary>Primary</Button>
            <Button outline secondary>Secondary</Button>
            <Button outline accent>Accent</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Wide button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button wide>Wide</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code content={`<Button wide>Wide</Button>`} />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Block button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button block>Block</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code content={`<Button block>Block</Button>`} />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Disabled button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button disabled>Disabled</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code content={`<Button disabled>Disabled</Button>`} />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Shape button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button square>&times;</Button>
          <Button circle>&times;</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button square>&times;</Button>
            <Button circle>&times;</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Loading button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button loading />
          <Button gap loading>Loading</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button loading />
            <Button gap loading>Loading</Button>`}
        />
      </Tab>
    </Tabs>
  </div>

  <div>
    <h3># Custom icon button</h3>
    <Tabs lifted>
      <Tab title="Preview">
        <Flex gap demo class="p-3">
          <Button gap><i class="ri-home-line" /> Home</Button>
          <Button gap><i class="ri-pencil-line" /> Pencil</Button>
        </Flex>
      </Tab>
      <Tab title="Code">
        <Code
          content={`<Button gap><i class="ri-home-line" /> Home</Button>
          <Button gap><i class="ri-pencil-line" /> Pencil</Button>`}
        />
      </Tab>
    </Tabs>
  </div>
</Flex>

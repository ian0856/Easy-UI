<script setup lang="ts">
import { EyButton } from './index'

</script>

<template>
  <Story title="Button" group="ui">
    <Variant title="Primary">
      <EyButton />
    </Variant>
    <Variant title="Outlined">
      <EyButton variant="outlined" />
    </Variant>
    <Variant title="Text">
      <EyButton variant="text" />
    </Variant>
    <Variant title="Custom">
      <EyButton class="bg-red-500 color-yellow" text="Custom" />
    </Variant>
  </Story>
</template>
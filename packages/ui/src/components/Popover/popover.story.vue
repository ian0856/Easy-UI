<script setup lang="ts">
  import { EyPopover } from './index'
  import { ref } from 'vue'
  import { EyButton } from '../Button'
  const modelValue = ref(false)
</script>

<template>
  <Story title="Popover" group="ui">
    <Variant title="Default">
      <EyPopover v-model="modelValue">
        <template #trigger>
          <EyButton text="Open Popover" />
        </template>
        <template #content>
          <p>This is a popover content</p>
          <p>This is a popover content</p>
        </template>
      </EyPopover>
    </Variant>
  </Story>
</template>
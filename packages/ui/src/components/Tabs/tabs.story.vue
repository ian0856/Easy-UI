<script setup lang="ts">
  import { EyTabs } from './index'
  import { ref } from 'vue'

  const modelValue = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1', content: 'Content 1' },
    { label: 'Option 2', value: '2', content: 'Content 2' },
    { label: 'Option 3', value: '3', content: 'Content 3' },
  ])
</script>

<template>
  <Story title="Tabs" group="ui">
    <Variant title="Default">
      <EyTabs v-model="modelValue" :options="options" />
    </Variant>
    <Variant title="Card">
      <EyTabs v-model="modelValue" :options="options" type="card" />
    </Variant>
  </Story>
</template>
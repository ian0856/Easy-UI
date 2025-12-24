<script setup lang="ts">
  import { EyTreeSelection } from './index'
  import { ref } from 'vue'

  const modelValue = ref([])
  const options = ref([
    { label: 'Option 1', value: '1', children: [
      { label: 'Option 1-1', value: '1-1' },
      { label: 'Option 1-2', value: '1-2' },
      { label: 'Option 1-3', value: '1-3' },
    ] },
    { label: 'Option 2', value: '2', children: [
      { label: 'Option 2-1', value: '2-1', children: [
        { label: 'Option 2-1-1', value: '2-1-1' },
        { label: 'Option 2-1-2', value: '2-1-2' },
        { label: 'Option 2-1-3', value: '2-1-3' },
      ] },
      { label: 'Option 2-2', value: '2-2' },
      { label: 'Option 2-3', value: '2-3' },
    ] },
  ])
</script>

<template>
  <Story title="TreeSelection" group="ui">
    <Variant title="Default">
      <EyTreeSelection v-model="modelValue" :options="options" />
    </Variant>
  </Story>
</template>
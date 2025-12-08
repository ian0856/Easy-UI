<script setup lang="ts">
  import { EyCheckbox } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
</script>

<template>
  <Story title="Checkbox" group="ui">
    <Variant title="Default">
      <EyCheckbox v-model="value" :options="options" direction="horizontal" />
    </Variant>
    <Variant title="Vertical">
      <EyCheckbox v-model="value" :options="options" direction="vertical" />
    </Variant>
  </Story>
</template>
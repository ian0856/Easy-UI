<script setup lang="ts">
  import { EySelect } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
</script>

<template>
  <Story title="Select" group="ui">
    <Variant title="Default">
      <EySelect v-model="value" :options="options" />
    </Variant>
  </Story>
</template>
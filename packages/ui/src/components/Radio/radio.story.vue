<script setup lang="ts">
  import { EyRadio } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
</script>

<template>
  <Story title="Radio" group="ui">
    <Variant title="Default">
      <EyRadio v-model="value" :options="options" />
    </Variant>
    <Variant title="Outlined">
      <EyRadio v-model="value" :options="options" variant="outlined" />
    </Variant>
    <Variant title="Card">
      <EyRadio v-model="value" :options="options" variant="card" />
    </Variant>
  </Story>
</template>
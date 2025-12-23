<script setup lang="ts">
  import { EyMenu } from './index'
  import { ref } from 'vue'

  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
  const values = ref('1')

  const multiple_options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ])
  const values2 = ref(['2', '3'])
</script>

<template>
  <Story title="Menu" group="ui">
    <Variant title="Default">
      <EyMenu :options="options" v-model="values" />
    </Variant>
    <Variant title="Multiple">
      <EyMenu :options="multiple_options" v-model="values2" multiple />
    </Variant>
  </Story>
</template>
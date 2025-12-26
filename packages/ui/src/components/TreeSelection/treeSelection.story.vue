<script setup lang="ts">
  import { EyTreeSelection } from './index'
  import { EyTag } from '../Tag'
  import { ref } from 'vue'

  const modelValue = ref([])
  const options = ref([
    { label: 'Option 1', value: '1', children: [
      { label: 'Option 1-1', value: '1-1' },
      { label: 'Option 1-2', value: '1-2' },
      { label: 'Option 1-3', value: '1-3' },
      { label: 'Option 1-4', value: '1-4', disabled: true },
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
      <div class="grid grid-cols-2 gap-8px">
        <EyTreeSelection v-model="modelValue" :options="options" />
        <div class="flex flex-col gap-8px">
          <p class="text-16px font-bold">Selected Values:</p>
          <div class="flex flex-wrap gap-8px">
            <div v-for="item in modelValue" :key="item">
              <EyTag :text="item" />
            </div>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
<script setup lang="ts">
  import { EyProgress } from './index'
  import { EyButton } from '../Button'
  import { ref } from 'vue'

  const modelValue = ref(0)
  const addPercent = () => {
   const interval = setInterval(() => {
    if (modelValue.value >= 100) {
      clearInterval(interval)
      return
    }
    modelValue.value += 10
   }, 100)
  }
  const subtractPercent = () => {
    const interval = setInterval(() => {
      if (modelValue.value <= 0) {
        clearInterval(interval)
        return
      }
      modelValue.value -= 10
    }, 100)
  }
</script>

<template>
  <Story title="Progress" group="ui">
    <Variant title="Default">
      <EyProgress :modelValue="25" />
    </Variant>
    <Variant title="Show Percent">
      <EyProgress :modelValue="50" showPercent />
    </Variant>
    <Variant title="Custom Color">
      <EyProgress :modelValue="75" color="red" showPercent />
    </Variant>
    <Variant title="Update Percent">
      <div class="flex items-center gap-8px">
        <EyProgress :modelValue="modelValue" />
        <EyButton :disabled="modelValue >= 100" text="Add" @click="addPercent" />
          <EyButton :disabled="modelValue <= 0" text="Subtract" @click="subtractPercent" />
      </div>
    </Variant>
  </Story>
</template>
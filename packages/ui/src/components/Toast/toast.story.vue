<script setup lang="ts">
  import { EyToast } from './index'
  import { ref } from 'vue'
  import { EyButton } from '../Button'

  const modelValue = ref(false)
</script>

<template>
  <Story title="Toast" group="ui">
    <Variant title="Default">
      <EyButton text="打开Toast" @click="modelValue = true" />
      <EyToast v-model="modelValue"/>
    </Variant>
  </Story>
</template>
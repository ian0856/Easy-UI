<script setup lang="ts">
  import { EyToast } from './index'
  import { ref } from 'vue'
  import { EyButton } from '../Button'

  const modelValue = ref(false)
  const message = '我是toast内容'
</script>

<template>
  <Story title="Toast" group="ui">
    <Variant title="Default">
      <EyButton text="打开Toast" @click="modelValue = true" />
      <EyToast v-model="modelValue" :message="message" />
    </Variant>
  </Story>
</template>
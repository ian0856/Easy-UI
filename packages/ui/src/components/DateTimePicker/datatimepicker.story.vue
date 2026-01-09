<script setup lang="ts">
  import { EyDateTimePicker } from './index'
  import { ref } from 'vue'

  const modelValue = ref('')
</script>

<template>
  <Story title="DateTimePicker" group="ui">
    <Variant title="Default">
      <EyDateTimePicker />
    </Variant>
  </Story>
</template>
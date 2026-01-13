<script setup lang="ts">
  import { EyDatePicker } from './index'
  import { ref } from 'vue'
  import dayjs from 'dayjs'

  const modelValue = ref(dayjs('2026-05-13').format('YYYY-MM-DD'))
</script>

<template>
  <Story title="DatePicker" group="ui">
    <Variant title="Default">
      <EyDatePicker v-model="modelValue" />
    </Variant>
  </Story>
</template>
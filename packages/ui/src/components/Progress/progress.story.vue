<script setup lang="ts">
  import { EyProgress } from './index'
  import { ref } from 'vue'

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
  </Story>
</template>
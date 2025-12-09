<script setup lang="ts">
  import { EyCollapse } from './index'
  import { EyButton } from '../Button'
  import { ref } from 'vue'

  const modelValue = ref(false)
  const customModelValue = ref(false)

  const customData = ref([
   '展示元素1',
   '展示元素2'
  ])
</script>

<template>
  <Story title="Collapse" group="ui">
    <Variant title="Default">
      <EyCollapse v-model="modelValue" />
    </Variant>
    <Variant title="Custom">
      <EyCollapse v-model="customModelValue">
        <template #header>
          <div class="flex items-center gap-20px">
            <EyButton text="action" @click="customModelValue = !customModelValue" />
            <span>custom header</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-8px">
            <div v-for="(item, index) in customData" :key="index">
              <span>{{ index + 1 }}. {{ item }}</span>
            </div>
            <EyButton text="添加元素" @click="customData.push('新元素' + (customData.length + 1))" />
          </div>
        </template>
      </EyCollapse>
    </Variant>
  </Story>
</template>
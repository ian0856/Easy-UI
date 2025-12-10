const __resolved__virtual_storySource_srcComponentsBadgeBadgeStoryVue = `<script setup lang="ts">
  import { EyBadge } from './index'
  import { EyButton } from '../Button'
  import { ref } from 'vue'

  const value1 = ref(true)
  const value2 = ref(true)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
<\/script>

<template>
  <Story title="Badge" group="ui">
    <Variant title="Default">
      <div class="flex gap-20px" style="overflow: visible; padding: 10px;">
        <EyBadge :value="value1">
          <EyButton text="Default Color" @click="value1 = !value1" />
        </EyBadge>
        <EyBadge :value="value1" color="hotpink">
          <EyButton text="Hotpink Color" @click="value1 = !value1" />
        </EyBadge>
        <EyBadge :value="value1" color="pink">
          <EyButton text="Pink Color" @click="value1 = !value1" />
        </EyBadge>
      </div>
    </Variant>
    <Variant title="Four positions">
      <div class="flex gap-20px items-center" style="overflow: visible; padding: 10px;">
        <EyBadge text="99+" position="top-right" :value="value2">
          <EyButton text="Top Right" @click="value2 = !value2" />
        </EyBadge>
        <EyBadge text="123" position="bottom-left" :value="value3">
          <EyButton text="Top Left" @click="value3 = !value3" />
        </EyBadge>
        <EyBadge text="456" position="top-left" :value="value4">
          <EyButton text="Bottom Right" @click="value4 = !value4" />
        </EyBadge>
        <EyBadge text="789" position="bottom-right" :value="value5">
          <EyButton text="Bottom Left" @click="value5 = !value5" />
        </EyBadge>
      </div>
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsBadgeBadgeStoryVue as default
};

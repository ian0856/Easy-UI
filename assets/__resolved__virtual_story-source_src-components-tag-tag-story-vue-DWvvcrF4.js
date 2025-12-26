const __resolved__virtual_storySource_srcComponentsTagTagStoryVue = `<script setup lang="ts">
  import { EyTag } from './index'

  const handleClose = (text: string) => {
    console.log('close', text)
  }
<\/script>

<template>
  <Story title="Tag" group="ui">
    <Variant title="Default">
      <div class="flex gap-20px">
        <EyTag text="Default" />
      </div>
    </Variant>
    <Variant title="Closable">
      <div class="flex gap-20px">
        <EyTag text="Closable" closable @close="handleClose" />
      </div>
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsTagTagStoryVue as default
};

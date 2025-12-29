<script lang="ts" setup>
  import { ref } from 'vue';
import { EyTable } from './index'
  const columns = [
    {
      title: 'Name',
      key: 'name',
      width: '100px',
    },
    {
      title: 'Age',
      key: 'age',
      width: '100px',
    },
    {
      title: 'Address',
      key: 'address',
      width: '100px',
    },
  ]

  const data = [
    {
      name: 'John',
      age: 20,
      address: 'New York',
    },
    {
      name: 'Jane',
      age: 21,
      address: 'Los Angeles',
    },
    {
      name: 'Jim',
      age: 22,
      address: 'Chicago',
    },
  ]

  const selectedKeys = ref([])
</script>

<template>
  <Story title="Table" group="ui">
    <Variant title="Default">
      <EyTable :columns="columns" :data="data" :selectable="true" v-model:selected-keys="selectedKeys"/>
    </Variant>
  </Story>
</template>
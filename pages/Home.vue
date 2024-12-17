<template>
  <div>
    <h1>Главная</h1>
    <NuxtLink :to="{ name: 'catalog' }">Каталог</NuxtLink>

    <div>
      <p>API:</p>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data} = await useFetch('/api/hello')

</script>

<style scoped lang="scss">

</style>
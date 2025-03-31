<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Project {{ route.params }}</h1>
  </div>
</template>

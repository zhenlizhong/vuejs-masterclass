<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError({ error: 'Page not found, Who are you??', customCode: 404 })
</script>

<template>
  <div></div>
</template>

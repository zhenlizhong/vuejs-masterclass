<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError()
</script>

<template>
  <AppErrorPage />
</template>

<script setup lang="ts">
import { Button } from '@/lib/registry/new-york/ui/button'
import { LoaderCircle } from 'lucide-vue-next'
import { ref } from 'vue'

const isLoading = ref(false)

function handleClick() {
  isLoading.value = true
  // 模拟异步操作
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <Button
    :disabled="isLoading"
    :data-loading="isLoading"
    class="group relative disabled:opacity-100"
    @click="handleClick"
  >
    <span :class="{ 'text-transparent': isLoading }">Click me</span>
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <LoaderCircle
        class="animate-spin"
        :size="16"
        :stroke-width="2"
        aria-hidden="true"
      />
    </div>
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import { SparklesIcon } from 'lucide-vue-next'
</script>

<template>
  <Button variant="outline">
    Button
    <SparklesIcon
      class="-me-1 ms-2 opacity-60"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>

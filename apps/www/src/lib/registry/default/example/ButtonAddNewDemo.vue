<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/Button'
import { PlusIcon } from 'lucide-vue-next'
</script>

<template>
  <Button variant="outline" class="aspect-square max-sm:p-0">
    <PlusIcon
      class="opacity-60 sm:-ms-1 sm:me-2"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
    <span class="max-sm:sr-only">Add new</span>
  </Button>
</template>

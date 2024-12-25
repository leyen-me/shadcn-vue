<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/Button'
import { PlusIcon } from 'lucide-vue-next'
</script>

<template>
  <Button class="rounded-full" variant="outline" size="icon" aria-label="Add new item">
    <PlusIcon :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>

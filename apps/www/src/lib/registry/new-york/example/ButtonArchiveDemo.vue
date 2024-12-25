<script setup lang="ts">
import { Button } from '@/lib/registry/new-york/ui/button'
// Dependencies: pnpm install lucide-vue-next
import { Archive } from 'lucide-vue-next'
</script>

<template>
  <Button>
    <Archive class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import { ChevronDownIcon } from 'lucide-vue-next'
</script>

<template>
  <Button>
    Button
    <ChevronDownIcon
      class="-me-1 ms-2 opacity-60"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>

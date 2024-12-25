<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import { XIcon } from 'lucide-vue-next'
</script>

<template>
  <Button variant="secondary">
    <XIcon class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
  </Button>
</template>

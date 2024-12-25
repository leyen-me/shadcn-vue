<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import { LoaderCircleIcon } from 'lucide-vue-next'
</script>

<template>
  <Button disabled>
    <LoaderCircleIcon
      class="-ms-1 me-2 animate-spin"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
    Button
  </Button>
</template>

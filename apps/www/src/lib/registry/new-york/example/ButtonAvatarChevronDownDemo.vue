<script setup lang="ts">
import { Button } from '@/lib/registry/new-york/ui/button'
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
    <img
      class="rounded-full w-[40px] h-[40px]"
      src="/avatars/01.png"
      alt="Profile image"
      aria-hidden="true"
    >
    <ChevronDown
      :size="16"
      :stroke-width="2"
      class="ms-2 opacity-60"
      aria-hidden="true"
    />
  </Button>
</template>

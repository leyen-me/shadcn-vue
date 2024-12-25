<script setup lang="ts">
import { Button } from '@/lib/registry/new-york/ui/Button'
import { PlusIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const open = ref(false)

function handleClick() {
  open.value = !open.value
}
</script>

<template>
  <Button
    class="group rounded-full"
    variant="outline"
    size="icon"
    :aria-expanded="open"
    :aria-label="open ? 'Close menu' : 'Open menu'"
    @click="handleClick"
  >
    <PlusIcon
      class="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>

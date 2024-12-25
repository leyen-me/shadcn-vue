<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/lib/registry/default/ui/tooltip'
import { PlusIcon } from 'lucide-vue-next'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="icon" aria-label="Add new item">
          <PlusIcon :size="16" :stroke-width="2" aria-hidden="true" />
        </Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">
        Tooltip
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Button } from '@/lib/registry/default/ui/button'
import { useConfigStore } from '@/stores/config'
import { useClipboard } from '@vueuse/core'
import { Copy } from 'lucide-vue-next'
import MagicString from 'magic-string'
import { computed, ref, watch } from 'vue'
import { highlight } from '../config/shiki'
import ComponentLoader from './ComponentLoader.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  name: string
  align?: 'center' | 'start' | 'end'
}>(), { align: 'center' })

const { style, codeConfig } = useConfigStore()

const rawString = ref('')
const codeHtml = ref('')
const transformedRawString = computed(() => transformImportPath(rawString.value))

function transformImportPath(code: string) {
  const s = new MagicString(code)
  s.replaceAll(`@/lib/registry/${style.value}`, codeConfig.value.componentsPath)
  s.replaceAll(`@/lib/utils`, codeConfig.value.utilsPath)
  return s.toString()
}

watch([style, codeConfig], async () => {
  try {
    rawString.value = await import(`../../../src/lib/registry/${style.value}/example/${props.name}.vue?raw`).then(res => res.default.trim())
    codeHtml.value = highlight(transformedRawString.value, 'vue')
  }
  catch (err) {
    console.error(err)
  }
}, { immediate: true, deep: true })

const { copy, copied } = useClipboard()
</script>

<template>
  <ComponentLoader v-bind="$attrs" :key="style" :name="name" :type-name="'example'" />
  <Button class="copy-button" variant="outline" size="icon" @click="copy(transformedRawString)">
    <Copy class="w-4 h-4" />
  </Button>
</template>

<style scoped>
.copy-button {
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

li:hover .copy-button {
  opacity: 1;
}
</style>

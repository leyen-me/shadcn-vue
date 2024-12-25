<script setup lang="ts">
import StyleSwitcher from './StyleSwitcher.vue'
</script>

<template>
  <StyleSwitcher />
  <ul>
    <slot />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 auto;
}

@media (min-width: 768px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>

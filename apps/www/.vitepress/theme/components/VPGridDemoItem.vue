<template>
  <li>
    <slot />
  </li>
</template>

<style scoped>
li {
  list-style: none;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: -1px;
  margin-bottom: -1px;
  position: relative;
  margin-top: 0px !important;
}

li:nth-last-child(-n + 1) {
  border-bottom: none;
}

@media screen and (max-width: 767px) {
  li:nth-child(n) {
    border-right: none;
  }
}

@media screen and (min-width: 768px) {
  li:nth-child(2n) {
    border-right: none;
  }

  li:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}
</style>

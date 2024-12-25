/* eslint-disable */
// @ts-nocheck
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    ComponentPreview: typeof import('../.vitepress/theme/components/ComponentPreview.vue')['default']
    SimpleComponentPreview: typeof import('../.vitepress/theme/components/SimpleComponentPreview.vue')['default']
  }
}
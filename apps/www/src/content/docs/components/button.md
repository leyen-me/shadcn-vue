---
title: Button
description: Displays a button or a component that looks like a button.
---

<ComponentPreview name="ButtonDemo" />

## Installation

<TabPreview name="CLI">
  <template #CLI>

```bash
npx shadcn-vue@latest add button
```
</template>

  <template #Manual>

<Steps>

### Copy and paste the following code into your project

```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
  ```

  </Steps>
  </template>
</TabPreview>

## Usage

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Button</Button>
</template>
```

<!-- ## Examples

### Primary

<ComponentPreview name="ButtonDemo" />

### Secondary

<ComponentPreview name="ButtonSecondaryDemo" />

### Destructive

<ComponentPreview name="ButtonDestructiveDemo" />

### Outline

<ComponentPreview name="ButtonOutlineDemo" />

### Ghost

<ComponentPreview name="ButtonGhostDemo" />

### Link

<ComponentPreview name="ButtonLinkDemo" />

### Icon

<ComponentPreview name="ButtonIconDemo" />

### With Icon

<ComponentPreview name="ButtonWithIconDemo" />

### Loading

<ComponentPreview name="ButtonLoadingDemo" />

### As Child

<ComponentPreview name="ButtonAsChildDemo" /> -->

## Examples

<VPGridDemo>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonDisableDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonRoundedDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonArchiveDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonTrashDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonXDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonSparklesDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonArrowDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonRightDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonEmailDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonChevronDownDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonCancelDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonLoaderCircleDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonLoaderDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonMessagesDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonPrinterDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonAvatarDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonAvatarChevronDownDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonAddNewDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonAddNewCircleDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonAddNewCircleAnimationDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonTooltipDemo" />
  </VPGridDemoItem>
  <VPGridDemoItem>
    <SimpleComponentPreview name="ButtonMenuDemo" />
  </VPGridDemoItem>
</VPGridDemo>

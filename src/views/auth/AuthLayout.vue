<template>
  <main>
    <div class="mx-auto flex max-w-4xl justify-between px-5 py-5 md:py-8">
      <slot name="back"></slot>
    </div>
    <div class="relative mx-auto mt-10 max-w-xl px-5 py-5 md:mt-20 md:py-8">
      <slot></slot>
    </div>
  </main>
</template>

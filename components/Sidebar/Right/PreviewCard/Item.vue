<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig();
const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
); // on se sert de compute pour injecter dans wrapperClasses les deux valeurs défini plus haut et injecter ainsi les 2 classes dynamique dans :class
</script>

<style scoped></style>

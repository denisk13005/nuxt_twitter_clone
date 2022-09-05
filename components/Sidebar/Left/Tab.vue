<template>
  <nuxt-link
    to="#"
    class="flex items-center justify-start p-3 hover:bg-gray-200 rounded-full px-5 dark:hover:bg-dim-200"
    :class="defaultTransition"
  >
    <div class="flex items-center">
      <slot name="icon"></slot>
    </div>
    <div class="ml-3 text-xl invisible md:visible" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
const textClasses = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>
<style></style>

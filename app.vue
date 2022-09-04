<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900 darkmode dark:text-gray-50">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left SideBar -->
          <div class="border-2 md:block xs:col-span-1 xl:col-span-2">
            <button @click="toggleDarkMode" class="btn">darkMode</button>
            twitter clonett
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true);
const toggleDarkMode = function () {
  console.log("click", darkMode.value);
  darkMode.value = !darkMode.value;
};
// export default {
//   setup() {

//     return {
//       darkMode,
//       toggleDarkMode,
//     };
//   },
// };
</script>
<style></style>

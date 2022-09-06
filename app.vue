<template>
  <div class="body" :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900 darkmode dark:text-gray-50">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5 xl:gap-8"
        >
          <!-- Left SideBar -->
          <div
            class="hidden xs:block xs:col-span-1 xl:col-span-2 bg-slate-400 mr-0"
          >
            <button
              @click="toggleDarkMode"
              class="border-2 rounded-lg text-center px-4"
            >
              darkMode
            </button>
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6 bg-red-400 ml-0">
            <h1>test</h1>
          </main>

          <!-- RightSidebar -->
          <aside class="hidden md:block xl:col-span-4 md:col-span-3 h-min">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
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
<style>
.body {
  /* max-width: 1440px; */
  margin: auto;
  border: 1px solid red;
}
</style>

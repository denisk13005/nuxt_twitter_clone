<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8"><LogoTwitter /></div>
      </nuxt-link>
    </div>
    <SidebarLeftTab active>
      <template v-slot:icon>
        <span class="material-icons"> home </span>
      </template>
      <template v-slot:name> Home </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <img class="w-8 h-8" src="~/assets/tag_black_24dp.svg" alt="" />
      </template>
      <template v-slot:name> Explore </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <span class="material-icons"> messages </span>
      </template>
      <template v-slot:name> Messages </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <span class="material-icons"> bookmarks </span>
      </template>
      <template v-slot:name> Bookmarks </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <span class="material-icons"> list </span>
      </template>
      <template v-slot:name> Lists </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <span class="material-icons"> person </span>
      </template>
      <template v-slot:name> Profile </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
      <template v-slot:icon>
        <span class="material-icons"> more </span>
      </template>
      <template v-slot:name> More </template>
    </SidebarLeftTab>
  </div>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
</script>
<style>
.material-icons {
  font-size: 32px;
}
</style>

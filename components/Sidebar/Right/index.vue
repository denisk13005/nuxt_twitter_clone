<template>
  <div class="flex flex-col">
    <!-- What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <h2 class="font-bold text-gray-800 text-lg dark:text-white">
          {{ whatsHappening.title }}
        </h2>
        <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- who to follow?  -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full object-cover"
              :src="whoToFollow.img"
              :alt="whoToFollow.name"
            />
            <div class="ml-2 flex flex-col">
              <p class="font-bold text-sm text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </p>
              <p class="text-xs text-gray-400">{{ whoToFollow.email }}</p>
            </div>
          </div>
          <button
            class="bg-gray-900 rounded-full px-4 py-1 text-white cursor-pointer dark:text-black dark:bg-white"
          >
            Follow
          </button>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#Coding",
    count: "8.8k Tweets",
  },
  {
    title: "Bill gates",
    count: "188.8k Tweets",
  },
]);
const whoToFollowItems = ref([
  {
    img: "https://picsum.photos/200/200",
    name: "Super Ecureuil",
    email: "@super.com",
  },
  {
    img: "./assets/superEcureuil.jpg",
    name: "Super Ecureuil",
    email: "@super.com",
  },
  {
    img: "./assets/superEcureuil.jpg",
    name: "Super Ecureuil",
    email: "@super.com",
  },
]);
</script>

<style scoped></style>

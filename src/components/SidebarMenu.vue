<script setup>
const menuItems = [
  { label: "儀表板", icon: "pi pi-home", route: "/back-dashboard" },
  { label: "新增紀錄", icon: "pi pi-plus", route: "/add" },
  { label: "紀錄列表", icon: "pi pi-list", route: "/records" },
  { label: "圖表分析", icon: "pi pi-chart-bar", route: "/charts" },
  { label: "投資紀錄", icon: "pi pi-briefcase", route: "/investment" },
];
</script>

<template>
  <div class="container w-[256px] h-1024 bg-white fixed left-0 top-0">
    <aside>
      <div class="logo flex justify-center items-center py-5">
        <img src="/src/assets/LOGO.png" alt="" />
      </div>
      <nav>
        <ul
          class="flex w-full justify-center items-center border p-5"
          v-for="item in menuItems"
          :key="item.key"
        >
          <li
            class="inline-flex border w-[180px] h-15 justify-center items-center gap-3 rounded-xl hover:bg-[#C6CC2D] rounded-nones"
          >
            <span :class="item.icon"></span>
            <router-link :to="item.route" class="">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

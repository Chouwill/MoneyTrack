<script setup lang="ts"></script>

<template>
  <header class="flex w-full p-4">
    <div class="logo w-[50%] flex justify-center items-center">
      <router-link to="/index">
        <img src="https://picsum.photos/id/70/70/70" alt="" />
      </router-link>
    </div>

    <div
      class="member-center w-[50%] flex justify-around items-center md:justify-end md:px-4"
    >
      <div class="member-link flex gap-5">
        <router-link
          to="/login"
          class="bg-[#5b86e5] text-[white] rounded-lg border px-5 py-2"
          >登入</router-link
        >
        <router-link
          to="/register"
          class="bg-[white] text-[#5b86e5] rounded-lg border px-5 py-2"
          >註冊</router-link
        >
      </div>
    </div>
  </header>
</template>

<style scoped></style>

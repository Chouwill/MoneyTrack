<script setup lang="ts">
import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";

import { defineEmits, watch, ref } from "vue";
import { useUserStore } from "../store/user";

const store = useUserStore();

const emit = defineEmits(["open-login", "open-register"]);

const menuList = ref(false);

watch(
  () => store.isLoginStatus,
  (val) => {
    console.log("Header登入狀態變化：", val);
  }
);

function onClickMenu() {
  console.log(store.isLoginStatus);
  menuList.value = !menuList.value;
}

function onSignUp() {
  store.isLoginStatus = false;
}
</script>

<template>
  <header class="flex w-full py-4 border justify-center items-center  bg-white">
    <div class="w-full flex border border-red-500 justify-around items-center">
      <div class="w-[25rem] border flex flex-col gap-1">
        <h2 class="text-2xl">Hi, welcome back</h2>
        <p>Let’s check your items today</p>
      </div>
      <div class="w-[25rem] flex justify-center items-center border relative">
        <div class="w-[6.25rem] relative flex items-center">
          <i class="pi pi-search absolute left-3 text-gray-400"></i>
          <InputText class="w-full  py-2" placeholder="search" 
          style="padding-left: 36px;"/>
        </div>
      </div>
      <div class="w-[15rem] flex items-center justify-center gap-5 border">
        <span class="pi pi-envelope" style="font-size: 1.7rem;"></span>
        <span class="pi pi-bell" style="font-size: 1.7rem;"></span>
      </div>

      <div class="member-link flex justify-center items-center gap-5">
        <button
          @click="emit('open-login')"
          v-if="!store.isLoginStatus"
          class="bg-[#DEE33E] text-[#000] rounded-lg border h-10 px-5"
        >
          登入
        </button>
        <button
          @click="emit('open-register')"
          v-if="!store.isLoginStatus"
          class="bg-[white] text-[#000] rounded-lg border h-10 px-5"
        >
          註冊
        </button>
      </div>
      <div class="relative group" v-if="store.isLoginStatus">
        <button
          @click="onClickMenu"
          class="user-button flex items-center justify-center gap-1 bg-[#DEE33E] py-2 px-4 text-white text-base rounded-lg shadow-md"
        >
          👤▾
        </button>
        <div
          v-if="menuList"
          class="absolute right-0 mt-2 w-32 bg-white border rounded-none z-50"
        >
          <router-link
            to="/"
            class="no-radius block hover:bg-[#C6CC2D] px-4 py-2 rounded-none"
            >首頁</router-link
          >
          <router-link
            to="/memberCenter"
            class="no-radius block hover:bg-[#C6CC2D] px-4 py-2 rounded-none"
          >
            我的帳號
          </router-link>
          <a
            @click="onSignUp"
            class="no-radius block hover:bg-[#C6CC2D] px-4 py-2 rounded-none"
            >登出</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

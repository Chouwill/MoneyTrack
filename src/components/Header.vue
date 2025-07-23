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
  <header class="flex w-full py-4 border justify-center items-center ps-40 bg-white">
    <div class="w-[85%] flex border border-red-500 justify-around items-center">
      <div class="w-[250px] border flex flex-col gap-1">
        <h2 class="text-2xl">Hi, welcome back</h2>
        <p>Let’s check your items today</p>
      </div>
      <div class="w-[412px] flex justify-center items-center border relative">
        <div class="w-[312px] relative flex items-center">
          <i class="pi pi-search absolute left-3 text-gray-400"></i>
          <InputText class="w-full pl-10 py-2" placeholder="" />
        </div>
      </div>
      <div class="w-[100px] flex items-center justify-center gap-5 border">
        <span class="pi pi-envelope"></span>
        <span class="pi pi-bell"></span>
      </div>

      <!-- <div class="w-[181px] flex justify-between items-center gap-3 border">
        <div
          class="flex justify-center items-center border w-[48px] h-[48px] bg-orange-300 rounded-full"
        >
          <img class="w-[48px] h-[48px]" src="../assets/user.png" alt="" />
        </div>
        <div class="">
          <h3>Cody Fisher</h3>
          <h3>Cody Fisher</h3>
        </div>
      </div> -->
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

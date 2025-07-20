<script setup lang="ts">
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
        <button
          @click="emit('open-login')"
          v-if="!store.isLoginStatus"
          class="bg-[#5b86e5] text-[white] rounded-lg border px-5 py-2"
        >
          登入
        </button>
        <button
          @click="emit('open-register')"
          v-if="!store.isLoginStatus"
          class="bg-[white] text-[#5b86e5] rounded-lg border px-5 py-2"
        >
          註冊
        </button>
      </div>

      <div class="relative group" v-if="store.isLoginStatus">
        <button
          @click="onClickMenu"
          class="user-button flex items-center justify-center gap-1 bg-[#5b86e5] py-2 px-4 text-white text-base rounded-lg shadow-md"
        >
          👤▾
        </button>
        <div
          class="absolute right-0 mt-2 w-32 bg-white border rounded-none z-50"
          v-if="menuList"
        >
          <router-link
            to="/index"
            class="no-radius block hover:bg-[#a2b4d8] px-4 py-2 rounded-none"
            >首頁</router-link
          >
          <router-link
            to="/memberCenter"
            class="no-radius block hover:bg-[#a2b4d8] px-4 py-2 rounded-none"
          >
            我的帳號
          </router-link>
          <a
            @click="onSignUp"
            class="no-radius block hover:bg-[#a2b4d8] px-4 py-2 rounded-none"
            >登出</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

<script setup lang="ts">
import InputText from "primevue/inputtext";

import { ref } from "vue";

const value = ref(null);
</script>

<template>
  <div class="w-[80%] login rounded-xl border m-20 md:w-[20%]">
    <form class="w-full border flex flex-col justify-center items-center gap-10 py-10">
      <div class="flex flex-col gap-1">
        <label class="block" for="email">帳號</label>
        <InputText class="w-full rounded-xl" type="text" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="block" for="password">密碼</label>
        <InputText class="w-full rounded-xl" type="text " />
      </div>
      <div class="flex flex-col gap-1">
        <label class="block" for="password">確認密碼</label>
        <InputText class="w-full rounded-xl" type="text " />
      </div>
      <div class="w-full flex justify-center border py-2">
        <router-link to="/login" class="bg-[#5b86e5] text-[white] rounded-lg border px-5 py-2">註冊</router-link>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

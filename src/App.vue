<script setup lang="ts">
import Header from "./components/Header.vue";
import Button from "primevue/button";
import DialogLogin from "./components/DialogLogin.vue";
import { ref } from "vue";
// import { handle } from "@primeuix/themes/aura/imagecompare";

const loginDialog = ref<{visible:boolean}| null>(null);

function handleLogin() {
  loginDialog.value!.visible = true;
}
</script>

<template>
  <div
    class="container border max-w-none flex justify-center items-center flex-col"
  >
    <Header @open-login="handleLogin" />
    <DialogLogin ref="loginDialog" />
    <Router-view></Router-view>
  </div>
</template>

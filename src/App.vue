<script setup lang="ts">
import Header from "./components/Header.vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import Button from "primevue/button";
import DialogLogin from "./components/DialogLogin.vue";
import { ref } from "vue";
import DialogRegister from "./components/DialogRegister.vue";
// import { handle } from "@primeuix/themes/aura/imagecompare";

const loginDialog = ref<{ visible: boolean } | null>(null);

const registerDialog = ref<{ visible: boolean } | null>(null);

function handleLogin() {
  loginDialog.value!.visible = true;
}
function handleRegister() {
  registerDialog.value!.visible = true;
}
</script>

<template>
  <div
    class="container border max-w-none flex justify-center items-center flex-col relative"
  >
    <Header @open-login="handleLogin" @open-register="handleRegister" />
    <div class="w-full  border flex justify-start items-start">
      <SidebarMenu class="absolute top-10" />
    </div>
    <DialogLogin ref="loginDialog" />
    <DialogRegister ref="registerDialog" />
    <Router-view></Router-view>
  </div>
</template>


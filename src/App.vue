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

| sidebar | header | | sidebar | main | grid-template-areas grid-area

<template>
  <div
    class="layout grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen"
  >
    <!-- Header：橫跨 4 欄 -->
    <Header
      class="layout-header col-span-4 row-start-1 row-end-2"
      @open-login="handleLogin"
      @open-register="handleRegister"
    />

    <!-- Sidebar：佔第 1 欄 -->
    <SidebarMenu class="layout-sidebar col-span-1 row-start-2 bg-gray-100" />

    <!-- Main：佔第 2–4 欄（共 3 欄） -->
    <div class="layout-main col-span-3 row-start-2 p-6 overflow-auto">
      <RouterView />
    </div>

    <!-- Dialogs：無需格線 -->
    <DialogLogin ref="loginDialog" />
    <DialogRegister ref="registerDialog" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  &-header {
    grid-area: header;
  }
  &-sidebar {
    grid-area: sidebar;
  }
  &-main {
    grid-area: main;
  }
}
</style>

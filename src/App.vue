<script setup lang="ts">
import Header from "./components/Header.vue";
import Button from "primevue/button";
import DialogLogin from "./components/DialogLogin.vue";
</script>

<template>
  <div
    class="container border max-w-none flex justify-center items-center flex-col"
  >
    <Header />
    <DialogLogin />
    <Router-view></Router-view>
  </div>
</template>

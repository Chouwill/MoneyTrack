<script setup lang="ts">
import Header from "./components/Header.vue";
import Button from "primevue/button";
</script>

<template>
  <div class="container border max-w-none flex justify-center items-center flex-col">
    <Header />

    <Router-view></Router-view>
  </div>
</template>

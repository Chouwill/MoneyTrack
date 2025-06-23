<script setup lang="ts">
import Header from "./components/Header.vue";
import Button from "primevue/button";
</script>

<template>
  <div class="container max-w-none bg[3]">
    <Header />

    <Router-view></Router-view>
  </div>
</template>

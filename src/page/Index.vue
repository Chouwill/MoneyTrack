<script setup>
import { ref } from "vue";
import Button from 'primevue/button';

import 'primeicons/primeicons.css'

import InputText from "primevue/inputtext";

import { getEconomy } from "../api/method";

const datas = ref([]);



const getData = async () => {
  try {
    const res = await getEconomy();

    console.log(res);

    datas.value = res.data;

    console.log(datas);
    

    console.log("888",datas.value);
    
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>

<template>
  <div class="index container">
    <div class="search w-full">
      <form
        class="flex flex-col justify-center items-center gap-5 p-10 md:[30%] md:flex-row"
      >
        <label for=""></label>
        <InputText class="w-[70%]" type="text" v-model="value" />
        <InputText class="w-[70%]" type="text" v-model="value" />
      </form>
    </div>
    <div class="card-box flex flex-wrap gap-2 justify-around items-center my-5">
      <div v-for="item in datas" :key="item.id" class="card w-xs my-2 flex-col justify-center md:p-5">
        <h2>名稱：{{ item.name }}</h2>
        <h2>代號：{{ item.code }}</h2>
        <h2>交易動作：{{ item.action }}</h2>
        <h2>日期：{{item.date}}</h2>
        <h2>數量：{{ item.quantity }}</h2>
        <h2>總花費：{{ item.totalcost }}</h2>
        <h2>備註：第一次投資高股息！</h2>

        <Button class="like-btn my-2" icon="pi pi-thumbs-up-fill" />
      </div>
    </div>
  </div>


</template>
<style scoped>
.container {
  border: 10px solid red;
}

.search {
  border: 4px solid rgb(13, 52, 160);
}

.card {
  border: 2px solid rgb(25, 159, 110);
}
</style>

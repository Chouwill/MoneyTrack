<script setup>
import { ref, onMounted } from "vue";
// import { ProductService } from '@/service/ProductService';

// import { CustomerService } from "@/service/CustomerService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import Button from "primevue/button";
import Paginator from "primevue/paginator";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

import { getEconomy } from "../api/method";

const datas = ref([]);

const getData = async () => {
  try {
    const res = await getEconomy();

    console.log(res);

    datas.value = res.data;

    console.log(datas);

    console.log("888", datas.value);
  } catch (error) {
    console.log(error);
  }
};

getData();

const products = ref();
</script>

<template>
  <div class="container">
    <div class="button"></div>
    <div
      class="card-box border flex flex-wrap gap-2 justify-around items-center my-5"
    >
      <div
        v-for="item in datas"
        :key="item.id"
        class="IndexCard w-xs my-2 flex  flex-col justify-center items-center md:p-5"
      >
        <h2 class="card-title">名稱：{{ item.name }}</h2>
        <h2 class="card-title">代號：{{ item.code }}</h2>
        <h2 class="card-title">交易動作：{{ item.action }}</h2>
        <h2 class="card-title">日期：{{ item.date }}</h2>
        <h2 class="card-title">數量：{{ item.quantity }}</h2>
        <h2 class="card-title">總花費：{{ item.totalcost }}</h2>
        <h2 class="card-title">備註：第一次投資高股息！</h2>

        <Button class="my-4" label="顯示" />
      </div>
      <div class="page w-[100%]">
        <Paginator
          :rows="10"
          :totalRecords="120"
          :rowsPerPageOptions="[10, 20, 30]"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { ProductService } from '@/service/ProductService';

// import { CustomerService } from "@/service/CustomerService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
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
  <div class="card">
    <DataTable :value="datas" tableStyle="min-width: 50rem">
      <Column field="code" header="日期"></Column>
      <Column field="name" header="名稱"></Column>
      <Column field="action" header="動作"></Column>
      <Column field="quantity" header="數量"></Column>
      <Column field="unitprice" header="單價"></Column>
      <Column field="totalcost" header="總額"></Column>
      <Column field="ispublic" header="是否公開"></Column>

      <Column field="attachment" header="附件"></Column>
    </DataTable>
  </div>
</template>

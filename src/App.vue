<script setup lang="ts">
import Header from "./components/Header.vue";
import Button from "primevue/button";
</script>


 <template>
  <header class="w-full bg-white shadow-md p-4 flex justify-between items-center">
    <div class="text-xl font-bold text-blue-600">MoneyTrack</div>
    <nav class="flex gap-4 text-gray-600">
      <a href="#" class="hover:text-blue-500">首頁</a>
      <a href="#" class="hover:text-blue-500">關於</a>
      <a href="#" class="hover:text-blue-500">聯絡我們</a>
    </nav>
    <div class="flex gap-2">
      <button class="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">登入</button>
      <button class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">註冊</button>
    </div>
  </header>


</template>

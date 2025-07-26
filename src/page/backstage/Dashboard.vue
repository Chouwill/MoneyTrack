<template>
  <div class="w-full border max-w-[1200px] mx-auto px-6 py-8 space-y-8 bg-gray-50 ">

    <div class="grid grid-cols-[3fr_1fr] gap-8">
      <div class="bg-white rounded-xl shadow p-6 h-[400px]">
        <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">投資成本月趨勢圖</h2>
        <Line :data="chartData" :options="chartOptions" />
      </div>

      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <h2 class="text-lg font-semibold text-gray-700 border-b pb-2">📌 您持有的股票</h2>
        <ul class="flex flex-col gap-3">
          <li class="w-full border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition bg-gray-50">
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span class="font-semibold text-base text-gray-800">2330 台積電</span>
                <span class="text-gray-400 text-xs">2025-07-26</span>
              </div>
              <span class="text-xl font-bold text-green-600">650.00</span>
            </div>
          </li>
          <li class="w-full border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition bg-gray-50">
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span class="font-semibold text-base text-gray-800">0056 高股息</span>
                <span class="text-gray-400 text-xs">2025-07-25</span>
              </div>
              <span class="text-xl font-bold text-red-600">38.00</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-8">
      <div class="bg-white rounded-xl shadow p-6 flex items-start gap-6">
        <div class="w-[250px] h-[300px]">
          <Doughnut :data="doughnutData" :options="chartOptions" />
        </div>
        <ul class="list-disc text-sm text-gray-600 leading-6 pl-4">
          <li>電子股 55%</li>
          <li>金融股 25%</li>
          <li>其他產業 20%</li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-lg font-semibold text-center text-gray-700 mb-4">各股票持有狀況</h2>
        <div class="w-full h-[300px]">
          <Bar :data="barData" :options="barOptions" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { Line, Doughnut, Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const chartData = ref({
  labels: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  datasets: [
    {
      label: "現在",
      data: [40, 20, 12, 30, 25, 10, 18, 22, 35, 15, 28, 31],
      borderColor: "#f87979",
      tension: 0,
    },
    {
      label: "過去",
      data: [70, 6, 10, 15, 20, 25, 30, 16, 12, 33, 19, 20],
      borderColor: "green",
      tension: 0,
    },
  ],
});

const doughnutData = ref({
  labels: ["股票", "現金", "ETF"],
  datasets: [
    {
      label: "資產類別",
      data: [50, 30, 20],
      backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
    },
  ],
});

const barData = ref({
  labels: ["台積電", "鴻海", "聯電", "長榮", "中鋼"],
  datasets: [
    {
      label: "持有股數",
      data: [120, 80, 60, 90, 70],
      backgroundColor: "#42A5F5",
    },
    {
      label: "持有時間（月）",
      data: [24, 18, 12, 6, 9],
      backgroundColor: "#66BB6A",
    },
  ],
});

const barOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "數值",
      },
    },
  },
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>

<style>
.list {
  /* border: 2px solid red !important; */
}
</style>

<!-- <script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12],
          },
        ],
      },
    };
  },
};
</script> -->

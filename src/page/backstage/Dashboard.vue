<template>
  <div class="back-wraper grid grid-cols-4 gap-4 w-full max-w-[100%] h-auto   py-6">
    <div
      class="monthly-investment-cost-chart col-start-1 col-end-3 border max-w-[500px] h-[300px] "
    >
      <h2 class="text-center">投資成本月趨勢圖</h2>
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="w-full h-full"
      />
    </div>
    <ul class="col-start-4 col-end-4 flex flex-col justify-center items-center">
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
      <li>00000</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
        tension: 0.4,
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: documentStyle.getPropertyValue("--p-gray-500"),
        tension: 0.4,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,

    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<style>
.back-wraper {
  width: 100% !important;
  border: 3px solid red !important;
}
</style>

<!-- <template>
  <div class="chart-wrapper flex justify-center items-center p-6 bg-[#F4F7FE] min-h-[400px]">
    <div class="investment-trend-chart w-[600px] border rounded-lg shadow-md p-4 bg-white">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h3 class="text-sm text-gray-500">總成本</h3>
          <p class="text-2xl font-bold text-gray-800">NT$ 112,500</p>
        </div>
        <div>
          <select class="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
            <option>過去 7 個月</option>
            <option>過去 6 個月</option>
            <option>今年至今</option>
          </select>
        </div>
      </div>

      <h2 class="text-lg font-semibold mb-4 text-center">
        每月投資成本趨勢圖
      </h2>
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="w-full h-[300px]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'primevue/chart';

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const setChartData = () => {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '投資成本（A）',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#8DD65C',
        tension: 0.4,
        pointBackgroundColor: '#8DD65C',
        pointRadius: 5
      },
      {
        label: '投資成本（B）',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#00C4CC',
        tension: 0.4,
        pointBackgroundColor: '#00C4CC',
        pointRadius: 5
      }
    ]
  };
};

const setChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#334155'
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `NT$ ${context.parsed.y.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94A3B8'
        },
        grid: {
          color: '#E2E8F0'
        }
      },
      y: {
        ticks: {
          color: '#94A3B8'
        },
        grid: {
          color: '#E2E8F0'
        }
      }
    }
  };
};
</script>

<style scoped>
.chart-wrapper {

  border: 3px solid red !important;

}

.investment-trend-chart {
  background-color: #fff;
}
</style> -->

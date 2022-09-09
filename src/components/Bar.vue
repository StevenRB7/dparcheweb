<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import { db } from '../firebase/init.js'
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      chartData: {
        labels: [],
        datasets: [  {
          label: "Intereses",
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [1,5,5],
          bgColors:[]
        }],
        bgColors: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ]
        // borderColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(255, 159, 64)',
        //   'rgb(255, 205, 86)',
        //   'rgb(75, 192, 192)',
        //   'rgb(54, 162, 235)',
        //   'rgb(153, 102, 255)',
        //   'rgb(201, 203, 207)'
        // ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false


      }
    }
  },
  computed: {
    rows () {
      return this.dataStatusGet.length
    }
  },
  mounted () {
    this.mostrar()

  },
  methods: {
    mostrar () {
      let listStatus = [];
      db.collection("Registro")
        .get()
        .then(function (result) {
          result.forEach(function (status) {
            listStatus.push({id:status.id, data:status.data()});
            
          });
          return listStatus;
        })
        .then((response) => {
        this.chartData.labels = response;
        console.table(response);
        
        // this.chartData.datasets[1].label = response[1].data.usuario
            
        });
    },

  },
}

</script>
<style scoped>

</style>

import Vue from 'vue'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import highcharts3d from 'highcharts/highcharts-3d'

highcharts3d(Highcharts)

Vue.use(HighchartsVue,{tagName:'charts'})
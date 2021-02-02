import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChartLine)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

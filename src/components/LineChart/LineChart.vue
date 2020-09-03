<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
    //   type: Object,
    //   default: null
    //   tooltips: {
    //     mode: 'point'
    //   }
    }
  },
  mounted () {
    const dates = this.chartdata.map((d) => {
      return d.date
    })
    const income = this.chartdata.map((d) => {
      return d.Total
    })

    this.renderChart({
      label: dates,
      datasets: [{
        label: dates,
        data: income
      }]
    })

    // this.options = true
  }
}
</script>

<style>
</style>

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    thisM: {
      type: String,
      default: '08'
    },
    lastM: {
      type: String,
      default: '07'
    }
  },
  data () {
    return {
      thisMonth: [],
      lastMonth: [],
      dataThisM: [],
      dataLastM: []
    }
  },
  mounted () {
    const dateThisM = this.chartdata.filter((d) => {
      return d.month === this.thisM
    })
    this.thisMonth.push(dateThisM)
    this.thisMonth[0].map((d) => {
      this.dataThisM.push(d.Total)
    })

    const dateLastM = this.chartdata.filter((d) => {
      return d.month === this.lastM
    })
    this.lastMonth.push(dateLastM)
    this.lastMonth[0].map((d) => {
      this.dataLastM.push(d.Total)
    })

    this.renderChart({
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      datasets: [
        {
          label: 'This Month',
          borderColor: 'rgba(50, 115, 220, 0.5)',
          backgroundColor: '#00f1ff',
          data: this.dataThisM
          // height: '300px'
        },
        {
          label: 'Last Month',
          borderColor: '#fad8df',
          backgroundColor: '#ffb8c6',
          data: this.dataLastM
          // height: '300px'
        }
      ]
    })

    // this.options = true
  }
}
</script>

<style>
</style>

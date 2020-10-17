<template>
  <div class="container-fluid">
    <Header />
    <div class="row d-flex justify-content-start">
      <Navbar />
      <main>
        <Card />
        <Revenue />
        <Recent />
      </main>
    </div>
    <AddProduct />
  </div>
</template>

<script>
import Header from '../../../components/History/Header'
import Navbar from '../../../components/History/Navbar'
import Card from '../../../components/History/card'
import Revenue from '../../../components/History/Revenue'
import Recent from '../../../components/History/RecentOrder'
import AddProduct from '../../../components/Home/Modal-Add'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Histoy',
  data () {
    return {
      menu: true
    }
  },
  components: {
    Navbar,
    Header,
    Card,
    Revenue,
    Recent,
    AddProduct
  },
  mounted () {
    this.getHistory()
    this.getHistoryIncome()
  },
  computed: {
    ...mapGetters({
      histories: 'histories',
      historiesMonth: 'historiesMonth'
    })
  },
  methods: {
    ...mapActions(['getHistory']),
    ...mapActions(['getHistoryIncome'])
  }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  overflow-y: scroll;
  height: 530px;
}

main::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  main {
    width: 90%;
    padding-right: 30px;
    height: 300px;
  }
}
</style>

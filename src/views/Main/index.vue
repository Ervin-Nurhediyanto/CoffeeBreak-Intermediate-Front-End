<template>
  <div>
    <div class="cos-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9 col-sm-9 main-bar">
            <Header />
            <div class="row">
              <Navbar />
              <router-view />
            </div>
          </div>
          <aside class="col-md-3 p-md-0 col-sm-3 p-sm-0">
            <Cart v-on:toCart="addItemCart($event)" />
            <Empty v-if="empty" />
            <div v-else class="scroll">
              <div class="checkout">
                <Checkout />
              </div>
              <div class="checkoutPay">
                <CheckoutPay
                  :totalPrice="totals"
                  v-on:cancel="cancelCart($event)"
                />
              </div>
            </div>
          </aside>
        </div>
        <Add />
        <CheckModal
          :products='productList'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Home/Header'
import Navbar from '../../components/Home/Navbar'
import Cart from '../../components/Home/Cart'
import Empty from '../../components/Home/Empty'
import Checkout from '../../components/Home/checkout'
import Add from '../../components/Home/Modal-Add'
import CheckModal from '../../components/Home/Modal-Checkout'
import CheckoutPay from '../../components/Home/checkoutPay'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    Header,
    Navbar,
    Cart,
    Empty,
    Checkout,
    CheckoutPay,
    Add,
    CheckModal
  },
  computed: {
    ...mapGetters({
      empty: 'empty',
      productList: 'productList',
      cartCount: 'cartCount'
    })
  },
  data () {
    return {
    }
  },
  methods: {
    plusTotal (plusTotal) {
      this.totals += plusTotal.total
      this.checkoutProducts.map((item) => {
        item.id = plusTotal.id
        return item.quality + 1
      })
    },
    minusTotal (minusTotal) {
      this.totals -= minusTotal.total
      this.count += minusTotal.count
      if (this.count === 0) {
        this.empty = true
        this.cartProducts = []
      }
      if (this.count < 0) {
        this.count = 0
        this.cartProducts = []
      }
    },
    cancelCart (cancelCart) {
      this.empty = cancelCart.empty
      this.count = cancelCart.count
      this.totals = 0
      this.cartProducts = []
    }
  }
}
</script>

<style scoped>
.cos-container {
  min-height: 500px;
}

.scroll {
  height: 610px;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .cos-container {
    min-height: 310px;
  }
  .scroll {
    height: 310px;
  }
  .checkout {
    position: relative;
    bottom: auto;
    top: 0px;
    height: 310px;
    overflow-y: scroll;
  }
  .checkout::-webkit-scrollbar {
  display: none;
  }
  .checkoutPay {
    position: relative;
    bottom: 0;
    top: auto;
  }
}
</style>

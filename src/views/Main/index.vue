<template>
  <div>
    <div class="cos-container">
      <div class="container-fluid">
        <div class="row">
          <!-- Desktop -->
          <div class="desktop col-md-9 col-sm-12 main-bar">
            <Header v-on:handleCart="handleCart($event)" />
            <div class="row">
              <Navbar />
              <router-view />
            </div>
          </div>
          <aside class="desktop col-md-3 p-md-0 col-sm-12 p-sm-0">
            <Cart v-on:handleCloseCart="handleCloseCart($event)" />
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
          <!-- End Desktop -->
          <!-- Mobile -->
          <div v-if="!showCart" class="mobile col-md-9 col-sm-12 main-bar">
            <Header v-on:handleCart="handleCart($event)" />
            <div class="row">
              <Navbar />
              <router-view />
            </div>
          </div>
          <aside v-else class="mobile col-md-3 p-md-0 col-sm-12 p-sm-0">
            <Cart v-on:handleCloseCart="handleCloseCart($event)" />
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
          <!-- End Mobile -->
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
      showCart: false
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
    },
    handleCart (handleCart) {
      this.showCart = handleCart
    },
    handleCloseCart (handleCloseCart) {
      this.showCart = handleCloseCart
    }
  }
}
</script>

<style scoped>
aside {
  height: 663px;
}
.scroll {
  height: 575px;
  overflow-y: scroll;
  object-fit: cover;
}

.scroll::-webkit-scrollbar {
  display: none;
}
.mobile {
  display: none;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: inline;
  }
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

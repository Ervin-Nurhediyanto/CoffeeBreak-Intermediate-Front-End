<template>
  <div class="btm col">
    <div class="row pl-md-3 pr-md-3 pl-sm-3 pr-sm-3">
      <h3>Total:</h3>
      <h3>Rp.{{totalPrice}}*</h3>
    </div>
    <p>*Belum termasuk ppn</p>
    <div class="checkout" data-toggle="modal" data-target="#checkModal">
      <h3>Checkout</h3>
    </div>
    <div class="cancel" @click="cancel">
      <h3>Cancel</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Checkout',
  data () {
    return {
      total: 0
    }
  },
  computed: {
    ...mapGetters({
      productList: 'productList',
      totalPrice: 'totalPrice'
    })
  },
  mounted () {
    this.getTotal()
  },
  methods: {
    ...mapActions(['cancelCart']),
    cancel () {
      this.cancelCart()
    },
    getTotal () {
      this.total += this.price
    }
  }
}
</script>

<style scoped>

.image-cart {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  padding-top: 0;
}

/* Aside */

aside {
  background: #ffffff;
  border: 1px solid #cecece;
}

aside .cart {
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;
}

aside .cart .count {
  background: #57cad5;
  border-radius: 100%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
}

/* Aside List */

aside .scroll {
  height: 610px;
  overflow-y: scroll;
}

aside .scroll::-webkit-scrollbar {
  display: none;
}

aside .list .col {
  width: 100%;
  padding: 20px;
}

aside .list .row {
  justify-content: start;
}

aside .list .select {
  margin-bottom: 15px;
}

aside .list .item {
  height: 100%;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
}

aside .list .item h3 {
  font-size: 25px;
}

aside .list .price {
  margin-top: auto;
  justify-content: space-between;
}

aside .list .price .row {
  margin-right: 10px;
}

aside .list .price h4 {
  font-size: 15px;
}

/* Aside btm*/

aside .btm {
  margin-top: auto;
  margin-bottom: 0;
  padding: 40px 20px 20px 20px;
}

aside .btm .row {
  justify-content: space-between;
}

aside .btm p {
  margin-top: 5px;
}

aside .btm .checkout {
  background-color: #57cad5;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  color: #ffffff;
}

aside .btm .checkout button {
  width: 100%;
  background-color: #57cad5;
  border: 0;
}

aside .btm .cancel {
  background-color: #f24f8a;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  color: #ffffff;
}

.checkout, .cancel {
  cursor: pointer;
}

@media (max-width: 768px) {
  .btm h3 {
    font-size: 15px;
    font-weight: bold;
  }

  .checkout, .cancel {
      height: 30px;
      justify-content: center;
      align-content: center;
      font-weight: bold;
  }
}

</style>

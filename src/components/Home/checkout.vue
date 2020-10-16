<template>
  <div v-show="active" class="row m-md-0 m-sm-0 justify-content-start list">
    <div class="col p-md-3 p-sm-1" v-for="product in productList" :key="product.id">
      <div class="row m-md-2 p-md-0 m-sm-2 p-sm-0 select">
        <div class="container-img">
          <img class="image-cart" :src="product.image" />
        </div>
        <div class="col item m-md-0 m-sm-0">
          <h3 v-if="product.name.length < 17">{{product.name}}</h3>
          <h4 v-else>{{product.name}}</h4>
          <div class="row m-md-0 m-sm-0 price justify-content-between">
            <div class="row m-md-0 pb-md-0 m-sm-0 pb-sm-0">
              <button class="min" @click="minus(product)">-</button>
              <button class="qly">{{product.countItem}}</button>
              <button class="pls" @click="plus(product)">+</button>
            </div>
            <h5>Rp.{{product.total * product.countItem}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cart List',
  data () {
    return {
      active: true
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      totalPrice: 'totalPrice',
      productList: 'productList',
      empty: 'empty'
    }),
    total: function () {
      let totalPrice = 0
      totalPrice += (this.price * this.countItem)
      return totalPrice
    }
  },
  methods: {
    ...mapActions(['minusCount']),
    ...mapActions(['addTotalPrice']),
    ...mapActions(['plusCountItem']),
    ...mapActions(['removeListProduct']),
    ...mapActions(['removeProduct']),

    plus (product) {
      product.countItem += 1
      const plusPrice = product.price
      this.addTotalPrice(plusPrice)
      const id = product.id
      this.plusCountItem(id)
    },
    minus (product) {
      if (product.countItem > 1) {
        product.countItem -= 1
        const minusPrice = product.price * -1
        this.addTotalPrice(minusPrice)
      } else {
        this.removeListProduct(product)
        this.removeProduct(product.id)
        this.minusCount()
        const minusPrice = product.price * -1
        this.addTotalPrice(minusPrice)
      }
    },
    cancel () {
      this.$router.push({
        name: 'history',
        params: {
          empty: 'true'
        }
      })
    }
  }
}

</script>

<style scoped>

.container-img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 20px 0px 20px 0px;
  margin-bottom: 10px;
  background-color: red;
}

.image-cart {
  width: 100px;
  height: 100px;
  object-fit: cover;
  padding-top: 0;
}

.item h3 {
  font-size: 18px;
}

.item h4 {
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.select {
  width: 300px;
}

@media (max-width: 768px) {
  .image {
    width: 100px;
    height: 80px;
    border-radius: 10px 10px 0px 0px;
  }
  header,
  aside .cart {
    height: 50px;
  }
  header h2,
  aside .cart h2 {
    font-size: 20px;
    line-height: 20px;
  }
  main {
    height: 310px;
  }
  article h6 {
    font-size: 10px;
  }
  article h3 {
    font-size: 13px;
  }
  aside h3 {
    font-size: 12px;
    line-height: 20px;
  }
  aside h4 {
    line-height: 10px;
  }
  aside .list .item h3 {
    font-size: 10px;
  }
  aside .list .price h4 {
    font-size: 10px;
  }
  aside .scroll {
    overflow-y: scroll;
    height: 300px;
  }
  aside .scroll::-webkit-scrollbar {
    display: none;
  }
  aside .btm .checkout {
    margin-top: 10px;
  }
  aside .btm .checkout {
    padding: 5px;
  }
  aside .btm .cancel {
    padding: 10px;
  }
}

@media (max-width: 576px) {
  .icon {
    width: 15px;
    height: 15px;
  }
  .image {
    width: 180px;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
  }
  main {
    height: 600px;
  }
  main .menu .row {
    flex-direction: column;
  }
  article h6 {
    font-size: 20px;
  }
  aside .scroll {
    overflow-y: scroll;
    height: 600px;
  }
  aside .scroll::-webkit-scrollbar {
    display: none;
  }
  aside .list h3 {
    font-size: 12px;
    flex-direction: column;
  }
  aside .list h4 {
    flex-direction: column;
    font-size: 12px;
    padding-top: 5px;
  }
  aside .list .select {
    justify-content: center;
    padding: 10px;
    padding-top: 0;
  }
  aside .list .price {
    flex-direction: column;
  }
  aside .btm {
    padding: 5px;
  }
  aside .btm h3 {
    font-size: 11px;
  }
  aside .btm p {
    font-size: 10px;
  }
}
</style>

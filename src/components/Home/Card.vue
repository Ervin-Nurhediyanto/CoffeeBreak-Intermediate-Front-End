<template>
  <div class="row">
    <div v-for="product in products" :key="product.id">
      <div class="select container-img">
        <img
          v-show="product.cardActive"
          class="image"
          :src="product.image"
          @click="addToCart(product)"
        />
        <img
          v-show="product.cardSelect"
          class="image"
          :src="product.image"
          @click="removeFromCart(product)"
          v-filter="brightness"
        />
        <div v-show="product.cardSelect" class="tick"></div>
      </div>
      <h5 v-if="product.name.length < 20">{{ product.name }}</h5>
      <h6 v-else>{{ product.name }}</h6>
      <h5>Rp. {{ product.price }}</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Card',
  data () {
    return {
      brightness: 50
    }
  },
  mounted () {},
  computed: {
    ...mapGetters({
      cartCount: 'cartCount',
      products: 'products',
      productList: 'productList'
    })
  },
  methods: {
    ...mapActions(['plusCount']),
    ...mapActions(['minusCount']),
    ...mapActions(['addListProduct']),
    ...mapActions(['removeListProduct']),
    ...mapActions(['addTotalPrice']),
    ...mapActions(['removeProduct']),
    ...mapMutations(['setTrueEmpty']),

    addToCart (product) {
      if (product.cardSelect === false) {
        product.cardSelect = true
        product.cardActive = false
        const data = {
          name: product.name,
          image: product.image,
          price: product.price,
          total: product.price,
          id: product.id,
          countItem: 1,
          cardSelect: product.cardSelect,
          cardActive: product.cardActive
        }
        this.plusCount()
        this.addListProduct(data)
        this.addTotalPrice(data.price)
      }
    },

    removeFromCart (product) {
      product.cardSelect = false
      product.cardActive = true
      this.minusCount()
      if (this.cartCount === 0) {
        this.setTrueEmpty()
      }
      const index = this.productList
        .map((item) => {
          return item.id
        })
        .indexOf(product.id)
      const price = this.productList.map((item) => {
        return item.price
      })
      const count = this.productList.map((item) => {
        return item.countItem
      })
      const total = price[index] * count[index] * -1
      console.log(total)

      this.removeListProduct(index)
      this.addTotalPrice(total)
    }
  }
}
</script>

<style scoped>
.tick {
  position: absolute;
  top: 70px;
  left: 90px;
  width: 40px;
  height: 40px;
  background-image: url("../../assets/tick.png");
  background-size: 40px;
}
h5,
h6 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.container-img {
  width: 250px;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
  position: relative;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0px 20px 0px;
}
div {
  margin: 10px;
}

@media (max-width: 922px) {
  .container-img {
    width: 120px;
    height: 120px;
  }
  .tick {
    top: 30px;
    left: 30px;
  }
  h5 {
    font-size: 15px;
  }
  h6 {
    font-size: 12px;
  }
  main {
    height: 310px;
  }
  div {
    margin: 4px;
  }
}

@media (max-width: 768px) {
  .container-img {
    width: 120px;
    height: 120px;
  }
  .tick {
    top: 30px;
    left: 30px;
  }
  h5 {
    font-size: 15px;
  }
  h6 {
    font-size: 12px;
  }
  main {
    height: 310px;
  }
  div {
    margin: 4px;
  }
}
</style>

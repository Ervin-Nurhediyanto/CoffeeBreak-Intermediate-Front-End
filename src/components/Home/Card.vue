<template>
  <div class="row">
    <div v-for="product in products" :key="product.id">
    <div class="select container-img">
      <img v-show="product.cardActive" class="image" :src="product.image" @click="addToCart(product)" />
      <img v-show="product.cardSelect" v-filter='brightness' class="image" :src="product.image" @click="addToCart" />
      <div v-show="product.cardSelect" class="tick"></div>
    </div>
    <h5>{{product.name}}</h5>
    <h5>Rp. {{product.price}}</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Card',
  data () {
    return {
      brightness: 50
    }
  },
  mounted () {
  },
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

h4,
h5,
button {
  font-family: Airbnb Cereal App;
}

.container-img {
  width: 250px;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
  position: relative;
}

.image {
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 0px 20px 0px;
}

div {
  margin: 10px;
}
@media (max-width: 768px) {

  .container-img {
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
  position: relative;
}

  .image {
    width: 100%;
    height: 100%;
    border-radius: 20px 0px 20px 0px;
  }

  .tick {
  position: absolute;
  top: 70px;
  left: 150px;
}

h5 {
  font-size: 25px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
  main {
    height: 310px;
  }
}
</style>

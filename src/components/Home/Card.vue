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
  // props: ['name', 'image', 'price', 'id', 'cardSelect', 'cardActive'],
  // props: ['products']
  data () {
    return {
      // cardSelect: false,
      // cardActive: true,
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
      // else if (this.cartCount > 0) {
      //   product.cardSelect = false
      //   product.cardActive = true
      //   if (this.cartCount > 0) {
      //     const data = {
      //       name: product.name,
      //       image: product.image,
      //       price: product.price * -1,
      //       id: product.id
      //     }
      //     this.minusCount()
      //     this.removeListProduct(data)
      //     this.addTotalPrice(data.price)
      //   }
      // }
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
  /* background-color: blue; */
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
  /* header,
  aside .cart {
    height: 50px;
  } */
  /* header h2,
  aside .cart h2 {
    font-size: 20px;
    line-height: 20px;
  } */
  main {
    height: 310px;
  }
  /* article h6 {
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
  } */
}

/* @media (max-width: 576px) {
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
} */
</style>

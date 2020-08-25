<template>
  <main class="col-md-11">
    <div class="row">
      <article class="row main justify-content-center" v-for="product in products" :key="product.id">
        <Card
          :name="product.name"
          :image="product.image"
          :price="product.price"
          :id="product.id"
          :select="select"
          v-on:addToCart="updateCart($event)"
        />
      </article>
      <article class="row page">
        <div class="col-md-2 col-sm-2">
          <h5 class="totalPage">Total Page {{totalPage}}</h5>
        </div>
        <div class="col-md-8 col-sm-8">
          <div class="row justify-content-center">
            <div class="col-md-4 col-sm-4">
              <button v-show="page > 1" @click="prevPage">prev</button>
            </div>
            <div class="col-md-4 col-sm-4">
              <h5 class>Page {{page}}</h5>
            </div>
            <div class="col-md-4 col-sm-4">
              <button v-show="page < totalPage" @click="nextPage">next</button>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-sm-2">
          <!-- {{select}} -->
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import Card from '../../../components/Home/Card'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card
  },
  props: ['select'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      allProduct: 'allProduct',
      products: 'products',
      totalPage: 'totalPage',
      status: 'status',
      page: 'page',
      empty: 'empty'
    })
  },
  mounted () {
    this.getAllData()
    this.getData()
  },
  methods: {
    ...mapActions(['getAllData']),
    ...mapActions(['getData']),
    ...mapActions(['nextPage']),
    ...mapActions(['prevPage']),
    updateCart (updateCart) {
      if (this.checkId !== updateCart.id) {
        this.checkId.push(updateCart.id)
        this.empty = updateCart.count
        this.$emit('updateCart', {
          count: updateCart.count,
          empty: false,
          name: updateCart.name,
          image: updateCart.image,
          price: updateCart.price,
          id: updateCart.id,
          quality: updateCart.quality,
          plus: updateCart.plus
        })
      }
    }
  }
}
</script>

<style scoped>

aside {
  background: #ffffff;
  border: 1px solid #cecece;
  width: 30%;
}

h2,
h3,
h4,
button {
  font-family: Airbnb Cereal App;
}
/* Article */

article {
  padding: 20px;
}

article.page {
  width: 100%;
}

article .select {
  margin-bottom: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main */

main {
  height: 610px;
  background: rgba(190, 195, 202, 0.3);
  flex-wrap: wrap;
  overflow-y: scroll;
}

main::-webkit-scrollbar {
  display: none;
}

main .menu {
  width: 100%;
}

.menu .row {
  justify-content: center;
}
main div {
  padding: 0;
}
article {
  margin: 0;
}

article .select .image {
  filter: brightness(50%);
}

.tick {
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url("../../../assets/tick.png");
  background-size: 40px;
}

@media (max-width: 768px) {
  main.col-md-11 {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
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
  h5.totalPage {
    font-size: 15px;
  }
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

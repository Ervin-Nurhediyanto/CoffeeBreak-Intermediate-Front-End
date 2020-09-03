<template>
  <main class="col-md-11">
    <div class="row">

      <div class="col-md-12 col-sm-12">
        <article>
            <input type="text" v-model="search" placeholder="search" />
            <button @click="handleSearch(search)">Search</button>
        </article>
        <article class="sort d-flex justify-content-end">
          <select @change="handleSort(sort)" v-model="sort" placeholder="sort">
            <option value="">Sort</option>
            <option value="name">a-z</option>
            <option value="name&order=DESC">z-a</option>
            <option value="price">low price</option>
            <option value="price&order=DESC">high price</option>
          </select>
        </article>
      </div>

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

      <nav aria-label="..." class="col-md-12">
        <ul class="pagination">
          <li class="page-item">
            <a v-show="page > 1" @click="prevPage(1)" class="page-link" href="#">Prev</a>
          </li>
          <li class="page-item disabled">
            <a v-show="page <= 1" class="page-link">Prev</a>
          </li>
          <li v-show="page >= totalPage && page != 1" @click="prevPage(2)" class="page-item"><a class="page-link" href="#">{{page - 2}}</a></li>
          <li v-show="page > 1" @click="prevPage(1)" class="page-item"><a class="page-link" href="#">{{page - 1}}</a></li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">
              {{page}}
              <span class="sr-only">(current)</span>
            </span>
          </li>
          <li v-show="page < totalPage" @click="nextPage(1)" class="page-item"><a class="page-link" href="#">{{page + 1}}</a></li>
          <li v-show="page <= 1 && totalPage != 1" @click="nextPage(2)" class="page-item"><a class="page-link" href="#">{{page + 2}}</a></li>
          <li class="page-item">
            <a v-show="page < totalPage" @click="nextPage(1)" class="page-link" href="#">Next</a>
          </li>
          <li class="page-item disabled">
            <a v-show="page >= totalPage" class="page-link">Next</a>
          </li>
        </ul>
      </nav>

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
  data () {
    return {
      search: '',
      sort: ''
    }
  },
  computed: {
    ...mapGetters({
      allProduct: 'allProduct',
      products: 'products',
      totalPage: 'totalPage',
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
    ...mapActions(['getDataSearch']),
    ...mapActions(['getDataSort']),
    ...mapActions(['nextPage']),
    ...mapActions(['prevPage']),

    handleSearch (key) {
      this.getDataSearch(key)
      this.$router.go(0)
    },

    handleSort (sort) {
      this.getDataSort(sort)
      this.$router.go(0)
    },

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

.red {
  background-color: red;
}

.search {
  margin-top: 20px;
}

.sort {
  margin-right: 10px;
  margin-left: auto;
}

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

</style>

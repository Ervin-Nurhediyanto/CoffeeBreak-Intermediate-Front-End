<template>
  <main class="col-md-11">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="search-sort row">
          <div class="col-md-9 col-sm-9 d-flex justify-content-start search">
            <Search />
          </div>
          <div class="col-md-2 col-sm-2 sort">
            <Sort />
          </div>
        </div>
      </div>

      <article v-if="allProduct === 'Produk yang anda cari tidak ada'">
        <h2>Product Not Found</h2>
      </article>
      <article v-else class="col main">
        <Card />
      </article>

      <Pagination v-if="allProduct !== 'Produk yang anda cari tidak ada'" />
      <Notif />
    </div>
  </main>
</template>

<script>
import Card from '../../../components/Home/Card'
import { mapActions, mapGetters } from 'vuex'
import Search from '../../../components/Home/Search'
import Sort from '../../../components/Home/Sort'
import Pagination from '../../../components/Home/Pagination'
import Notif from '../../../components/Home/Modal-Notif'

export default {
  name: 'Home',
  components: {
    Card,
    Search,
    Sort,
    Pagination,
    Notif
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
    const data = {
      search: '',
      sort: ''
    }
    this.getAllData(data)
    this.getData(data)
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

.search-sort {
  padding-top: 15px;
  padding-left: 0px;
}

.search {
padding-top: 10px;
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

.menu .row {
  justify-content: center;
}
main div {
  padding: 0;
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

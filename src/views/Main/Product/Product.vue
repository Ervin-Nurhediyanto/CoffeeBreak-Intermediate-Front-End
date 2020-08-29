/* eslint-disable eqeqeq */
<template>
  <main class="col-md-11 card-body">

    <!-- <article class="row page mobile">
      <div class="col-md-2 col-sm-2 mt-md-2">
        <h5 class="totalPage">Total Page {{totalPage}}</h5>
      </div>
      <div class="col-md-8 col-sm-8 mt-md-2">
        <div class="row justify-content-center">
          <div class="col-md-4 col-sm-4">
            <button v-show="page > 1" @click="prevPage">prev</button>
          </div>
          <div class="col-md-4 col-sm-4">
            <h5>Page {{page}}</h5>
          </div>
          <div class="col-md-4 col-sm-4">
            <button v-show="page < totalPage" @click="nextPage">next</button>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-2">
      </div>
    </article> -->

    <div class="row">
      <form enctype='multipart/form-data' @submit.prevent="updateData" v-for="product in products" :key="product.id">
        <div class="col">
          <div class="row">
            <img class="image" :src="product.image" />
          </div>
          <div class="row data justify-content-between">
            <strong>Name:</strong>
            <input type="text" class="form-control type" v-model="product.name" />
          </div>
          <div class="row data justify-content-between">
            <strong>Image:</strong>
            <!-- <input class="form-control type" v-model="product.image" /> -->
            <input type="file" @change="selectFile(product.image)" class="" placeholder="Upload" />
          </div>
          <div class="row data justify-content-between">
            <strong>Price:</strong>
            <input type="text" class="form-control type" v-model="product.price" />
          </div>
          <div class="row data justify-content-between">
            <strong>Category:</strong>
            <select class="form-control type-select" v-model="product.idCategory">
              <!-- <option class="option">Category</option> -->
              <option value="2">Food</option>
              <option value="1">Drink</option>
            </select>
            <!-- <input type="text" class="form-control" v-model="product.idCategory" /> -->
          </div>
          <button class="btn btn-success" @click="update_Data(product, product.id)">Update</button>
          <button class="btn btn-success" @click="delete_Data(product.id)">Delete</button>
        </div>
      </form>
    </div>

    <article class="row page desktop">
      <div class="col-md-2 col-sm-2 mt-md-2">
        <h5 class="totalPage">Total Page {{totalPage}}</h5>
      </div>
      <div class="col-md-8 col-sm-8 mt-md-2">
        <div class="row justify-content-center">
          <div class="col-md-4 col-sm-4">
            <button v-show="page > 1" @click="prevPage">prev</button>
          </div>
          <div class="col-md-4 col-sm-4">
            <h5>Page {{page}}</h5>
          </div>
          <div class="col-md-4 col-sm-4">
            <button v-show="page < totalPage" @click="nextPage">next</button>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-2">
      </div>
    </article>

  </main>
</template>

<script>
// import axios from 'axios'
import DataMixin from '../Home/Home'
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
      output: '',
      navbarAct: true
    }
  },
  mixins: [DataMixin],
  computed: {
    // ...mapGetters({
    //   allProduct: 'allProduct'
    // })
  },
  mounted () {
    this.getAllData()
  },
  methods: {
    ...mapActions(['getAllData']),
    ...mapActions(['updateData']),
    ...mapActions(['deleteData']),

    update_Data (product, id) {
      // const formData = new FormData()
      // formData.append('file', this.file)

      const data = {
        product: product,
        id: id
      }
      this.updateData(data).then(() => {
        this.$router.push('/home')
      })
    },

    delete_Data (id) {
      const data = {
        id: id
      }
      this.deleteData(data)
        .then(() => {
        })
      this.getAllData()
      alert('Delete Success')
      // axios
      //   .delete(process.env.VUE_APP_URL_PRODUCT + '/' + id)
      //   .then((res) => {

      //   })
      // this.getAllData()
      // alert('Delete Success')
    },

    selectFile (image) {

    }
  }
}
</script>

<style scoped>

.red {
  background-color: red;
}

.blue {
  background-color: aqua;
}

.green {
  background-color: greenyellow;
}

.image {
  width: 220px;
  height: 180px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 10px;
}

form {
  width: 300px;
  margin-bottom: 20px;
  /* margin: 5px */
}

input,
select {
  width: 100px;
}

input, select {
  box-shadow: 2px 2px rgba(190, 195, 202, 0.3);
  margin: 0px 0px 10px 0px;
}

.type {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  padding: 0px 15px 0px 15px;
  box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
  border: none;
  outline: none;
  transition: width 1s;
}

.type:hover {
  width: 170px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  box-shadow: inset -2px -2px #ffffff73, inset 4px 4px rgba(94, 104, 121, 0.288);
  border: none;
}

.type-select {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  padding: 0px 15px 0px 15px;
  box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
  border: none;
  outline: none;
}

main {
  height: 610px;
  background: rgba(190, 195, 202, 0.3);
  flex-wrap: wrap;
  overflow-y: scroll;
}

main::-webkit-scrollbar {
  display: none;
}
.data {
  margin-left: 20px;
  margin-right: 20px;
}
nav .col {
  width: 50px;
}
.icon {
  width: 35px;
  height: 35px;
  /* margin-left: 5px; */
}
button {
  width: 80px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  /* margin-left: 5px; */
}
/* Nav */

nav {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
nav.nav {
  display: flex;
  flex-direction: column;
  width: 5%;
}
nav .icon {
  margin-top: 20px;
}

nav button.btn-primary {
  background-color: transparent;
  padding-left: 0;
  border: 0;
}

article.page {
  width: 100%;
}

/* .mobile {
  display: none;
} */

@media (max-width: 768px) {
/* .mobile {
  display: flex;
  flex-direction: column;
}

.card {
  display: flex;
  flex-direction: column;
} */

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

  .icon {
    width: 20px;
    height: 20px;
  }
  nav {
    width: 200px;
  }
  main.col-md-11 {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  form {
    width: 300px;
    margin-bottom: 20px;
    /* margin: 5px */
  }
  .image {
    width: 350px;
    height: 220px;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: 10px;
  }
}
</style>

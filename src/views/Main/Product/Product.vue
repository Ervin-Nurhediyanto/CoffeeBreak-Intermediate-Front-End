/* eslint-disable eqeqeq */
<template>
  <main class="col-md-11 card-body">
    <div class="row">
      <form @submit.prevent="updateData" v-for="product in products" :key="product.id">
        <div class="col">
          <div class="row">
            <img class="image" :src="product.image" />
          </div>
          <div class="row data justify-content-between">
            <strong>Name:</strong>
            <input type="text" class="form-control" v-model="product.name" />
          </div>
          <div class="row data justify-content-between">
            <strong>Image:</strong>
            <input class="form-control" v-model="product.image" />
          </div>
          <div class="row data justify-content-between">
            <strong>Price:</strong>
            <input type="text" class="form-control" v-model="product.price" />
          </div>
          <div class="row data justify-content-between">
            <strong>Category:</strong>
            <select class="form-control" v-model="product.idCategory">
              <!-- <option class="option">Category</option> -->
              <option value="2">Food</option>
              <option value="1">Drink</option>
            </select>
            <!-- <input type="text" class="form-control" v-model="product.idCategory" /> -->
          </div>
          <button class="btn btn-success" @click="updateData(product, product.id)">Update</button>
          <button class="btn btn-success" @click="deleteData(product, product.id)">Delete</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data () {
    return {
      products: [],
      allProduct: [],
      totalPage: '',
      status: '',
      page: '',
      output: '',
      empty: true,
      navbarAct: true
    }
  },
  mounted () {
    this.getAllData()
  },
  methods: {
    getAllData () {
      axios.get('http://localhost:4000/api/v1/products').then((res) => {
        this.products = res.data.result
      })
    },
    updateData (product, id) {
      axios
        .patch('http://localhost:4000/api/v1/products/' + id, product)
        .then((res) => {

        })
      this.getAllData()
      alert('Update SUccess')
    },
    deleteData (products, id) {
      axios
        .delete('http://localhost:4000/api/v1/products/' + id)
        .then((res) => {

        })
      this.getAllData()
      alert('Delete Success')
    }
  }
}
</script>

<style scoped>
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

@media (max-width: 768px) {
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

/* eslint-disable eqeqeq */
<template>
  <main class="col-md-11 card-body">
    <div class="row">

      <form @submit.prevent="update_Data(product, product.id)" v-for="product in products" :key="product.id">
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
            <input type="file" class="type-img" @change="onFileUpload">
          </div>
          <div class="row data justify-content-between">
            <strong>Price:</strong>
            <input type="text" class="form-control type" v-model="product.price" />
          </div>
          <div class="row data justify-content-between">
            <strong>Category:</strong>
            <select class="form-control type-select" v-model="product.idCategory">
              <option value="2">Food</option>
              <option value="1">Drink</option>
            </select>
          </div>
          <button type="submit" class="btn btn-success">Update</button>
          <button class="btn btn-success" @click="delete_Data(product.id)">Delete</button>
        </div>
      </form>

    </div>
    <article class="row">
      <div class="col-md-2 col-sm-2 mt-md-2 mt-sm-2">
        <h5 class="totalPage">Total Page {{totalPage}}</h5>
      </div>
      <div class="col-md-8 col-sm-8 mt-md-2 mt-sm-2">
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
import { mapActions } from 'vuex'
import DataMixin from '../Home/Home'

export default {
  name: 'Product',
  computed: {
  },
  data () {
    return {
      output: '',
      FILE: null
    }
  },
  mixins: [DataMixin],
  mounted () {
  },
  methods: {
    ...mapActions(['nextPage']),
    ...mapActions(['prevPage']),
    ...mapActions(['getAllData']),
    ...mapActions(['updateData']),
    ...mapActions(['deleteData']),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },
    update_Data (product, id) {
      const formData = new FormData()
      formData.append('name', product.name)
      formData.append('image', this.FILE, this.FILE.name)
      formData.append('price', product.price)
      formData.append('idCategory', product.idCategory)

      const data = {
        formData: formData,
        id: id
      }
      this.updateData(data)
        .then(() => {
        })
      this.$router.push('/home')
      alert('UPDATE DATA SUCCESS')
    },

    delete_Data (id) {
      const data = {
        id: id
      }
      this.deleteData(data)
        .then(() => {
        })
      this.$router.go(0)
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

.type-img {
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

main {
  height: 570px;
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

button {
  width: 80px;
  height: 30px;
  margin-left: 10px;
  padding-top: 1px;
}

@media (max-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 320px;
  }

  article {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 2540px;
  }

  .image {
    width: 300px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }

  h5 {
    font-size: 15px;
    margin: 10px;
  }
  /* h5.totalPage {
    font-size: 15px;
  } */
}

</style>

<template>
  <main class="col-md-11 card-body">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="search-sort row">
          <div class="col-md-10 col-sm-10 d-flex justify-content-start search">
            <Search />
          </div>
          <div class="col-md-2 col-sm-2 sort">
            <Sort />
          </div>
        </div>
      </div>

      <div v-if="allProduct === 'Produk yang anda cari tidak ada'" class="row">
        <h2>Product Not Found</h2>
      </div>
      <div v-else class="row">
      <form @submit.prevent="update_Data(product, product.id)" v-for="product in products" :key="product.id">
        <div class="col">
          <div class="row container-img">
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
          <div>

            <button type="submit" class="btn btn-success">Update</button>
            <button class="btn btn-danger" data-toggle="modal" data-target="#NotifDelete" @click="delete_Data(product.id)">Delete</button>
          </div>
        </div>
      </form>
      </div>

    <Pagination v-if="allProduct !== 'Produk yang anda cari tidak ada'" />
    <!-- <Notif /> -->
    <!-- <NotifDelete :delId='delId' /> -->
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataMixin from '../Home/Home'
import Search from '../../../components/Home/Search'
import Sort from '../../../components/Home/Sort'
import Pagination from '../../../components/Home/Pagination'
// import Notif from '../../../components/Home/Modal-Notif'
// import NotifDelete from '../../../components/Home/Modal-Delete'

export default {
  name: 'Product',
  components: {
    Search,
    Sort,
    Pagination
    // Notif,
    // NotifDelete
  },
  data () {
    return {
      output: '',
      FILE: null,
      delId: null
    }
  },
  mixins: [DataMixin],
  computed: {
    ...mapGetters({
      page: 'page',
      search: 'search',
      sort: 'sort'
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'getData',
      'getAllData',
      'updateData',
      'deleteData',
      'changePage'
    ]),

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
        .then((res) => {
          const data = {
            page: this.page,
            search: this.search,
            sort: this.sort
          }
          this.changePage(data)
          this.$swal({
            icon: 'success',
            title: res.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },

    delete_Data (id) {
      this.delId = id
    },

    option () {
      this.Updel = false
    },

    cancel () {
      this.Updel = true
    }
  }
}
</script>

<style scoped>

.container-img {
  width: 250px;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 10px;
  margin-left: 25px;
}

.image {
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 0px 20px 0px;
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

  .search {
    position: absolute;
    top: -2530px;
    left: -10px
  }

  .sort {
    top: 0px;
    right: -150px;
  }

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
}

</style>

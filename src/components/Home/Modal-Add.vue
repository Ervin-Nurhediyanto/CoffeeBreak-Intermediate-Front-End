<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body col">
          <h5 class="modal-title">Add Item</h5>

          <form>
            <div class="row mt-md-4 mt-sm-4">
              <div class="col-md-2 pl-md-3 pb-md-2 col-sm-2 pl-sm-3 pb-sm-2">
                <h6>Name</h6>
                <h6>Image</h6>
                <h6>Price</h6>
                <h6>Category</h6>
              </div>
              <div class="col-md-10 col-sm-10">
                <input class="mb-md-2 mb-sm-2" v-model="name" placeholder="Name" />
                <input class="mb-md-2 mb-sm-2" type="file" @change="onFileUpload">
                <input class="mb-md-2 mb-sm-2 d-flex justify-content-start price"
                  v-model="price"
                  placeholder="Price"
                />
                <select class="d-flex justify-content-start" v-model="idCategory" placeholder="Category">
                  <option value="2">Food</option>
                  <option value="1">Drink</option>
                </select>
              </div>
            </div>
            <div class="row mt-md-5 p-md-0 mt-sm-5 p-sm-0 d-flex justify-content-end">
              <div class="pr-md-3 pr-sm-3">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
              <div class="pr-md-4 pr-sm-4">
                <button class="btn btn-primary" @click.prevent="add">Add</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Add',
  data () {
    return {
      name: '',
      FILE: null,
      price: '',
      idCategory: '',
      Hasil: ''
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      page: 'page',
      search: 'search',
      sort: 'sort'
    })
  },
  methods: {
    ...mapActions(['addData']),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    add () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('image', this.FILE, this.FILE.name)
      formData.append('price', this.price)
      formData.append('idCategory', this.idCategory)
      this.addData(formData)
        .then((res) => {
          if (res.data.result !== 'jpg Only!') {
            this.$swal({
              icon: 'success',
              title: res.data.result,
              showConfirmButton: false,
              timer: 1500
            })
            this.name = ''
            this.FILE = ''
            this.price = ''
            this.idCategory = ''
          } else {
            this.$swal({
              icon: 'error',
              title: res.data.result,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
      const data = {
        page: this.page,
        search: this.search,
        sort: this.sort
      }
      this.changePage(data)
    }
  }
}
</script>

<style scpred>

/* Modal */

.modal .modal-body h6 {
  height: 35px;
  padding-top: 5px;
}

.modal .modal-body input {
  background: #ffffff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  height: 35px;
}

.modal .modal-body input.price {
  width: 60%;
}

.modal .modal-body select .option {
  color: #cecece;
}

.modal .modal-body select {
  background: #ffffff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 40%;
  height: 35px;
}

.modal .modal-body .btn {
  width: 440px;
  height: 60px;
  font-weight: bold;
  font-size: 30px;
  margin: auto;
  border-radius: 10px;
  border: 0;
}

.modal .modal-body .btn-primary {
  background-color: #57cad5;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  font-size: 15px;
}

.modal .modal-body .btn-danger {
  background-color: #f24f8a;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  font-size: 15px;
}
</style>

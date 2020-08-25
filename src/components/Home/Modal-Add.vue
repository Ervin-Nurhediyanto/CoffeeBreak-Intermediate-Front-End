<template>
  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body col">
          <h5 class="modal-title">Add Item</h5>

          <form @submit.prevent="add">
            <div class="row mt-md-4 mt-sm-4">
              <div class="col-md-2 pl-md-3 pb-md-2 col-sm-2 pl-sm-3 pb-sm-2">
                <h6>Name</h6>
                <h6>Image</h6>
                <h6>Price</h6>
                <h6>Category</h6>
              </div>
              <div class="col-md-10 col-sm-10">
                <input class="mb-md-2 mb-sm-2" v-model="form.name" />
                <input class="mb-md-2 mb-sm-2" v-model="form.image" />
                <input
                  class="mb-md-2 mb-sm-2 d-flex justify-content-start price"
                  v-model="form.price"
                />
                <select class="d-flex justify-content-start" v-model="form.idCategory">
                  <option class="option">Category</option>
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
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Add',
  data () {
    return {
      form: {
        name: '',
        image: '',
        price: '',
        idCategory: ''
      },
      Hasil: ''
    }
  },
  // mounted () {
  //   this.form.name = ''
  //   this.form.image = ''
  //   this.form.price = ''
  //   this.form.idCategory = ''
  // },
  methods: {
    add () {
      axios.post('http://localhost:4000/api/v1/products', this.form)
        .then((res) => {
          this.getData()
        })
      // this.getData()
      this.Hasil = 'ADD DATA SUCCESS'
      alert(this.Hasil)
      // this.form.name = ''
      // this.form.image = ''
      // this.form.price = ''
      // this.form.idCategory = ''
    },
    getData () {
      axios.get('http://localhost:4000/api/v1/products').then((res) => {
        // this.Hasil = 'ADD DATA SUCCESS'
      })
    }
  }
}
</script>

<style scpred>
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.orange {
  background-color: orangered;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

/* End-Background Check */

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

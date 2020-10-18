<template>
  <div class="modal" id="checkModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="col">
            <div class="row p-2 justify-content-between">
              <h4 class="modal-title">Checkout</h4>
              <h5>Receipt no: #010410919</h5>
            </div>
            <div class="d-flex justify-content-start">
              <h6 class="row p-md-2 mb-4 p-sm-2">Cashier : Pevita Pearce</h6>
            </div>
            <div class="row justify-content-between p-2">
              <div class="col-6 list p-0">
                <div v-for="product in products" :key="product.id">
                  <div class="d-flex justify-content-start">
                    <h5 class="desktop">{{product.name}} {{product.countItem}}x</h5>
                    <h5 class="mobile" v-if="product.name.length < 19">{{product.name}} {{product.countItem}}x</h5>
                    <h5 class="mobile more-text" v-else>{{product.name}} {{product.countItem}}x</h5>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <h5>Ppn 10%</h5>
                </div>
              </div>
              <div class="col-6 price">
                <div class="row justify-content-between">
                  <div
                    class="col-6 p-0 m-0 d-flex justify-content-end align-items-end total"
                  >
                    <h5><b>Total :</b></h5>
                  </div>
                  <div class="col-6 pr-0">
                      <div v-for="product in products" :key="product.id">
                        <div class="d-flex justify-content-start">
                          <h5>Rp.{{product.price * product.countItem}}</h5>
                        </div>
                      </div>
                      <div class="d-flex justify-content-start">
                        <h5>(Rp.{{totalPrice / 10}})</h5>
                      </div>
                    <div class="d-flex justify-content-start">
                      <h5><b>Rp.{{totalPrice + (totalPrice / 10)}}</b></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col ml-0 mb-5 p-0 payment">
              <div class="d-flex justify-content-start">
                <h5>Payment: Cash</h5>
              </div>
            </div>
            <div class="col mb-2">
              <button type="button" class="btn btn-primary" @click="handlePrint">Print</button>
              <h4 class="or">Or</h4>
              <button type="button" class="btn btn-secondary" @click="handleSendEmail">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  props: ['products'],
  computed: {
    ...mapGetters({
      productList: 'productList',
      totalPrice: 'totalPrice'
    })
  },
  methods: {
    handlePrint () {
      this.$swal({
        icon: 'info',
        title: 'Maintenance Server',
        showConfirmButton: false,
        timer: 1500
      })
    },
    handleSendEmail () {
      this.$swal({
        icon: 'info',
        title: 'Maintenance Server',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
</script>

<style scoped>
/* Modal */
.modal .modal-body .price {
  padding-left: 5px;
}
.modal .modal-body .list h5 {
  font-size: 15px;
}
.modal .modal-body .total h5 {
  font-size: 15px;
}
.modal .modal-body .price h5 {
  font-size: 15px;
}
.modal .modal-body h6 {
  font-size: 13px;
}
.modal .modal-body .total {
  justify-content: flex-end;
}
.modal .modal-body .btn {
  width: 400px;
  height: 60px;
  font-weight: bold;
  font-size: 30px;
  border-radius: 10px;
  border: 0;
}
.modal .modal-body .or {
  text-align: center;
  font-size: 20px;
}
.modal .modal-body .btn-primary {
  background-color: #f24f8a;
}
.modal .modal-body .btn-secondary {
  background-color: #57cad5;
}
.modal .modal-body button h3 {
  width: 340px;
  height: 44px;
}
.modal-title {
  font-size: 20px;
}
.mobile {
  display: none;
}

@media (max-width: 922px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: inline;
  }
}

@media (max-width: 576px) {
  .modal .modal-body .list h5.more-text {
    font-size: 12px;
  }
  .modal .modal-body .btn {
    width: 200px;
    height: 60px;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    border: 0;
}
}
</style>

<template>
  <!-- The Modal -->
  <div class="modal" id="checkModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body">
          <div class="col">
            <div class="row p-md-2 p-sm-2 justify-content-between">
              <h4 class="modal-title">Checkout</h4>
              <h5>Receipt no: #010410919</h5>
            </div>
            <div class="d-flex justify-content-start">
              <h6 class="row p-md-2 mb-md-4 p-sm-2 mb-sm-4">Cashier : Pevita Pearce</h6>
            </div>
            <div class="row justify-content-between">
              <div class="col-md-6 col-sm-6 list">
                <div v-for="product in products" :key="product.id">
                  <div class="d-flex justify-content-start">
                    <h5>{{product.name}} {{product.quality}}x</h5>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <h5>Ppn 10%</h5>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 price">
                <div class="row justify-content-between">
                  <div
                    class="col-md-6 p-md-0 m-md-0 col-sm-6 p-sm-0 m-sm-0 d-flex justify-content-end align-items-end total"
                  >
                    <h5><b>Total :</b></h5>
                  </div>
                  <div class="col-md-6 pr-md-0 col-sm-6 pr-sm-0">
                      <div v-for="product in products" :key="product.id">
                        <div class="d-flex justify-content-start">
                          <h5>Rp.{{product.price}}</h5>
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
            <div class="col ml-md-0 mb-md-5 p-md-0 ml-sm-0 mb-sm-5 p-sm-0 payment">
              <div class="d-flex justify-content-start">
                <h5>Payment: Cash</h5>
              </div>
              <!-- <h2>{{products}}</h2> -->
            </div>
            <div class="col mb-md-2 mb-sm-2">
              <button type="button" class="btn btn-primary">Print</button>
              <h4 class="or">Or</h4>
              <button type="button" class="btn btn-secondary">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  props: ['products', 'totalPrice'],
  computed: {
    // total: function () {
    //   let totalPrice = 0
    //   this.products.map((item) => {
    //     totalPrice += item.price
    //   })
    //   return totalPrice
    // }
    // priceTotal: function () {
    //   let totalPrice = 0
    //   totalPrice += (this.products.price * this.quality)
    //   return totalPrice
    // }
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

</style>

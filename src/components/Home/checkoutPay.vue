<template>
  <div class="btm col">
    <div class="row pl-md-3 pr-md-3 pl-sm-3 pr-sm-3">
      <h3>Total:</h3>
      <h3>Rp.{{totalPrice}}*</h3>
    </div>
    <p>*Belum termasuk ppn</p>
    <div class="checkout" data-toggle="modal" data-target="#checkModal">
      <h3>Checkout</h3>
    </div>
    <div class="cancel" @click="cancel">
      <h3>Cancel</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  props: ['name', 'image', 'price', 'id', 'totalPrice'],
  data () {
    return {
      total: 0
    }
  },
  mounted () {
    this.getTotal()
  },
  methods: {
    cancel () {
      this.$emit('cancel', { empty: true, count: 0, select: false })
    },
    getTotal () {
      this.total += this.price
    }
  }
}
</script>

<style scoped>
/* Background Check */

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}

/* Image, Text */

.image-cart {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  padding-top: 0;
}

/* Aside */

aside {
  background: #ffffff;
  border: 1px solid #cecece;
}

aside .cart {
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;
}

aside .cart .count {
  background: #57cad5;
  border-radius: 100%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
}

/* Aside List */

aside .scroll {
  height: 610px;
  overflow-y: scroll;
}

aside .scroll::-webkit-scrollbar {
  display: none;
}

aside .list .col {
  width: 100%;
  padding: 20px;
}

aside .list .row {
  justify-content: start;
}

aside .list .select {
  margin-bottom: 15px;
}

aside .list .item {
  height: 100%;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
}

aside .list .item h3 {
  font-size: 25px;
}

aside .list .price {
  margin-top: auto;
  justify-content: space-between;
}

aside .list .price .row {
  margin-right: 10px;
}

aside .list .price h4 {
  font-size: 15px;
}

/* Aside btm*/

aside .btm {
  margin-top: auto;
  margin-bottom: 0;
  padding: 40px 20px 20px 20px;
}

aside .btm .row {
  justify-content: space-between;
}

aside .btm p {
  margin-top: 5px;
}

aside .btm .checkout {
  background-color: #57cad5;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  color: #ffffff;
}

aside .btm .checkout button {
  width: 100%;
  background-color: #57cad5;
  border: 0;
}

aside .btm .cancel {
  background-color: #f24f8a;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  color: #ffffff;
}

@media (max-width: 768px) {
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
  .checkout, .cancel {
      height: 30px;
      justify-content: center;
      font-weight: bold;
  }
}

@media (max-width: 576px) {
  .icon {
    width: 15px;
    height: 15px;
  }
  .image {
    width: 180px;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
  }
  main {
    height: 600px;
  }
  main .menu .row {
    flex-direction: column;
  }
  article h6 {
    font-size: 20px;
  }
  aside .scroll {
    overflow-y: scroll;
    height: 600px;
  }
  aside .scroll::-webkit-scrollbar {
    display: none;
  }
  aside .list h3 {
    font-size: 12px;
    flex-direction: column;
  }
  aside .list h4 {
    flex-direction: column;
    font-size: 12px;
    padding-top: 5px;
  }
  aside .list .select {
    justify-content: center;
    padding: 10px;
    padding-top: 0;
  }
  aside .list .price {
    flex-direction: column;
  }
  aside .btm {
    padding: 5px;
  }
  .btm h3 {
    font-size: 11px;
  }
  .btm p {
    font-size: 10px;
  }
  .checkout, .cancel {
      height: 200px;
  }
}
</style>

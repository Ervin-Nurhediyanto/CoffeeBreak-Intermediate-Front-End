<template>
  <div class="row cart m-md-0 m-sm-0">
    <i class="fas fa-backspace mobile" @click="handleCloseCart"></i>
    <h2>Cart<span class="count" >{{cartCount}}</span></h2>
    <div class="mobile"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      cartCount: 'cartCount'
    })
  },
  methods: {
    handleCloseCart () {
      this.$emit('handleCloseCart', false)
    }
  }
}
</script>

<style scoped>
h2, h3, h4, button {
  font-family: Airbnb Cereal App;
}
.cart {
  justify-content: center;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;
}
.cart .count {
  background: #57cad5;
  border-radius: 100%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
}
.mobile {
  display: none;
}

@media (max-width: 922px) {

}

@media (max-width: 768px) {
  .mobile {
    display: inline;
  }
  i {
    font-size: 20px;
    cursor: pointer;
  }
  i:hover {
    color: red;
  }
  .cart {
    justify-content: space-between;
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
  aside .btm .checkout {
    margin-top: 10px;
  }
  aside .btm .checkout {
    padding: 5px;
  }
  aside .btm .cancel {
    padding: 10px;
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
  aside .btm h3 {
    font-size: 11px;
  }
  aside .btm p {
    font-size: 10px;
  }
}
</style>

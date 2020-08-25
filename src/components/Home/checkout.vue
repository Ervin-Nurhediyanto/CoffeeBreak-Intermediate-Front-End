<template>
  <div v-show="active" class="row m-md-0 m-sm-0 justify-content-start list">
    <div class="col p-md-3 p-sm-1">
      <div class="row m-md-2 p-md-0 m-sm-2 p-sm-0 select">
        <img class="image-cart" :src="image" />
        <div class="col item m-md-0 m-sm-0">
          <h3>{{name}}</h3>
          <div class="row m-md-0 m-sm-0 price justify-content-between">
            <div class="row m-md-0 pb-md-0 m-sm-0 pb-sm-0">
              <button class="min" @click="minus">-</button>
              <button class="qly">{{quality}}</button>
              <button class="pls" @click="plus">+</button>
            </div>
            <h5>Rp.{{total}}</h5>
            <!-- <h5>{{total}}</h5> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Checkout',
  props: ['name', 'image', 'price', 'id'],
  data () {
    return {
      quality: 1,
      active: true
    }
  },
  mounted () {
  },
  computed: {
    total: function () {
      let totalPrice = 0
      totalPrice += (this.price * this.quality)
      return totalPrice
    }
  },
  methods: {
    plus () {
      this.quality += 1
      this.$emit('plus', { total: this.price, quality: this.quality, id: this.id })
    },
    minus () {
      if (this.quality > 1) {
        this.quality -= 1
        this.$emit('minus', { total: this.price, count: 0, quality: this.quality })
      } else {
        this.active = false
        this.$emit('minus', { total: this.price, count: -1, quality: this.quality })
      }
    },
    cancel () {
      this.$router.push({
        name: 'history',
        params: {
          empty: 'true'
        }
      })
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
    /* font-size: 8px; */
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

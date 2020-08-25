<template>
  <header class="row justify-content-between">
    <img class="icon" src="../../assets/menu.png" />
    <h2 class>Food Items</h2>
    <div class="row">
      <img class="icon" src="../../assets/magnifying-glass.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      search: '',
      active: true
    }
  },
  methods: {
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

h2,
h3,
h4,
button {
  font-family: Airbnb Cereal App;
}

/* Header */

header {
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
}

header.row {
  justify-content: space-between;
}

header h2,
aside .cart h2 {
  font-size: 30px;
  line-height: 39px;
  color: #000000;
}

.icon {
  width: 35px;
  height: 35px;
  margin-left: 5px;
}
input {
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
}
@media (max-width: 768px) {
  .icon {
    width: 20px;
    height: 20px;
  }
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

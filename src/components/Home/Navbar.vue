<template>
  <nav class="col-md">
    <img class="icon" src="../../assets/fork.png" @click="linkHome" />
    <img class="icon" src="../../assets/clipboard.png" @click="linkHistory" />
    <img class="icon" src="../../assets/add.png" data-toggle="modal" data-target="#myModal" />
    <img class="icon" src="../../assets/product.png" @click="linkProduct" />
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    linkHistory () {
      this.$router.push({
        name: 'history'
      })
    },
    linkHome () {
      this.$router.push({
        name: 'home'
      })
    },
    linkProduct () {
      this.$router.push({
        name: 'product'
      })
    }
  }
}
</script>

<style scoped>

.icon {
  width: 35px;
  height: 35px;
  margin-left: 5px;
}

nav .col {
  width: 50px;
}
nav {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
nav.col-md {
  display: flex;
  flex-direction: column;
  width: 10%;
}
nav.nav {
  display: flex;
  flex-direction: column;
  width: 5%;
}
nav .icon {
  margin-top: 20px;
}

nav button.btn-primary {
  background-color: transparent;
  padding-left: 0;
  border: 0;
}

@media (max-width: 768px) {
  .icon {
    width: 20px;
    height: 20px;
  }
  nav {
    width: 250px;
  }

  nav.nav {
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  nav img {
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
  article h4.text {
    /* font-size: 9px; */
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

<template>
  <nav>
    <img class="icon" title="Home" alt="Home" src="../../assets/fork.png" @click="linkHome" />
    <img class="icon" title="History" alt="History" src="../../assets/clipboard.png" @click="linkHistory" />
    <img class="icon" title="Add Product" alt="Add Product" src="../../assets/add.png" data-toggle="modal" data-target="#myModal" />
    <img class="icon" title="Products" alt="Products" src="../../assets/product.png" @click="linkProduct" />
    <img class="icon" title="Logout" alt="Logout" src="../../assets/logout.png" @click="linkLogout" />
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout']),

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
    },
    linkLogout () {
      this.$router.go(0)
      this.logout()
    }
  }
}
</script>

<style scoped>
.icon {
  width: 35px;
  height: 35px;
  margin-left: 12px;
  margin-top: 30px;
  cursor: pointer;
}

.icon:hover {
  width: 40px;
  height: 40px;
  margin-top: 25px;
}

nav {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 85px;
  height: 585px;
  margin-left: 14px;
  padding-left: 9px;
}

@media (max-width: 768px) {
  .icon {
    width: 20px;
    height: 20px;
  }
  nav {
    width: 6%;
    height: 310px;
    margin-left: 0;
    padding-right: 5px;
    padding-left: 5px;
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

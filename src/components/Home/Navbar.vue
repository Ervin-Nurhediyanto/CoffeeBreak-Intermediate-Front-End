<template>
  <nav class="col-1">
    <img
      class="icon"
      title="Home"
      alt="Home"
      src="../../assets/fork.png"
      @click="linkHome"
    />
    <img
      class="icon"
      title="History"
      alt="History"
      src="../../assets/clipboard.png"
      @click="linkHistory"
    />
    <img
      class="icon"
      title="Add Product"
      alt="Add Product"
      src="../../assets/add.png"
      data-toggle="modal"
      data-target="#myModal"
    />
    <img
      class="icon"
      title="Products"
      alt="Products"
      src="../../assets/product.png"
      @click="linkProduct"
    />
    <img
      class="icon"
      title="Logout"
      alt="Logout"
      src="../../assets/logout.png"
      @click="linkLogout"
    />
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
  margin-left: 5px;
}
.icon:hover {
  width: 40px;
  height: 40px;
}
nav .col {
  width: 50px;
}
nav {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
nav .icon {
  margin-top: 30px;
  cursor: pointer;
}
nav .icon:hover {
  margin-top: 25px;
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
  .icon:hover {
    width: 25px;
    height: 25px;
    margin-top: 25px;
  }
  nav {
    width: 250px;
  }
  .image {
    width: 100px;
    height: 80px;
    border-radius: 10px 10px 0px 0px;
  }
}

@media (max-width: 576px) {
  nav {
    padding: 0;
  }
  .icon {
    width: 15px;
    height: 15px;
  }
  .icon:hover {
    width: 20px;
    height: 20px;
    margin-top: 25px;
  }
}
</style>

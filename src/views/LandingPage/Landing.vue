<template>
  <div class="main">

    <h1 class="cafe">Coffee Break Cafe</h1>
    <div class="text">
      <h1>Mau ngopi enak ga bikin kembung?</h1>
      <h2>Disini solusinya</h2>
      <h3>Kopi pilihan dari biji kopi terbaik</h3>
      <h3 class="text-white">Buruan pesan sekarang</h3>
    </div>

    <!-- <div class="list"> -->
      <div class="col slide">
        <div class="col">
         <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cappucino.jpg" />
          <h5>Cappucino</h5>
        </div>
        <div class="col">
          <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Espresso.jpg" />
         <h5>Espresso</h5>
        </div>
        <div class="col">
          <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cofee%20Latte.jpg" />
          <h5>Cofee Latte</h5>
        </div>
      </div>
    <!-- </div> -->

    <div class="col order">
      <button v-show="order" @click="handleOrder" class="submit">Order Now</button>
      <div v-show="loginRegister" class="col">
        <button @click="login" class="submit">Login</button>
        <button @click="handleRegister" class="submit">Register</button>
      </div>
      <div v-show="regAdminUser" class="col">
        <button @click="registerAdmin" class="submit">Admin</button>
        <button @click="registerUser" class="submit">User</button>
      </div>
    </div>

  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'RegisterUser',
  data () {
    return {
      order: true,
      loginRegister: false,
      regAdminUser: false
    }
  },
  methods: {
    handleOrder () {
      this.order = false
      this.loginRegister = true
    },
    handleRegister () {
      this.loginRegister = false
      this.regAdminUser = true
    },
    login () {
      this.$router.push('/login')
    },
    registerUser () {
      this.$router.push('/register')
    },
    registerAdmin () {
      this.$router.push('/registerAdmin')
    }
  }
}
// e.preventDefault()
// const data = {
//   email: this.email,
//   password: this.password,
//   firstName: this.firstName,
//   lastName: this.lastName
// }
// this.register(data).then(() => {
//   this.$router.push('/login')
// })

// ...mapActions(['register'])
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}

.red {
  background-color: red;
}

.image {
    width: 250px;
    height: 180px;
    border-radius: 10px;
}

/* .list {
    height: 200px;
    width: 320px;
} */

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: url("../../assets/bg-coffee-break.jpg");
  filter: brightness(80%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 663px;
}

.cafe {
  /* margin-bottom: 20px; */
  background-color: transparent;
  color: aliceblue;
  font-weight: bold;
  text-shadow: 3px 3px #ff0000;
  position: absolute;
  top: 20px;
  font-size: 50px;
}

.text {
  position: absolute;
  top: 150px;
}

.text h1, .text h2, .text h3 {
  font-weight: bold;
  text-shadow: 2px 2px rgb(2, 238, 2);
}

.slide {
    position: absolute;
    top: 330px;
    overflow-y: scroll;
    height: 200px;
    width: 320px;
    /* margin-bottom: 20px; */
}

.slide::-webkit-scrollbar {
    display: none;
}

.slide h5 {
  font-weight: bold;
  color: aqua;
  text-shadow: 3px 3px rgb(44, 49, 44);
}

.order {
  position: absolute;
  top: 550px
}

.submit {
  width: 120px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  border: none;
  box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.submit:hover {
  width: 120px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  box-shadow: inset -2px -2px #ffffff73, inset 4px 4px rgba(94, 104, 121, 0.288);
}

</style>

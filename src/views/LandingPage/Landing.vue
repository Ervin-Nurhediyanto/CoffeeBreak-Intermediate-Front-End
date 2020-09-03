<template>
  <div class="main">

    <h1 class="cafe">Coffee Break Cafe</h1>
    <!-- <div class="text">
      <h1>Mau ngopi enak ga bikin kembung?</h1>
      <h2>Disini solusinya</h2>
      <h3>Kopi pilihan dari biji kopi terbaik</h3>
      <h3 class="text-white">Buruan pesan sekarang</h3>
    </div> -->

      <div class="col slide">
        <div class="col">
          <div class="container-image">
         <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cappucino.jpg" />
          </div>
          <h5>Cappucino</h5>
        </div>
        <div class="col">
          <div class="container-image">
          <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Espresso.jpg" />
          </div>
         <h5>Espresso</h5>
        </div>
        <div class="col">
          <div class="container-image">
          <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cofee%20Latte.jpg" />
          </div>
          <h5>Cofee Latte</h5>
        </div>
      </div>

    <div class="col order">
      <button v-show="order" @click="handleOrder" class="submit">Order Now</button>
      <div v-show="loginRegister" class="col">
        <button @click="login" class="submit">Login</button>
        <button @click="registerUser" class="submit">Register</button>
      </div>
      <!-- <div v-show="regAdminUser" class="col">
        <button @click="registerAdmin" class="submit">Admin</button>
        <button @click="registerUser" class="submit">User</button>
      </div> -->
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

.container-image {
  width: 270px;
  height: 200px;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.image {
  width: 100%;
  height: 100%;
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
  background-image: url("../../assets/bg_coffee.jpg");
  /* filter: brightness(80%); */
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
  top: 130px;
  background-image: url('../../assets/bg-coffee2.jpg');
  background-size: 100% 100%;
  border-radius: 20px 0 20px 0;
  padding: 10px;
  filter: brightness(90%);
}

.text h1, .text h2, .text h3 {
  font-weight: bold;
  color: rgb(248, 13, 13);
  text-shadow: 2px 2px rgb(242, 243, 242);
}

.text h3.text-white {
  text-shadow: 2px 2px rgb(246, 26, 26);
}

.slide {
    position: absolute;
    top: 117px;
    left: 0px;
    overflow-y: scroll;
    height: 250px;
    width: 350px;
}

.slide::-webkit-scrollbar {
    display: none;
}

.slide h5 {
  font-size: 30px;
  font-weight: bold;
  color: rgb(255, 238, 3);
  text-shadow: 3px 3px rgb(44, 49, 44);
  margin-bottom: 20px;
}

.order {
  position: absolute;
  top: 380px;
  left: -510px;
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

@media (max-width: 768px) {
  .main {
    height: 360px;
  }
  .text {
    display: none;
  }
  .text h1, .text h2, .text h3 {
    font-size: 15px;
  }
  .cafe {
    font-size: 40px;
  }
  .slide {
    position: absolute;
    top: 80px;
  }
  .order {
  position: absolute;
  top: 300px
  }
}

@media (max-width: 576px) {
  .main {
    height: 640px;
    background-size: auto 100%;
  }
  .text {
    position: absolute;
    top: 80px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100px;
  }
  .text h1, .text h2, .text h3 {
    font-size: 20px;
  }
  .text h2, .text h3 {
    display: none;
  }
  .text h3.text-white {
    display: flex;
  }
  .cafe {
    font-size: 30px;
  }
  .slide {
    position: absolute;
    top: 270px;
  }
  .order {
    position: absolute;
    top: 480px
  }
}

</style>

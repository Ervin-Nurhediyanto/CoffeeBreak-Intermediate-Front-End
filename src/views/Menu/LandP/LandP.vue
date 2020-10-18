<template>
  <div>
    <div class="cofe-text">
      <h1>Start your day with a black Coffee</h1>
    </div>
    <div class="col slide">
      <div class="col">
        <div class="container-image">
          <img
            class="image"
            src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cofee%20Latte.jpg"
          />
        </div>
        <h5>Cofee Latte</h5>
      </div>
      <div class="col">
        <div class="container-image">
          <img
            class="image"
            src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Espresso.jpg"
          />
        </div>
        <h5>Espresso</h5>
      </div>
      <div class="col">
        <div class="container-image">
          <img
            class="image"
            src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cappucino.jpg"
          />
        </div>
        <h5 class="last">Cappucino</h5>
      </div>
    </div>
    <div class="col order">
      <button v-show="order" @click="handleOrder" class="submit">
        Order Now
      </button>
      <div v-show="loginRegister" class="col">
        <button @click="login" class="submit">Login</button>
        <button @click="registerUser" class="submit">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Land-p',
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
    home () {
      this.$router.push('/landingpage')
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
</script>

<style scoped>
.cofe-text {
  max-width: 450px;
  display: flex;
  position: absolute;
  top: 150px;
  left: 100px;
}

.cofe-text h1 {
  color: seashell;
  font-size: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.slide {
  position: absolute;
  top: 277px;
  left: 128px;
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

.container-image {
  width: 270px;
  height: 200px;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.image {
  width: 270px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.order {
  position: absolute;
  top: 539px;
  left: -340px;
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

@media (max-width: 992px) {
  .order {
    top: 539px;
    left: -165px;
  }
}

@media (max-width: 768px) {
  .cofe-text {
    top: 80px;
    left: 150px;
  }
  .cofe-text h1 {
    font-size: 25px;
  }
  .slide {
    top: 127px;
    left: 128px;
    height: 175px;
    width: 350px;
  }
  .slide h5 {
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 238, 3);
    text-shadow: 3px 3px rgb(44, 49, 44);
    margin-bottom: 5px;
  }

  .slide h5.last {
    margin-bottom: 0;
  }

  .container-image {
    width: 270px;
    height: 150px;
    margin-left: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
  .order {
    top: 315px;
    left: 10px;
  }

  .submit {
    width: 100px;
    height: 25px;
    font-size: 15px;
  }

  .submit:hover {
    width: 100px;
    height: 25px;
  }
}

@media (max-width: 576px) {
  .slide {
  top: 530px;
  left: 30px;
  overflow-y: scroll;
  height: 240px;
  width: 350px;
}

.container-image {
    width: 300px;
    height: 200px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide h5 {
  font-size: 35px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.order {
    top: 300px;
    left: 60px;
  }

  .submit {
    width: 200px;
    height: 50px;
    font-size: 20px;
  }

  .submit:hover {
    width: 200px;
    height: 50px;
  }

  .cofe-text {
    width: 300px;
    top: 200px;
    left: 90px;
  }
  .cofe-text h1 {
    font-size: 30px;
  }
}
</style>

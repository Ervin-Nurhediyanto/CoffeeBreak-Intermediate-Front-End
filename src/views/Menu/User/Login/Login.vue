<template>
    <div class="login">
      <form>
        <p>LOGIN</p>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control type" v-model="email" placeholder="Enter email" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control type" v-model="password" placeholder="Enter Password">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary submit" @click="handleLogin" data-toggle="modal" data-target="#Notif">Login</button>
        </div>
        <h4>Belum punya akun? Silahkan <span class="register" @click="register">Register</span></h4>
      </form>
      <Notif
      />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Notif from '../../../../components/Home/Modal-Notif'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Notif
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.$router.go(0)
      this.login(data)
        .then((res) => {
          this.$router.push('/home')
        })
    },
    register () {
      this.$router.push('/register')
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.red {
  background-color: red;
}

* {
  margin: 0;
  padding: 0;
  background-color: #dde1e7;
  font-family: "Courier New", Courier, monospace;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px;
  background-image: url("../../../../assets/bg-coffee-break.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 663px;
}

.cafe {
  margin-bottom: 20px;
  background-color: transparent;
  color: aliceblue;
  font-weight: bold;
  text-shadow: 3px 3px #ff0000;
  position: absolute;
  top: 20px;
  font-size: 50px
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: #dde1e7;
  border-radius: 20px;
  box-shadow: -3px -3px #ffffff73, 5px 5px rgba(94, 104, 121, 0.288);
}

.login:hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: #dde1e7;
  border-radius: 20px;
  box-shadow: inset -3px -3px #ffffff73, inset 5px 5px rgba(94, 104, 121, 0.288);
}

.login p,
input {
  margin: 0px 0px 15px 0px;
}

p {
  font-size: 50px;
}

.type {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  padding: 0px 15px 0px 15px;
  box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
  border: none;
  outline: none;
  transition: width 1s;
}

.type:hover {
  width: 180px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  box-shadow: inset -2px -2px #ffffff73, inset 4px 4px rgba(94, 104, 121, 0.288);
  border: none;
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
}

.submit:hover {
  width: 120px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  box-shadow: inset -2px -2px #ffffff73, inset 4px 4px rgba(94, 104, 121, 0.288);
}

h4{
font-size: 12px;
color: black;
}

.register {
  cursor: pointer;
  color: blue;
}

@media (max-width: 768px) {
  * {
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-family: "Courier New", Courier, monospace;
  }
  .main {
    height: 360px;
  }
  .login {
    position: absolute;
    top: 80px;
    width: 300px;
    height: 270px;
  }
  .login:hover {
    width: 300px;
    height: 270px;
  }
  p {
  font-size: 40px;
  }
  form {
    position: absolute;
    top:20;
  }
  input {
  margin: 0px 0px 15px 0px;
  }
  .login p {
  margin: 0px 0px 0px 0px;
  }
}

@media (max-width: 576px) {
  .main {
    height: 711px;
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

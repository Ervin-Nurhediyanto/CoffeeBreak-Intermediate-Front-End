<template>

    <div class="register">
      <form>
        <p>Register</p>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control type" v-model="email" placeholder="Enter email" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control type" v-model="password" placeholder="Enter Password">
      </div>
      <div class="form-group">
        <label>First name</label>
        <input type="text" class="form-control type" v-model="firstName" placeholder="First name">
      </div>
      <div class="form-group">
        <label>Last name</label>
        <input type="text" class="form-control type" v-model="lastName" placeholder="Last name">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary submit" @click="handleRegister" data-toggle="modal" data-target="#Notif">Register</button>
      </div>
      <h4>Sudah punya akun? Silahkan <span class="login" @click="login">Login</span></h4>
    </form>
    <!-- <Notif /> -->
    </div>

</template>

<script>
import { mapActions } from 'vuex'
// import Notif from '../../../../components/Home/Modal-Notif'

export default {
  name: 'RegisterUser',
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  components: {
    // Notif
  },
  methods: {
    handleRegister (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.register(data)
        .then((res) => {
          this.$swal({
            icon: 'success',
            title: 'Register Success',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.result,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    login () {
      this.$router.push('/login')
    },
    ...mapActions(['register'])
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 330px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px;
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
  font-size: 50px;
}

.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  background-color: #dde1e7;
  border-radius: 20px;
  box-shadow: -3px -3px #ffffff73, 5px 5px rgba(94, 104, 121, 0.288);
}

.register:hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  background-color: #dde1e7;
  border-radius: 20px;
  box-shadow: inset -3px -3px #ffffff73, inset 5px 5px rgba(94, 104, 121, 0.288);
}

input {
  margin: 0px 0px 15px 0px;
}

.register p {
  margin: 0px 0px 0px 0px;
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

.login {
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
    height: 560px;
  }
  .register {
    position: absolute;
    top: 80px;
    width: 300px;
    height: 420px;
  }
  .register:hover {
    width: 300px;
    height: 420px;
  }
  p {
  font-size: 35px;
  }
  form {
    position: absolute;
    top:20;
  }
  input {
  margin: 0px 0px 15px 0px;
  }
  .register p {
  margin: 0px 0px 0px 0px;
  }
}

@media (max-width: 576px) {
  .register {
    top: 200px;
    left: 90px;
    height: 430px;
  }
  .register:hover {
    height: 430px;
  }
  p {
    font-size: 40px;
  }
  h4 {
    font-size: 15px;
  }
}

</style>

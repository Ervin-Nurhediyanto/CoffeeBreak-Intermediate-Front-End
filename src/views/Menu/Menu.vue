<template>
  <div class="cover-bg">
    <div class="manu-landP">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="home">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="login">Login</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="registerUser">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="coffee">
      <div class="main">
        <h1 class="cafe">Coffee Break Cafe</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

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
    home () {
      this.$router.push('/landP')
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

* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}

/* nav */
.navbar {
  margin: 18px;
}

#nav-menu-container {
  margin: 0;
}

.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 99;
}

.nav-menu li {
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  top: 0;
  left: 100%;
}

.nav-menu ul li {
  min-width: 180px;
  text-align: left;
}
/* end-nav */

.coffee {
  background-image: url("../../assets/header-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 603px;
}

.cafe {
  background-color: transparent;
  color: rgb(205, 214, 166);
  font-weight: bold;
  text-shadow: 3px 3px #2a2626;
  position: absolute;
  top: 0px;
  font-size: 50px;
}

@media (max-width: 768px) {
  .navbar {
    margin: 18px;
    max-width: 100px;
    position: absolute;
    top: 0px;
  }
  .navbar button {
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 10px 0 10px 0;
    border: none;
    box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
    outline: none;
    cursor: pointer;
  }

  #navbarNav {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: -2px -2px #ffffff73, 4px 4px rgba(94, 104, 121, 0.288);
    outline: none;
    cursor: pointer;
  }

  #navbarNav ul li a {
    color: white;
  }

  #navbarNav ul li a:hover {
    color: red;
  }

  .cafe {
    top: 5px;
    left: 80px;
  }
}

@media (max-width: 576px) {
  .cover-bg {
    width: 500px;
  }
  .cafe {
    width: 400px;
    top: 20px;
    left: 60px;
  }

  h1.cafe {
    font-size: 35px;
  }
  .navbar {
    margin: 18px;
    min-width: 430px;
    position: absolute;
    top: 0px;
  }
}

</style>

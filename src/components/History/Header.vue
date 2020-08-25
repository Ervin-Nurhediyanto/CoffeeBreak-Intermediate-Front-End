<template>
  <header>
    <div class="menubar">
      <img class="icon" src="../../assets/menu.png" />
    </div>
    <div class="history">
      <h4 class>History</h4>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.icon {
  width: 35px;
  height: 35px;
}
/* header */

header {
  display: flex;
  flex-direction: row;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  height: 80px;
}

header .menubar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  width: 6%;
  /* padding: auto; */
  /* background-color: yellow; */
}
header .history {
  display: flex;
  flex-direction: column;
  width: 94%;
  /* background-color: red; */
  padding: 15px;
}
header h4 {
  font-size: 30px;
}

@media (max-width: 768px) {
  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
    height:50px;
  }
  header .menubar {
  margin-top: 10px;
  margin-left: 10px
}
header .col-md {
  margin-top: 10px
}
  .icon {
    width: 25px;
    height: 25px;
  }
  h4 {
    font-size: 20px;
  }
}

@media (max-width:768px) {
  .icon {
    width: 20px;
    height: 20px;
    /* margin-right: 5px; */
  }
  header .menubar {
  margin-top: 5px;
  margin-left: 0;
  padding-left: 10px;
  }
}
</style>

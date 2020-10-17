<template>
  <header class="row justify-content-between">
    <img class="icon" src="../../assets/menu.png" />
    <h2 class>History</h2>
    <div class="row"></div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
}
.icon {
  width: 35px;
  height: 35px;
  margin-left: 20px;
}
header h2 {
  font-family: Airbnb Cereal App;
  font-size: 30px;
  line-height: 39px;
  color: #000000;
}
</style>

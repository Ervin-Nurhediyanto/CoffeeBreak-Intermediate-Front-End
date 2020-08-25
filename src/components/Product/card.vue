<template>
   <div>
    <img class="image" :src="image" />
    <h5>{{id}}</h5>
    <h5>{{name}}</h5>
    <h4>Rp. {{price}}</h4>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['id', 'name', 'image', 'price']
}
</script>

<style scoped>

h4,
h5,
button {
  font-family: Airbnb Cereal App;
}

.image {
  width: 220px;
  height: 180px;
  border-radius: 10px 10px 0px 0px;
}
div{
  margin: 10px;
}

</style>

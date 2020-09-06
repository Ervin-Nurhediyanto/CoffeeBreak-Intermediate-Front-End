<template>

  <div class="dropdown">
    <input type="checkbox" name="" id="">
    <div class="text">Sort</div>
    <span></span>
    <i class="fa fa-caret-down fa-2x"></i>
      <ol>
        <li><a href="#" @click="handleSort('name')">a-z</a></li>
        <li><a href="#" @click="handleSort('name&order=DESC')">z-a</a></li>
        <li><a href="#" @click="handleSort('price')">low price</a></li>
        <li><a href="#" @click="handleSort('price&order=DESC')">high price</a></li>
      </ol>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Sort',
  data () {
    return {
      sort: ''
    }
  },
  // mounted () {
  //   this.getDataSort()
  // },
  methods: {
    ...mapActions(['getDataSort']),
    handleSort (sort) {
      this.getDataSort(sort)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>

.blue {
    background-color: blue;
}

/* *{
    margin: 0;
    padding: 0;
}
.dropdown{
    width: 150px;
    margin: 10px auto;
    position: relative;
}
.dropdown select{
    position: absolute;
    width: 100%;
    height: 50px;
    z-index: 10000;
    opacity: 0;
    cursor: pointer;
}
.dropdown .text{
    font-size: 1.1rem;
    width: 100%;
    height: 50px;
    line-height: 50px;
    transition: all 0.4s;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.dropdown i{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transition: all 0.4s;
    text-align: center;
    line-height: 50px;
}
.dropdown span{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    border-radius: 50px;
    z-index: -1;
    transition: all 0.4s;
}
.dropdown select:hover ~span{
    width: 110%;
}
.dropdown select:hover ~ .text{
    color: white;
}
.dropdown select:checked ~ i{
    transform: rotate(-180deg);
}
.dropdown option{
    display: none;
    list-style: none;
    margin: 10px 0 0 10px;
}
.dropdown option{
    height: 50px;
    background-color: black;
    margin: 0 0 10px 0;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    border-radius: 50px;
}
.dropdown option{
    color: white;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.dropdown select:checked ~ ol{
    display: block;
}
.dropdown option:hover{
    background-color: rgb(72, 72, 72);
} */

*{
    margin: 0;
    padding: 0;
}
.dropdown{
    width: 150px;
    margin: 10px auto;
    position: relative;
    right: 20px;
    /* background-color: red; */
    /* margin-right: 30px; */
}
.dropdown input{
    position: absolute;
    width: 100%;
    height: 50px;
    z-index: 10000;
    opacity: 0;
    cursor: pointer;
}
.dropdown .text{
    font-size: 1.1rem;
    width: 100%;
    height: 50px;
    line-height: 50px;
    transition: all 0.4s;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.dropdown i{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transition: all 0.4s;
    text-align: center;
    line-height: 50px;
}
.dropdown span{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    border-radius: 50px;
    z-index: -1;
    transition: all 0.4s;
}
.dropdown input:hover ~span{
    width: 110%;
}
.dropdown input:hover ~ .text{
    color: white;
}
.dropdown input:checked ~ i{
    transform: rotate(-180deg);
}
.dropdown ol{
    display: none;
    list-style: none;
    margin: 10px 0 0 10px;
}
.dropdown ol li{
    height: 50px;
    background-color: black;
    margin: 0 0 10px 0;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    border-radius: 50px;
}
.dropdown ol li a{
    color: white;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.dropdown input:checked ~ ol{
    display: block;
}
.dropdown ol li:hover{
    background-color: rgb(72, 72, 72);
}

@media (max-width: 768px) {
    .dropdown {
        width: 120px;
        right: 50px;
    }
    .dropdown .text {
        font-size: 15px;
        font-weight: bold;
    }
}

</style>

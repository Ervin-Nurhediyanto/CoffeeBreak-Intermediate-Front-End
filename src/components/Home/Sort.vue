<template>

  <div class="dropdown">
    <input type="checkbox" name="" id="" @click="handleShowSort">
    <div class="text">Sort</div>
    <span></span>
    <i class="fa fa-caret-down fa-2x"></i>
      <ol @click="handleShowSort">
        <li type="submit" @click="handleSort('name')"><a href="#">a-z</a></li>
        <li type="submit" @click="handleSort('name&order=DESC')"><a href="#">z-a</a></li>
        <li type="submit" @click="handleSort('price')"><a href="#">low price</a></li>
        <li type="submit" @click="handleSort('price&order=DESC')"><a href="#">high price</a></li>
      </ol>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Sort',
  data () {
    return {
      showMenu: true
    }
  },
  computed: {
    ...mapGetters({
      search: 'search'
    })
  },
  methods: {
    ...mapActions([
      'getDataSort',
      'getAllData',
      'getData'
    ]),
    handleSort (sortir) {
      const data = {
        search: this.search,
        sort: sortir
      }
      this.getDataSort(sortir)
      this.getAllData(data)
      this.getData(data)
    },
    handleShowSort () {
      if (this.showMenu) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
      this.$emit('handleShowSort', this.showMenu)
    }
  }
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
}
.dropdown{
    width: 150px;
    margin: 10px auto;
    position: absolute;
    z-index: 10000;
    right: 20px;
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
        width: 100px;
        right: 50px;
    }
    .dropdown .text {
        font-size: 15px;
        font-weight: bold;
    }
    .dropdown ol li{
    height: 30px;
    background-color: black;
    margin: 0 0 10px 0;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    border-radius: 50px;
    font-size: 12px;
    padding: 5px;
}
}

</style>

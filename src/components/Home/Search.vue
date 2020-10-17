<template>
  <article class="search-box">
    <input type="text" v-model="searching" placeholder="search......" />
    <i class="fa fa-search" aria-hidden="true" @click="handleSearch(searching)"></i>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      searching: ''
    }
  },
  computed: {
    ...mapGetters({
      search: 'search'
    })
  },
  methods: {
    ...mapActions([
      'getDataSearch',
      'getAllData',
      'getData'
    ]),
    handleSearch (searching) {
      const data = {
        search: searching
      }
      this.getData(data)
      this.getAllData(data)
      this.getDataSearch(searching)
      //   .then((res) => {
      //   })
    }
  }
}
</script>

<style scoped>

input {
  width: 320px;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  background: #dedee0;
  box-shadow: 3px 3px 6px #5a5a5a,-3px -3px 6px #5c5e5f;
  border: none;
  outline: none;
}

input::placeholder {
  color: white;
}

i {
  color: black;
  background: #dedee0;
  box-shadow: 3px 3px 6px #5a5a5a,-3px -3px 6px #5c5e5f;
  padding: 15px;
  cursor: pointer;
  border-radius: 15px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: bold;
  border: none;
}

@media (max-width: 768px) {
  input {
    width: 120px;
    height: 40px;
    margin-left: 10px;
  }
  button {
    width: 100px;
  }
}

</style>

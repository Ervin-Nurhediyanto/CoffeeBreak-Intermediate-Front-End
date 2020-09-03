<template>
  <article>
    <input type="text" v-model="search" placeholder="search" />
    <button @click="handleSearch(search)">Search</button>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getDataSearch']),
    handleSearch (key) {
      this.getDataSearch(key)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>

</style>

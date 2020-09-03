<template>
  <article class="sort d-flex justify-content-end">
    <select @change="handleSort(sort)" v-model="sort" placeholder="sort">
      <option value>Sort</option>
      <option value="name">a-z</option>
      <option value="name&order=DESC">z-a</option>
      <option value="price">low price</option>
      <option value="price&order=DESC">high price</option>
    </select>
  </article>
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
</style>

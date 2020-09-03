<template>
  <nav aria-label="..." class="col-md-12">
    <ul class="pagination">
      <li class="page-item">
        <a v-show="page > 1" @click="prevPage(1)" class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item disabled">
        <a v-show="page <= 1" class="page-link">Prev</a>
      </li>
      <li v-show="page >= totalPage && page != 1" @click="prevPage(2)" class="page-item">
        <a class="page-link" href="#">{{page - 2}}</a>
      </li>
      <li v-show="page > 1" @click="prevPage(1)" class="page-item">
        <a class="page-link" href="#">{{page - 1}}</a>
      </li>
      <li class="page-item active" aria-current="page">
        <span class="page-link">
          {{page}}
          <span class="sr-only">(current)</span>
        </span>
      </li>
      <li v-show="page < totalPage" @click="nextPage(1)" class="page-item">
        <a class="page-link" href="#">{{page + 1}}</a>
      </li>
      <li v-show="page <= 1 && totalPage != 1" @click="nextPage(2)" class="page-item">
        <a class="page-link" href="#">{{page + 2}}</a>
      </li>
      <li class="page-item">
        <a v-show="page < totalPage" @click="nextPage(1)" class="page-link" href="#">Next</a>
      </li>
      <li class="page-item disabled">
        <a v-show="page >= totalPage" class="page-link">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters({
      totalPage: 'totalPage',
      page: 'page'
    })
  },
  methods: {
    ...mapActions(['nextPage']),
    ...mapActions(['prevPage'])
  }
}
</script>

<style>
</style>

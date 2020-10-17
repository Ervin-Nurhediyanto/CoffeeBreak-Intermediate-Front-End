<template>
  <nav aria-label="..." class="col-md-12">
    <ul class="pagination">
      <li class="page-item">
        <a v-show="page > 1" @click="handleChangePage(page - 1)" class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item disabled">
        <a v-show="page <= 1" class="page-link">Prev</a>
      </li>
      <li v-show="page >= totalPage && page != 1" @click="handleChangePage(page - 2)" class="page-item">
        <a class="page-link" href="#">{{page - 2}}</a>
      </li>
      <li v-show="page > 1" @click="handleChangePage(page - 1)" class="page-item">
        <a class="page-link" href="#">{{page - 1}}</a>
      </li>
      <li class="page-item active" aria-current="page">
        <span class="page-link">
          {{page}}
          <span class="sr-only">(current)</span>
        </span>
      </li>
      <li v-show="page < totalPage" @click="handleChangePage(1 + page)" class="page-item">
        <a class="page-link" href="#">{{page + 1}}</a>
      </li>
      <li v-show="page <= 1 && totalPage != 1" @click="handleChangePage(2 + page)" class="page-item">
        <a class="page-link" href="#">{{page + 2}}</a>
      </li>
      <li class="page-item">
        <a v-show="page < totalPage" @click="handleChangePage(1 + page)" class="page-link" href="#">Next</a>
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
      page: 'page',
      search: 'search',
      sort: 'sort'
    })
  },
  methods: {
    ...mapActions(['changePage']),
    handleChangePage (thisPage) {
      const data = {
        page: thisPage,
        search: this.search,
        sort: this.sort
      }
      this.changePage(data)
    }
  }
}
</script>

<style>
</style>

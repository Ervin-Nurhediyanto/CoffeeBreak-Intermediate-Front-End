<template>
  <!-- Modal -->
<div class="modal fade" id="Notif" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- <div class="modal-header">
      </div> -->
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-body">
        <h3>{{message}}</h3>
      </div>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      <!-- <div class="modal-footer">
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notif',
  computed: {
    ...mapGetters({
      message: 'message'
    })
  }
}
</script>

<style scoped>

</style>

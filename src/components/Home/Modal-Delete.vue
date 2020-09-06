<template>

<div>
<div class="modal fade" id="NotifDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-body">
        <h3>Delete Product?</h3>
      </div>
      <div>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" @click="delete_Data(delId)" data-toggle="modal" data-target="#Notif">Yes</button>
      </div>
    </div>
  </div>
</div>
<Notif />
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Notif from './Modal-Notif'

export default {
  name: 'NotifDelete',
  props: ['delId'],
  components: {
    Notif
  },
  computed: {
    ...mapGetters({
      message: 'message'
    })
  },
  mounted () {
    this.getData()
  },
  methods: {
    ...mapActions(['deleteData']),
    ...mapActions(['getData']),

    delete_Data (id) {
      this.deleteData(id)
        .then(() => {
        })
      this.getData()
    }
  }
}
</script>

<style scoped>
.modal {
  position: absolute;
  background-color: transparent;
}

.modal-content {
border-radius: 40px 0 40px 0;
}

.modal h3 {
  font-family: 'Lobster', cursive;
}

button.close {
  background-color: red;
  width: 20px;
  position: absolute;
  top: 0;
  right: 0;
}

button.btn-secondary {
  position: absolute;
  right: 280px;
  top: 85px;
  width: 100px;
}

button.btn-primary {
  position: absolute;
  right: 110px;
  top: 85px;
  width: 100px;
}

</style>

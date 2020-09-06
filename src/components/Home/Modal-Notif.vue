<template>

<div class="modal fade" id="Notif" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-position="position" v-top="top" v-bottom="bottom" v-right="right" v-left="left">
  <div class="modal-dialog">
    <div class="modal-content">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="refresh">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-body">
        <h3>{{message}}</h3>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notif',
  props: ['position', 'top', 'bottom', 'right', 'left'],
  data () {
    return {
      confirm: true
    }
  },
  computed: {
    ...mapGetters({
      message: 'message'
    })
  },
  methods: {
    refresh () {
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.modal {
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

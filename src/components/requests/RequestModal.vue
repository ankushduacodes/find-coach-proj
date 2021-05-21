<template>
  <div class="modal fade"
       :class="{show: show || ''}"
       id="RequestModal" tabindex="-1"
       aria-labelledby="RequestModalLabel" aria-hidden="false"
       :data-bs-backdrop="show ? .5 : false"
       :style="{display: show ? 'block' : 'none'}"
       :aria-modal="!!show || false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="RequestModalLabel">Request by {{ request?.name }}</h5>
          <button type="button" class="btn-close" @click="setShowFalse"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h4>To: {{ request?.to }}</h4>
          <p>{{ request?.message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" disabled>Respond</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Figure out why is backdrop infront of the whole app
export default {
  name: 'RequestModal',
  data() {
    return {
      showCopy: this.show,
    };
  },
  props: {
    request: {
      required: true,
    },
    show: {
      required: true,
    },
  },
  mounted() {
    console.log(this.request);
    console.log(this.show);
  },
  methods: {
    setShowFalse() {
      this.showCopy = false;
    },
  },
};
</script>

<style scoped>
p {
  border: 1px solid gray;
  padding: 10px;
}
</style>

<template>
  <teleport to="#app">
    <div class="modal fade"
         :id="'RequestModal'+requestId" tabindex="-1"
         aria-labelledby="RequestModalLabel" aria-hidden="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="RequestModalLabel">Request by {{ request?.name }}</h5>
            <button type="button" class="btn-close"
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
      <h1>{{request}}</h1>
    </div>
  </teleport>
</template>

<script>
// TODO: Figure out why is backdrop infront of the whole app
export default {
  name: 'RequestModal',
  props: {
    requestId: {
      required: true,
    },
  },
  computed: {
    request() {
      console.log(this.requestId);
      const { getters } = this.$store;
      return getters.['requests/getRequestById']({ id: this.requestId });
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

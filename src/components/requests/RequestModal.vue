<template>
  <teleport to="#app">
    <div class="modal fade custom-modal"
         :id="'RequestModal'+request.id" tabindex="-1"
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
            <div class="form-group">
              <label for="FormControlTextarea1"><b>Message:</b></label>
              <textarea class="form-control" :value="request.message"
                        id="FormControlTextarea1" rows="3" readonly></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" disabled>Respond</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'RequestModal',
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h4 {
  margin-bottom: 15px;
}

.custom-modal {
  text-align: left;
}
</style>

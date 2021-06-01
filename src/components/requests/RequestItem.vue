<template>
  <a data-bs-toggle="modal"
     :data-bs-target="'#RequestModal' + request.id"
  >
    <request-card>
      <li>
        <h5>By: {{request.name}}</h5>
        <p>To: {{requestTo}}</p>
      </li>
    </request-card>
  </a>
  <request-modal :request="request"></request-modal>
</template>

<script>
import RequestCard from '@/components/requests/RequestCard.vue';
import RequestModal from '@/components/requests/RequestModal.vue';

export default {
  name: 'RequestItem',
  components: {
    RequestModal,
    RequestCard,
  },
  props: {
    request: Object,
  },
  computed: {
    requestTo() {
      return this.$store.getters.['coaches/getCoachById']({ id: this.request.to }).name;
    },
  },
};
</script>

<style scoped>
h5,
p {
  padding: .4rem;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.container:hover {
  background-color: #42b983;
  color: white;
  transition: all 150ms ease-in;
  cursor: pointer;
}

</style>

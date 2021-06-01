<template>
  <a data-bs-toggle="modal"
     :data-bs-target="'#RequestModal' + request.id"
  >
    <request-card>
      <li>
        <h5>By: {{request.name}}</h5>
        <p>To: {{request.to}}</p>
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

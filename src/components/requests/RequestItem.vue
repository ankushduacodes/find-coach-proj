<template>
<!--<a data-bs-toggle="modal"-->
<!--   data-bs-target="#RequestModal" @click="fillRequestId(request.id)">-->
  <a @click="fillRequestId(request.id)">
    <request-card>
      <li>
        <h5>By: {{request.name}}</h5>
        <p>To: {{request.to}}</p>
      </li>
    </request-card>
  </a>
</template>

<script>
import RequestCard from '@/components/requests/RequestCard.vue';

export default {
  name: 'RequestItem',
  components: {
    RequestCard,
  },
  props: {
    request: Object,
  },
  inject: ['fillRequestId'],
  data() {
    return {
      showModal: false,
    };
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

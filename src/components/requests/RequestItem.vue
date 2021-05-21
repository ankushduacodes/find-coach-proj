<template>
  <router-link :to="RequestPerIDUrl">
    <request-card>
      <li>
        <h5>By: {{request.name}}</h5>
        <p>To: {{request.to}}</p>
      </li>
    </request-card>
  </router-link>
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
  computed: {
    RequestPerIDUrl() {
      return { name: 'RequestPerID', params: { id: this.request.id } };
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

<template>
  <ul v-for="request in requests" :key="request.id">
    <request-item :request="request"></request-item>
  </ul>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';

export default {
  name: 'RequestList',
  components: { RequestItem },
  props: {
    requests: Object,
  },
};
</script>

<style scoped>
ul {
  padding: 1rem;
  list-style: none;
  margin: 0;
}
</style>

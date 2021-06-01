<template>
  <base-card>
    <request-list v-if="requests.length" :requests="requests"></request-list>
    <h1 v-else>Nothing to see here</h1>
  </base-card>

</template>

<script>
import { mapGetters } from 'vuex';
import BaseCard from '@/components/UI/BaseCard.vue';
import RequestList from '@/components/requests/RequestList.vue';

export default {
  name: 'TheRequests',
  components: { RequestList, BaseCard },
  computed: {
    ...mapGetters({
      requests: 'requests/getAllRequests',
    }),
  },
};
</script>

<style scoped>

</style>

<template>
  <base-card>
    <request-list :requests="requests"></request-list>
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

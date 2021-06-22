<template>
  <base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <template v-else-if="requests.length">
      <request-list :requests="requests"></request-list>
    </template>
    <h1 v-else>Nothing to see here</h1>
  </base-card>

</template>

<script>
import { mapGetters } from 'vuex';
import BaseCard from '@/components/UI/BaseCard.vue';
import RequestList from '@/components/requests/RequestList.vue';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';

export default {
  name: 'TheRequests',
  components: { BaseSpinner, RequestList, BaseCard },
  data() {
    return {
      isLoading: false,
      requestSent: false,
      coachRequestSent: false,
    };
  },
  computed: {
    ...mapGetters({
      requests: 'requests/getAllRequests',
      coachList: 'coaches/getAllCoaches',
    }),
  },
  async created() {
    // TODO handle error where if server error occurs then spinner should stop
    this.isLoading = true;
    if (!this.requests.length && !this.requestSent) {
      await this.$store.dispatch('requests/getAllRequests');
      this.requestSent = true;
    }
    if (!this.coachList.length && !this.coachRequestSent) {
      await this.$store.dispatch('coaches/fetchCoaches');
      this.coachRequestSent = true;
    }
    this.isLoading = false;
  },
};
</script>

<style scoped>

</style>

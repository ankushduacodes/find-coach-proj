<template>
  <base-card>
    <h1 v-if="errorOccurred">An Error Occurred</h1>
    <base-spinner v-else-if="isLoading"></base-spinner>
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
import { defineAsyncComponent } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'TheRequests',
  components: {
    BaseSpinner: defineAsyncComponent(() => import('@/components/UI/BaseSpinner.vue')),
    RequestList,
    BaseCard,
  },
  data() {
    return {
      isLoading: false,
      errorOccurred: false,
    };
  },
  computed: {
    ...mapGetters({
      requests: 'requests/getAllRequests',
      coachList: 'coaches/getAllCoaches',
    }),
  },
  async created() {
    // TODO if I decide to add a delete route for the coach, Dont
    // TODO (cont.) forget to handle deletion of requests belonging to deleted coaches
    try {
      this.isLoading = true;
      if (!this.requests?.length) {
        await this.$store.dispatch('requests/getAllRequests');
      }
      if (!this.coachList?.length) {
        await this.$store.dispatch('coaches/fetchCoaches');
      }
    } catch (err) {
      this.errorOccurred = true;
      useToast().error('Something went wrong on the server');
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>

</style>

<template>
  <base-card>
    <h1 v-if="errorOccurred">An error Occurred</h1>
    <base-spinner v-else-if="isLoading"></base-spinner>
    <template v-else-if="coachList.length">
      <coach-list :coach-list="coachList"></coach-list>
    </template>
    <h1 v-else>No Coaches were Found</h1>
  </base-card>
</template>

<script>
// TODO add filter coaches functionality
import CoachList from '@/components/coaches/CoachList.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import { mapGetters } from 'vuex';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'TheCoaches',
  components: { BaseSpinner, BaseCard, CoachList },
  data() {
    return {
      isLoading: false,
      errorOccurred: false,
    };
  },
  computed: {
    ...mapGetters({
      coachList: 'coaches/getAllCoaches',
    }),
  },
  async created() {
    // TODO handle error where if server error occurs then spinner should stop
    if (!this.coachList.length) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/fetchCoaches');
      } catch (err) {
        this.errorOccurred = true;
        const toast = useToast();
        toast.error('Something went wrong on the server');
      } finally {
        this.isLoading = false;
      }
    }
  },
};
</script>

<style scoped>

</style>

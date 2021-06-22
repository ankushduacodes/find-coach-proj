<template>
  <base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <template v-else-if="coachList.length">
      <coach-list :coach-list="coachList"></coach-list>
    </template>
    <h1 v-else>Nothing to see here</h1>
  </base-card>
</template>

<script>
// TODO add filter coaches functionality
import CoachList from '@/components/coaches/CoachList.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import { mapGetters } from 'vuex';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';

export default {
  name: 'TheCoaches',
  components: { BaseSpinner, BaseCard, CoachList },
  data() {
    return {
      isLoading: false,
      requestSent: false,
    };
  },
  computed: {
    ...mapGetters({
      coachList: 'coaches/getAllCoaches',
    }),
  },
  async created() {
    // TODO handle error where if server error occurs then spinner should stop
    this.isLoading = true;
    if (!this.coachList.length && !this.requestSent) {
      await this.$store.dispatch('coaches/fetchCoaches');
      this.requestSent = true;
    }
    this.isLoading = false;
  },
};
</script>

<style scoped>

</style>

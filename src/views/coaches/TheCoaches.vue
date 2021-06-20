<template>
  <base-card>
    <template v-if="coachList.length">
      <coach-list :coach-list="coachList"></coach-list>
    </template>
    <h1 v-else>Nothing to see here</h1>
  </base-card>
</template>

<script>
import CoachList from '@/components/coaches/CoachList.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheCoaches',
  components: { BaseCard, CoachList },
  computed: {
    ...mapGetters({
      coachList: 'coaches/getAllCoaches',
    }),
  },
};
</script>

<style scoped>

</style>

<template>
  <base-card>
    <coach-list :coach-list="coachList"></coach-list>
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

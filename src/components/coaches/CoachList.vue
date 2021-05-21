<template>
  <ul v-for="coach in coachList" :key="coach.id">
    <coach-card>
      <coach-item :item="coach"></coach-item>
    </coach-card>
  </ul>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';
import CoachCard from '@/components/coaches/CoachCard.vue';

export default {
  name: 'CoachList',
  components: { CoachCard, CoachItem },
  props: {
    coachList: Object,
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  padding: 10px;
}
</style>

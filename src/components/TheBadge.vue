<template>
  <base-badge>{{ badgeName }}</base-badge>
</template>

<script>
import BaseBadge from '@/components/UI/BaseBadge.vue';

export default {
  name: 'TheBadge',
  components: { BaseBadge },
  props: {
    badgeName: String,
  },
};
</script>

<style scoped>

</style>

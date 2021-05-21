<template>
  <base-button :btn-class="btnClass">
    <slot></slot>
  </base-button>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'TheButton',
  components: { BaseButton },
  props: {
    btnClass: String,
  },
};
</script>

<style scoped>

</style>

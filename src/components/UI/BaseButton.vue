<template>
  <button type="button" class="btn" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    btnClass: String,
  },
  computed: {
    buttonClass() {
      return `btn-outline-${this.btnClass}`;
    },
  },
};
</script>

<style scoped>
button {
  max-width: 100%;
  margin-right: 10px;
}
</style>

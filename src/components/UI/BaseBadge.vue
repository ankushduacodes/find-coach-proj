<template>
  <span class="badge rounded-pill bg-primary">
    <slot></slot>
  </span>
</template>

<script>
// TODO: should send badge class as prop to baseBadge
export default {
  name: 'BaseBadge',
};
</script>

<style scoped>
span {
  margin-right: 10px;
  font-size: 17px;
  margin-bottom: 5px;
}
</style>

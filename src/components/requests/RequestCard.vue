<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RequestCard',
};
</script>

<style scoped>
.container {
  border: 1px solid dimgray;
}
</style>

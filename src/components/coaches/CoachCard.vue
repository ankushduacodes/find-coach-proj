<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CoachCard',
};
</script>

<style scoped>
.container {
  border: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  max-width: 100%;
  min-width: 60%;
  width: 90%;
  margin-bottom: 10px;
}
</style>

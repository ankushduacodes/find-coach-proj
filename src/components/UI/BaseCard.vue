<template>
  <div class="container-sm">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style scoped>
.container-sm {
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid black;
  width: 690px;
  max-width: 100%;
  min-width: 50%;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 5px 5px grey;
}
</style>

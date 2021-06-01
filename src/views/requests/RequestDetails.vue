<template>
  <div class="container">
    {{}}
  </div>
</template>

<script>
export default {
  name: 'RequestDetails',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  border: 1px solid gray;
  padding: 10px;
}
</style>

<template>
  <base-card>
    <fieldset>
      <legend>Contact {{ coach.name }}</legend>
      <template v-for="badge in coach.expertise" :key="badge" class="cus">
        <the-badge :badge-name="badge"></the-badge>
      </template>
      <form @submit.prevent>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="flex-button">
          <button @click="validateData" type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </fieldset>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import TheBadge from '@/components/TheBadge.vue';

export default {
  name: 'CoachContact',
  components: {
    TheBadge,
    BaseCard,
  },
  props: {
    id: String,
  },
  computed: {
    coach() {
      return this.$store.getters.['coaches/getCoachById']({ id: this.id });
    },
  },
  methods: {
    validateData() {

    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.flex-button {
  display: flex;
  flex-direction: row-reverse;
}
</style>

<template>
  <base-card>
    <div class="info">
      <h1>{{ foundCoach.name }}</h1>
      <template v-for="badge in foundCoach.expertise" :key="badge" class="cus">
        <the-badge :badge-name="badge"></the-badge>
      </template>
    </div>
    <ul>
      <coach-card v-for="(value, key) in foundCoach.contactInfo" :key="value">
        <li><b>{{ key.replace(key[0], key[0].toUpperCase()) }}</b>: {{ value }}</li>
      </coach-card>
    </ul>
    <div class="contact-btn">
      <router-link :to="ContactUrl">
        <the-button :btn-class="'success'">Contact</the-button>
      </router-link>
    </div>
  </base-card>
</template>

<script>

import { mapGetters } from 'vuex';
import BaseCard from '@/components/UI/BaseCard.vue';
import TheBadge from '@/components/TheBadge.vue';
import TheButton from '@/components/TheButton.vue';
import CoachCard from '@/components/coaches/CoachCard.vue';

export default {
  name: 'CoachDetails',
  components: {
    CoachCard, TheButton, TheBadge, BaseCard,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      coachById: 'coaches/getCoachById',
    }),

    foundCoach() {
      return this.coachById({ id: this.id });
    },

    ContactUrl() {
      return { name: 'CoachPerID', params: { id: this.foundCoach.id } };
    },
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  max-width: 100%;
}

div {
  text-align: center;
}

span:nth-last-child(1) {
  margin-right: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover,
a:active {
  color: white;
}

ul {
  padding: 0;
  margin: 0;
}

.info {
  margin-bottom: 10px;
}

.contact-btn {
  margin-top: 10px;
}
</style>

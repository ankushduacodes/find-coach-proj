<template>
  <base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-else-if="!isLoading && Object.entries(foundCoach).length">
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
    </div>
    <h1 v-else>Nothing to see</h1>
  </base-card>
</template>

<script>

import { mapGetters } from 'vuex';
import BaseCard from '@/components/UI/BaseCard.vue';
import { useToast } from 'vue-toastification';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'CoachDetails',
  components: {
    BaseSpinner: defineAsyncComponent(() => import('@/components/UI/BaseSpinner.vue')),
    CoachCard: defineAsyncComponent(() => import('@/components/coaches/CoachCard.vue')),
    TheButton: defineAsyncComponent(() => import('@/components/TheButton.vue')),
    TheBadge: defineAsyncComponent(() => import('@/components/TheBadge.vue')),
    BaseCard,
  },
  data() {
    return {
      foundCoach: {},
      // TODO add error handling with error message as well as a toast
      isLoading: false,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      coachById: 'coaches/getCoachById',
      tempCoachObj: 'coaches/getTempCoach',
    }),

    ContactUrl() {
      return { name: 'CoachContact', params: { id: this.foundCoach.id } };
    },
  },
  async mounted() {
    const coachId = this.id;
    this.foundCoach = this.coachById({ id: this.id }) || this.tempCoachObj;
    if (!this.foundCoach || !Object.entries(this.foundCoach).length) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/fetchCoachById', { coachId });
        this.foundCoach = this.tempCoachObj;
      } catch (err) {
        const toast = useToast();
        toast.error('Something went wrong on the server');
        this.foundCoach = {};
      } finally {
        this.isLoading = false;
      }
    }
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

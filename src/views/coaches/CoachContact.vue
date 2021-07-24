<template>
  <base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <fieldset v-else-if="Object.keys(foundCoach).length">
      <legend><h2>Contact {{ foundCoach.name }}</h2></legend>
      <template v-for="badge in foundCoach.expertise" :key="badge" class="cus">
        <the-badge :badge-name="badge"></the-badge>
      </template>
      <form @submit.prevent="validateData">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" class="form-control" ref="name" id="name">
          <span class="invalid-feedback">Name can not be empty</span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" ref="message"
                    id="exampleFormControlTextarea1" rows="3"></textarea>
          <span class="invalid-feedback">Message box can not be empty</span>
        </div>
        <div class="flex-button">
          <button type="submit" class="btn btn-primary" ref="sendBtn">Send</button>
        </div>
      </form>
    </fieldset>
    <h1 v-else>Nothing to see</h1>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import { useToast } from 'vue-toastification';
import { mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'CoachContact',
  components: {
    BaseSpinner: defineAsyncComponent(() => import('@/components/UI/BaseSpinner.vue')),
    TheBadge: defineAsyncComponent(() => import('@/components/TheBadge.vue')),
    BaseCard,
  },
  props: {
    id: String,
  },
  data() {
    return {
      foundCoach: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      coachById: 'coaches/getCoachById',
      tempCoachObj: 'coaches/getTempCoach',
    }),
  },
  methods: {
    resetFormData() {
      const { message, name } = this.$refs;
      message.value = '';
      name.value = '';
    },
    async addRequest() {
      this.$refs.sendBtn.disabled = true;
      const payload = {
        id: Math.floor(Math.random() * 10000000000) + 100000,
        name: this.$refs.name.value.trim(),
        message: this.$refs.message.value.trim(),
        coachId: this.id,
      };
      try {
        await this.$store.dispatch('requests/addRequest', payload);
        this.resetFormData();
        const toast = useToast();
        toast.success('Request Submitted Successfully');
        await this.$router.push({ name: 'Requests' });
      } catch (err) {
        this.$refs.sendBtn.disabled = false;
        // TODO give better error messages
        useToast().error(err.message);
      }
    },
    validateData() {
      const { message, name } = this.$refs;
      let errorFound = false;
      if (!message.value.trim()) {
        errorFound = true;
        message.classList.add('is-invalid');
      } else {
        message.classList.remove('is-invalid');
      }
      if (!name.value.trim()) {
        errorFound = true;
        name.classList.add('is-invalid');
      } else {
        name.classList.remove('is-invalid');
      }
      if (!errorFound) {
        this.addRequest();
      }
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
.form-group {
  margin-bottom: 20px;
}

.flex-button {
  display: flex;
  flex-direction: row-reverse;
}

form {
  margin-top: 20px;
}
</style>

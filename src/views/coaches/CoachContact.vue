<template>
  <base-card>
    <fieldset>
      <legend><h2>Contact {{ coach.name }}</h2></legend>
      <template v-for="badge in coach.expertise" :key="badge" class="cus">
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
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </fieldset>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import TheBadge from '@/components/TheBadge.vue';
import { useToast } from 'vue-toastification';

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
    resetFormData() {
      const { message, name } = this.$refs;
      message.value = '';
      name.value = '';
    },
    addRequest() {
      // TODO send an add coach or coach request http request and on success
      // TODO on success get the latest added coach or request and update our local state with it
      const payload = {
        id: Math.floor(Math.random() * 10000000000) + 100000,
        name: this.$refs.name.value,
        message: this.$refs.message.value,
        to: this.id,
      };
      try {
        this.$store.dispatch('requests/addRequest', payload);
        this.resetFormData();
        const toast = useToast();
        toast.success('Request Submitted Successfully');
        this.$router.push({ name: 'Requests' });
      } catch (err) {
        // TODO add a toast on failure
        console.log(err);
      }
    },
    validateData() {
      const { message, name } = this.$refs;
      let errorFound = false;
      if (!message.value) {
        errorFound = true;
        message.classList.add('is-invalid');
      } else {
        message.classList.remove('is-invalid');
      }
      if (!name.value) {
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

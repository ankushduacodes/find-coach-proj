<template>
  <base-card>
    <fieldset>
      <legend>Coach Registration Form</legend>
      <form @submit.prevent>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Enter First Name"
            v-model="firstName"
            required
          >
          <span class="invalid-feedback">First name must be of at-least 2 letters</span>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Enter Last Name"
            v-model="lastName"
            required
          >
          <span class="invalid-feedback">Last name must be of at-least 2 letters</span>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            v-model="email"
            required
          >
          <span class="invalid-feedback">Please enter a valid email</span>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Enter Phone number"
            v-model="phoneNumber"
            required
          >
          <span class="invalid-feedback">Please enter a valid phone number</span>
        </div>
        <label for="phone">Your Expertise</label> <br>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="Frontend"
            v-model="expertise"
          >
          <label class="form-check-label" for="inlineCheckbox1">Frontend</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Backend"
            v-model="expertise"
          >
          <label class="form-check-label" for="inlineCheckbox2">Backend</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="Database"
            v-model="expertise"
          >
          <label class="form-check-label" for="inlineCheckbox3">Database</label>
        </div>
        <span
          v-if="false"
          class="check-btn-feedback"
        >Please select at least one of the above options</span>
        <button @click="log" type="submit" class="btn btn-primary">Submit</button>
      </form>
    </fieldset>
  </base-card>
</template>

<script>

import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  name: 'CoachRegister',
  components: { BaseCard },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      expertise: [],
    };
  },
  methods: {
    log() {
      console.log(this.firstName, this.lastName, this.email, this.phoneNumber, this.expertise);
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.expertise {
  font-size: 20px;
}

label {
  font-size: 17px;
}

.check-btn-feedback {
  display: block;
  font-size: .875em;
  color: red;
}

button {
  display: block;
  margin-top: 20px;
}

</style>

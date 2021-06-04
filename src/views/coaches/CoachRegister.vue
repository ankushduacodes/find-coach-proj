<template>
  <base-card>
    <fieldset>
      <legend>Coach Registration Form</legend>
      <form @submit.prevent="validateData">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Enter First Name"
            minlength="2"
            ref="firstName"
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
            minlength="2"
            ref="lastName"
          >
          <span class="invalid-feedback">Last name must be of at-least 2 letters</span>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Enter Your Age"
            minlength="2"
            ref="age"
          >
          <span class="invalid-feedback">{{ageErrorMessage}}</span>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            ref="email"
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
            ref="phoneNumber"
            maxlength="10"
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
          v-if="expertiseErr"
          class="check-btn-feedback"
        >Please select at least one of the above options</span>
        <div class="flex-button">
          <button @click="log" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </fieldset>
  </base-card>
</template>

<script>

import BaseCard from '@/components/UI/BaseCard.vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'CoachRegister',
  components: { BaseCard },
  data() {
    return {
      expertise: [],
      expertiseErr: false,
      inputError: false,
      ageErrorMessage: 'Please enter a valid age',
    };
  },
  methods: {
    checkName(name) {
      if (!name.value.trim()) {
        this.inputError = true;
        name.classList.add('is-invalid');
      } else {
        name.classList.remove('is-invalid');
      }
    },
    checkAge(age) {
      if (!age.value) {
        this.inputError = true;
        this.ageErrorMessage = 'Age field can not be empty';
        age.classList.add('is-invalid');
      } else if (+age.value < 18) {
        this.inputError = true;
        this.ageErrorMessage = 'Minimum age to register is 18, You may not be eligible to register as a coach';
        age.classList.add('is-invalid');
      } else {
        age.classList.remove('is-invalid');
      }
    },
    checkEmail(email) {
      if (!email.value.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.inputError = true;
        email.classList.add('is-invalid');
      } else {
        email.classList.remove('is-invalid');
      }
    },
    checkPhoneNumber(phoneNumber) {
      if (!phoneNumber.value.trim().match(/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/)) {
        this.inputError = true;
        phoneNumber.classList.add('is-invalid');
      } else {
        phoneNumber.classList.remove('is-invalid');
      }
    },
    addCoach({
      firstName, lastName, email, phoneNumber, age, expertise,
    }) {
      const payload = {
        id: Math.floor(Math.random() * 1000000000) + 1000,
        name: `${firstName.value} ${lastName.value}`,
        age: +age.value,
        contactInfo: {
          email: email.value,
          phone: phoneNumber.value,
        },
        expertise,
      };
      try {
        this.$store.dispatch('coaches/addCoach', payload);
        const toast = useToast();
        toast.success('Coach Registration Successful');
        this.$router.push({ name: 'Coaches' });
        this.resetInput();
      } catch (err) {
        console.log(err);
      }
    },
    resetInput() {
      const {
        firstName, lastName, email, phoneNumber, age,
      } = this.$refs;
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      phoneNumber.value = '';
      age.value = '';
    },
    // TODO add validations to the data being entered and data cannot be empty
    // TODO redirect on submit
    // TODO (use toast to inform that data was submitted and show a timer before redirecting)
    validateData() {
      const {
        firstName, lastName, email, phoneNumber, age,
      } = this.$refs;
      const { expertise } = this;
      this.checkName(firstName);
      this.checkName(lastName);
      this.checkEmail(email);
      this.checkPhoneNumber(phoneNumber);
      this.checkAge(age);
      this.expertiseErr = !this.expertise.length;
      if (!this.inputError && !this.expertiseErr) {
        this.addCoach({
          firstName, lastName, email, phoneNumber, age, expertise,
        });
      }
      this.inputError = false;
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

.flex-button {
  display: flex;
  flex-direction: row-reverse;
}

</style>

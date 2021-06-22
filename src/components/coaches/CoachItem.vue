<template>
  <li>
    <h1>{{item.name}}</h1>
    <h4>{{item.age}}/hr</h4>
    <template v-for="badge in item.expertise" :key="badge" class="cus">
      <the-badge :badge-name="badge"></the-badge>
    </template>
    <div>
      <router-link :to="DetailsUrl">
        <the-button :btn-class="'primary'">Details</the-button>
      </router-link>
      <router-link :to="ContactUrl">
        <the-button :btn-class="'success'">Contact</the-button>
      </router-link>
    </div>
  </li>
</template>

<script>
import TheBadge from '@/components/TheBadge.vue';
import TheButton from '@/components/TheButton.vue';

export default {
  name: 'CoachItem',
  components: { TheButton, TheBadge },
  props: {
    item: Object,
  },
  computed: {
    DetailsUrl() {
      return { name: 'CoachPerID', params: { id: this.item.id } };
    },
    ContactUrl() {
      return { name: 'CoachContact', params: { id: this.item.id } };
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

div {
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover,
a:active {
  color: white;
}
</style>

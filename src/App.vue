<template>
  <nav-bar></nav-bar>
  <div class="container-md">
    <router-view v-slot="{ Component }">
      <transition @enter="enterRouteHandler" @leave="leaveRouteHandler" mode="out-in">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
  <request-modal v-if="request" :request="request" :show="show"></request-modal>
</template>

<script>
import '@fontsource/open-sans';
import NavBar from '@/components/NavBar.vue';
import RequestModal from '@/components/requests/RequestModal.vue';

const { enterHandler, leaveHandler } = require('@/animations/routeAnimationHandler');

export default {
  components: { NavBar, RequestModal },
  data() {
    return {
      requestId: null,
      show: false,
    };
  },
  provide() {
    return {
      fillRequestId: this.fillRequestId,
    };
  },
  methods: {
    enterRouteHandler(el, done) {
      enterHandler(el, done);
    },
    leaveRouteHandler(el, done) {
      leaveHandler(el, done);
    },
    fillRequestId(requestId) {
      this.requestId = requestId;
      this.show = 'show';
    },
  },
  computed: {
    request() {
      if (this.requestId) {
        const { getters } = this.$store;
        return getters.['requests/getRequestById']({ id: this.requestId });
      }
      return null;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

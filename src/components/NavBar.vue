<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/coaches">BetterCoach</router-link>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/coaches"
              class="nav-link"
              aria-current="page"
            >
              Coaches
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/requests" class="nav-link" aria-current="page">Requests</router-link>
          </li>
          <li>
            <router-link :to="'/coaches/register'">
              <button class="btn btn-outline-info">Register</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar-nav {
  margin-left: auto;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>

<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to Community!</h1>
      <p class="lead">
        This is a simple Community app build for education purpose.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="getLoginURL" role="button">Login with Google</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google';
      }
      return '#';
    },
  },
};
</script>

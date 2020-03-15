<template>
  <h1>Logging in...</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login-token',
  mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.login(id);
      this.$router.push('/forum');
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>

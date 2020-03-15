<template>
  <h1>Admin</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    const admin = this.isAdmin();
    if (!admin) {
      this.$router.push('/forum');
    }
  },
  methods: mapActions(['isAdmin']),
};
</script>

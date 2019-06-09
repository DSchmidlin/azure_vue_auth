<template>
  <div>
    <div id="label">Sign-in with Microsoft Azure AD B2C</div>

    <button @click="login" v-if="!isLoggedIn">Login</button>
    <button @click="logout" v-if="isLoggedIn">Logout</button>

    <div v-if="isLoggedIn">Hello from Vue.js. User is {{user.name}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('auth/login');
    },
    logout() {
      this.$store.dispatch('auth/logout');
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isAuthenticated;
    },
    user() {
      return this.$store.state.auth.user;
    }
  }
};
</script>

<template>
  <div id="main-div">
    <h1>Welcome to the Account Page</h1>

    <v-btn
      width="200"
      outlined
      v-if="!signedIn"
      class="signup"
      v-on:click="showSignUpForm = !showSignUpForm"
      color="red"
    >
      Create Account
    </v-btn>
    <v-btn
      width="200"
      outlined
      v-if="!signedIn"
      class="signup"
      v-on:click="showSignInForm = !showSignInForm"
      color="red"
    >
      Sign In
    </v-btn>
    <signUpForm />
  </div>
</template>

<script>
import signUpForm from "./signUpForm";
export default {
  name: "accountPage",
  componets: {
    signUpForm,
  },
  data: () => ({
    showSignUpForm: false,
    showSignInForm: false,
  }),
  methods: {},
};
</script>

<style scoped>
#main-div {
  color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

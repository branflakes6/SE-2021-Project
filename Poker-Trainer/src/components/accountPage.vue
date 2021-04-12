<template>
  <div id="main-div">
    <h1>Welcome To The Accout Page</h1>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem ipsum
      earum tenetur maiores pariatur adipisci velit doloremque nesciunt neque.
    </h3>
    <div id="btn-container">
      <v-btn
        width="200"
        outlined
        class="signup"
        v-on:click="showSignUpForm = !showSignUpForm"
      >
        Create Account
      </v-btn>
      <v-btn
        width="200"
        outlined
        class="signup"
        v-on:click="showSignInForm = !showSignInForm"
      >
        Sign In
      </v-btn>

      <small>---- or connect with ----</small>
      <a id="facebook-link">
        <v-icon color="blue"> mdi-facebook</v-icon> Facebook</a
      >
      <a id="google-link"><v-icon color="red"> mdi-google</v-icon> Google</a>

      <a id="apple-link"><v-icon color="white"> mdi-apple</v-icon> Apple</a>
    </div>
    <v-dialog v-model="showSignUpForm" max-width="640">
      <sign-up-form />
    </v-dialog>
    <v-dialog v-model="showSignInForm" max-width="640">
      <sign-in-form />
    </v-dialog>
  </div>
</template>

<script>
import signUpForm from "./signUpForm";
import signInForm from "./signInForm";
export default {
  name: "homePage",
  components: {
    signUpForm,
    signInForm,
  },
  data: () => ({
    showSignUpForm: false,
    showSignInForm: false,
  }),
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3 {
  width: 55%;
  margin: 60px 0 10px 0;
}
.signup {
  color: red;
  font-size: 15px !important;
  margin: 10px 0 10px 0;
  border-radius: 5%;
}
#btn-container {
  background-color: #0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 40px 0 0 0;
}
a {
  margin: 5px 0 5px 0;
}
#facebook-link {
  color: #2196f3;
}
#google-link {
  color: #f34336;
}
#apple-link {
  color: white;
}
</style>

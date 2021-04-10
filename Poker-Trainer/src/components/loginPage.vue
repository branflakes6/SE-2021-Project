<template>
  <div>
    <div>
      <h1>Welcome back. You can login below.</h1>

      <v-text-field
        v-model="username"
        :error-messages="errors"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="errors"
        label="Password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        required
        :type="showPass ? 'text' : 'password'"
      ></v-text-field>
      <v-btn class="login-btn" type="submit" rounded color="black" dark>
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  componets: {},
  data: () => ({}),
  methods: {},
};
</script>

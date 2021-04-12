<template>
  <v-card dark id="signup-form">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              required
              @click:append="showPass = !showPass"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" text @click="dialog = false">
        Create Account
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "signUpForm",
  data: () => ({
    showPass: false,
  }),
};
</script>

<style scoped>
#signup-form {
  color: white;
  text-align: center;
}
</style>

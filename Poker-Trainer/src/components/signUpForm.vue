<template>
  <v-card dark id="signup-form">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email"
            :error-messages="errors" label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="username"
        :error-messages="errors" label="Username" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
             v-model="password"
             :error-messages="errors"
              label="Passwordtest"
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
      <v-btn v-on:click="register" color="red darken-1">
        Create Account
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from '../firebase'
export default {
  name: "signUpForm",
  data: function(){
    return{
      email: ' ',
      password: ' ',
      showPass : false
    };
  },
  methods:{
    register: function(e){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(user => {
              alert('Account Created For ${user.email}');
              this.$router.push('/');
              console.log(user)
              },
              err => {
                  alert(err.message)
            })
        e.preventDefault();
    }
  }
};
</script>

<style scoped>
#signup-form {
  color: white;
  text-align: center;
}
</style>

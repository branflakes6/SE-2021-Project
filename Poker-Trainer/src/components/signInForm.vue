<template>
  <v-card dark id="signin-form">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email"
            :error-messages="errors" label="Email" required></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Passwordtesting"
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
      <v-btn v-on:click="login" class="login-btn" type="submit" color="red darken-1" >
        Sign In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from '../firebase';
export default {
  name: "signInForm",
  data: function(){
    return{
      email: ' ',
      password: ' '
    };
  },
  methods:{
    register: function(e){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(user => {
              alert('You are logged in as ${user.email}');
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

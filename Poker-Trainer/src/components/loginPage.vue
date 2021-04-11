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
      <v-btn v-on:click="login" class="login-btn" type="submit" rounded color="black" dark>
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "loginForm",
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

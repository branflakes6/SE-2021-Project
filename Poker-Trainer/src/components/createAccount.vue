<template>
  <div>
    <div>
      <h1>
        Here at Upper Hand we are always looking for new members! <br />
        Submit your details below to join us...
      </h1>
      <v-text-field
        v-model="email"
        :error-messages="errors"
        label="Email"
        required
      ></v-text-field>
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
      <v-btn v-on:click="register" class="createAccount-btn" type="submit" rounded color="black" dark>
        Create Account
      </v-btn>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "createAccountForm",
  data: function(){
    return{
      email: ' ',
      password: ' '
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

<template>
<v-app>
    <div>
<<<<<<< HEAD
      <h1>Welcome to the Account Page</h1>   
=======
      <h1>Welcome to the Account Page</h1>
      <div class="buttons">
       <v-button :onClick="loginClick">Login</v-button>
       <v-button :onClick="createAccountClick">Create Account</v-button>
       </div>
>>>>>>> 270a55134131388ba0bad9991bb58ea7790d6f96
    </div>   
</v-app>
</template>

<script>
import Button from 'Components/Button'
export default {
    name: 'accountPage',
    componets: {
        'v-button': Button
    },
    data: () => ({

    }),
    methods: {
    loginClick() {
      console.log('Login Clicked')
    }
    createAccountClick() {
      console.log('Create Account Clicked')
    }
        
    }
}
</script>

<template>
    <div>
      <h1>Welcome to the Account Page</h1>
      <div class="buttons">
       <v-button :onClick="loginClick">Login</v-button>
       <v-button :onClick="createAccountClick">Create Account</v-button>
       </div>
    </div>   
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

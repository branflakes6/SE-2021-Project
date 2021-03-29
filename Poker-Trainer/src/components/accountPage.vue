<template>
<v-app>
    <div>
     <h1>Welcome to the Account Page</h1>
      <div>
       <v-btn :onClick="loginClick"> Login 
       </v-btn>
       <v-btn :onClick="createAccountClick"> Create Account 
       </v-btn>
       </div>
    </div>   
</v-app>
</template>

<script>
export default {
    name: 'accountPage',
    componets: {

    },
    data: () => ({

    }),
    methods: {
    loginClick() {
      console.log('Login Clicked')
    },
    createAccountClick() {
      console.log('Create Account Clicked')
    }    
    }
}
</script>

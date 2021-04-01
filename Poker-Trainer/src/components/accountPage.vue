<template>
<v-app>
    <div>
     <h1>Welcome to the Account Page</h1>
      <div>
       <v-btn depressed to="/loginPage"> Login 
       </v-btn>
       <v-btn depressed to="/createAccount"> Create Account 
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
    
    }
}
</script>

<template>
  <div>
  <v-img src ="..\assets\bg.jpg" contain height="800x" width = "1400px">  
    <v-container>
    <div align=center> 
      <h1>Welcome to the Scenario Page</h1>
    </div>

    
    <v-container fill-height>
      <v-card class="mx-auto mt-4 pt-8" color="transparent" flat>
        <div align=center>
        <vue-playing-card signature="cover" :width="85"></vue-playing-card>
        <vue-playing-card signature="cover" :width="85"></vue-playing-card>
        </div>
    <div class="mt-8 pt-8">
      <vue-playing-card signature="cover" :width="85"></vue-playing-card>
      <vue-playing-card signature="kh" :width="85"></vue-playing-card>
      <vue-playing-card signature="8s" :width="85"></vue-playing-card>
      <vue-playing-card signature="ah" :width="85"></vue-playing-card>
      <vue-playing-card signature="3d" :width="85"></vue-playing-card>
      <vue-playing-card signature="qh" :width="85"></vue-playing-card>
    </div>
     
   
    
    <div class="mx-auto mt-16 pt-16" align="center">
   
   <v-row class="pl-16">
     <v-col>
      <vue-playing-card signature="jh" :width="85"></vue-playing-card>
      <vue-playing-card signature="th" :width="85"></vue-playing-card>
   </v-col>

   <v-col>
     <v-row class="mb-2">

      
     <v-btn @click="call = true"> Call
     </v-btn>

     </v-row>
      <v-row class="mb-2">
      <v-btn @click="raise = true"> Raise
     </v-btn>

      </v-row>
       <v-row class="mb-2">
      <v-btn @click="fold = true"> Fold
     </v-btn>
       </v-row>
     
   </v-col>
   </v-row>


  

   </div>
     </v-card>
    </v-container>

    <div>
      <v-card max-width="280">
        <v-list-item>
          <v-list-item-content>
       <v-list-item-title align="center"> State of Play </v-list-item-title>
       Opponent went all in! 
        </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>

 </v-container>
    </v-img>
  <v-dialog v-model="call" max-width = "260">
    <v-card>
      <h3 align="center">
      Correct Decision
      </h3>
      <h4 class="ma-4"> Your opponent went all in and you had a Royal Flush, the best possible hand. 
        The only correct decision in this situation is to go all in!
      </h4>
    </v-card>
  </v-dialog>

  <v-dialog v-model="raise" max-width = "260">
    <v-card>
      <h3 align="center">
      Invalid
      </h3>
      <h4 class="ma-4"> Your opponent went all in, you cannot raise you can only call.
      </h4>
    </v-card>
  </v-dialog>

  <v-dialog v-model="fold" max-width = "260">
    <v-card>
      <h3 align="center">
      Wrong Decision
      </h3>
      <h4 class="ma-4"> Your opponent went all in and you had a Royal Flush, the best possible hand. 
        The only correct decision in this situation is to go all in!
      </h4>
    </v-card>
  </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'scenarioPage',
    componets: {
  
    },
    methods: {   
    },
    data: () => ({
        call: false,
        raise: false,
        fold: false,
    })
}
</script>

<style scoped>
#flop {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
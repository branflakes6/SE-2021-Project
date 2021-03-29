<template>
<v-app>
    <div>
      <h1>Welcome to the Scenario Page</h1>
    </div>

    <div>
      <h2> Your Hand </h2>
      <vue-playing-card signature="8s" :width="300"></vue-playing-card>
      <vue-playing-card signature="8s" :width="300"></vue-playing-card>
    </div>
</v-app>
</template>

<script>
export default {
    name: 'scenarioPage',
    componets: {
  
    },
    methods: {   
    },
    data: () => ({

    })
}
</script>
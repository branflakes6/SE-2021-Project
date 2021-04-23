<template>
  <v-card>
    <div id="details-container">
      <h1>{{ playerDetails.name }}</h1>
      <h2>Attributes:</h2>
      <h2>{{ playerDetails.attributes }}</h2>
      <div id="spacer"></div>
      <h1>Previous Actions</h1>
      <h4>{{ playerDetails.prevMove }}</h4>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "playerDetails",
  props: ["playerDetails"],
};
</script>

<style scoped>
#details-container {
  border: solid white;
  color: white;
  background-color: #1111;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
</style>

<template>
  <v-card>
    <div id="details-container">
      <h1>{{ playerDetails.name }}</h1>
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
  background-color: #1111 !important;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

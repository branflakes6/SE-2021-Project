<template>
  <v-card class="align-center justify-center" id="thumbnail" dark elevation="8">
    <div id="title-auth-container">
      <h3 id="thbml-title" class="title">"{{ title }}"</h3>
      <h4 id="thbml-author">By {{ author }}</h4>
    </div>
    <h4 id="category">Open</h4>
    <div id="spacer"></div>
    <p id="thbml-description">{{ description }}</p>
    <div id="spacer"></div>
    <v-btn :to="`scenarioPage/${scenarioID}`" width="200">Play</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "scenarioThumbnail",
  props: ["title", "author", "description", "scenarioID"],
};
</script>

<style scoped>
#thumbnail {
  padding: 10px;
  background-color: #3e3e3e;
  height: 50vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
  width: 80%;
}
#title-auth-container {
  background: #2d2d2d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
#thbml-title {
  text-transform: capitalize;
  color: red;
}
#thbml-author {
  color: rgb(235, 61, 61);
  margin: 10px 0 10px 0;
}
#category {
  border: solid white;
  padding: 2px;
  border-radius: 15%;
  text-align: center;
}
#spacer {
  height: 10%;
}
#thbml-description {
  background-color: #2d2d2d;
  text-align: center;
  height: 150px;
  width: 100%;
  overflow-y: auto;
  color: white;
}
@media screen and (max-width: 1250px) {
  #thumbnail {
    min-width: 70%;
    flex-grow: 0;
  }
  #thbml-description {
    width: 90%;
  }
}
</style>

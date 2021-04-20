<template>
  <v-card class="align-center" id="thumbnail" dark width="400px">
    <h3 id="thbml-title" class="title">"{{ title }}"</h3>
    <h4 id="thbml-author">By {{ author }}</h4>
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
  text-align: center;
  flex-grow: 1;
}
#thbml-title {
  text-transform: capitalize;
  color: red;
}
#thbml-author {
  color: rgb(235, 61, 61);
  margin: 10px 0 10px 0;
}
#spacer {
  height: 10%;
}
#thbml-description {
  background-color: #2d2d2d;
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

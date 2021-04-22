<template>
  <v-card id="thumbnail" dark elevation="8">
    <div id="title-auth-container">
      <h3 id="thbml-title" class="title">"{{ title }}"</h3>
      <h4 id="thbml-author">By {{ author }}</h4>
    </div>
    <p id="thbml-description">{{ description }}</p>
    <div id="spacer"></div>
    <v-btn :to="`scenarioPage/${scenarioID}`" x-large dark class="custom-btn">
      Play
    </v-btn>
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
  background-color: #1e1e1e;
  height: 45vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 20px 0;
  width: 70%;
}
#title-auth-container {
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
#image {
  height: 25%;
  margin: 20px;
}
#thbml-description {
  background-color: #191919;
  text-align: center;
  height: 50%;
  width: 100%;
  overflow-y: auto;
  color: white;
}
.custom-btn {
  background-color: rgb(99, 22, 22) !important;
  border: solid white !important;
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
/* width */
::-webkit-scrollbar {
  width: 5px;
}
</style>

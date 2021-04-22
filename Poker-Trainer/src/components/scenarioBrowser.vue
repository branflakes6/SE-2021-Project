<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<template>
  <div id="main-div">
    <div>
      <creationForm />
    </div>

    <div>
      <v-container>
        <v-row align="center" justify="center">
          <h1 align="center" justify="center">Choose a category</h1>
          <div>
            <v-select
              text-align="center"
              item-text="name"
              item-value="ID"
              v-model="selectedCat"
              :items="categories"
            >
            </v-select>
          </div>
          <v-btn v-on:click="updateCategory">Update</v-btn>
        </v-row>
      </v-container>
    </div>

    <v-layout wrap justify-center>
      <div
        v-for="item in masterList"
        :key="item"
        id="scenarioThumbnail-container"
      >
        <scenarioThumbnail
          v-bind:scenarioID="item.id"
          v-bind:title="item.name"
          v-bind:author="item.author"
          v-bind:description="item.description"
        />
      </div>
    </v-layout>
  </div>
</template>

<script>
import firebase from "firebase/app";
const db = firebase.firestore();
import scenarioThumbnail from "./scenarioThumbnail";
import creationForm from "./creationForm.vue";
export default {
  name: "scenarioBrowser",
  components: {
    scenarioThumbnail,
    creationForm,
  },
  methods: {
    search() {
      this.searchTerm = this.masterList_id;
    },
    updateCategory() {
      this.masterList = [];
      db.collection("scenarios")
        .doc("masterList")
        .get()
        .then((doc) => {
          let docs = doc.data();
          console.log(docs);
          console.log(docs.Scenarios);
          for (let index of docs.Scenarios) {
            console.log(index);
            if (
              index.category == this.selectedCat ||
              this.selectedCat == "All"
            ) {
              this.masterList.push(index);
            }
          }
        });
    },
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`,
      };
    },
  },
  data() {
    return {
      masterList: [],
      categories: ["All", "Open", "ISO", "3Bet", "4Bet", "5Bet"],
      selectedCat: "All",
      masterList_id: "",
      newID: "",
      searchTerm: "",
      loaded: false,
      select: "",
      showForm: false,
      // card values
    };
  },

  created() {
    db.collection("scenarios")
      .doc("masterList")
      .get()
      .then((doc) => {
        this.masterList = doc.data().Scenarios;
        this.loaded = true;
      });
  },
};
</script>

<style scoped>
#main-div {
  background-color: rgb(22, 22, 22);
  color: white;
  min-height: 100vh;
}

#scenarioThumbnail-container {
  width: 480px;
  justify-content: center;
  margin: 0 auto;
  padding: 25px;
  background-color: #2e2e2e;
}
@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
</style>

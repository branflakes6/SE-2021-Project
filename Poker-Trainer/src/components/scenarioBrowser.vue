<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<template>
  <div id="main-div">
    <div>
      <creationForm/>
   </div>

<div>
  <v-container>
        <v-row align="center" justify = "center">
            <h1 align="center" justify = "center"> Choose a category</h1>
            <div >
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
      <div v-for="item in masterList" :key="item" id="scenarioThumbnail-container">
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
import firebase from 'firebase/app'
const db = firebase.firestore();
import scenarioThumbnail from "./scenarioThumbnail";
import creationForm from './creationForm.vue';
export default {
  name: "scenarioBrowser",
  components: {
    scenarioThumbnail,
    creationForm,
  },
 methods: {
   search (){
     this.searchTerm = this.masterList_id
   },
   updateCategory(){
     this.masterList = []
     db.collection('scenarios').doc("masterList").get().then(doc => {
     let docs = doc.data()
     console.log(docs)
     console.log(docs.Scenarios)
    for(let index of docs.Scenarios){
      console.log(index)
      if (index.category == this.selectedCat || this.selectedCat == "All"){
        this.masterList.push(index)
      }
    }
    })
   },
 },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
      }
    },
  },
 data () {
    return {
    masterList: [],
    categories: ["All","Open","ISO","3Bet","4Bet","5Bet"],
    selectedCat:"All",
    masterList_id: "",
    newID: "",
    searchTerm: "",
    loaded: false,
    select: "",
    showForm: false,
    // card values
   }
  },

 created() {
    db.collection('scenarios').doc("masterList").get().then(doc => {
      this.masterList = doc.data().Scenarios
      this.loaded = true
    })
  },

};
</script>

<style scoped>
#main-div {
  background-color: rgb(22, 22, 22);
  color: white;
  min-height: 100vh;
}

#title-btn-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px 0 20px;
}
#create-btn {
  background-color: rgb(148, 42, 42);
  position: absolute;
  right: 10px;
}
#scenarioThumbnail-container {
  width: 480px;
  justify-content: center;
  margin: 0 auto;
  padding: 25px;
  background-color: rgb(22, 22, 22);
}

.opponent-details-container {
  border: solid white;
  border-width: 1px;
  padding: 0 10px 0 10px;
}
@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
@media screen and (max-width: 450px) {
  #title-btn-container {
    justify-content: flex-start;
  }
}
@media screen and (max-width: 360px) {
  #title-btn-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #create-btn {
    position: relative;
  }
}
.card-list {
  display: grid;
  grid-gap: 1em;
}

.card-item {
  background-color: dodgerblue;
  padding: 2em;
}

body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}
ul {
  list-style-type: none;
}
.grid {
  display: grid;
  grid-template-columns: 6ch auto;
}

#app {
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hour {
  text-align: right;
  padding: 3px 5px 3px 3px;
}

.name {
  text-align: left;
  padding: 3px 5px 3px 3px;
}
</style>

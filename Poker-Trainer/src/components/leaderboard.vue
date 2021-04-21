<template>
  <v-card outlined id="leaderboard">
    <v-card class="board-head">
      <div class="rank "></div>
      <div class="name ">Name</div>
      <div class="stat ">Rating</div>
      <div class="stat ">
        Scenarios <br />
        Played
      </div>
      <div class="stat ">Contributions</div>
    </v-card>
    <div v-for="(user, index) in users" :key="user">
      <a class="board-entry">
        <div class="rank">#{{ index + 1 }}</div>
        <div class="name">{{ user.name }}</div>
        <div class="stat">{{ user.rating }}</div>
        <div class="stat">{{ user.scenariosPlayed }}</div>
        <div class="stat">{{ user.contributions }}</div>
      </a>
    </div>
  </v-card>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();
export default {
  name: "leaderboard",
  data: () => ({
    users: []
  }),
  created () {
   db.collection('users').get().then(querySnapshot =>{
     console.log(querySnapshot)
     let docs = querySnapshot.docs
     for (let doc of docs){
       this.users.push({
         name: doc.id,
         rating: doc.data().score,
         scenariosPlayed: doc.data().scePlayed,
         contributions: doc.data().contribs
       })
     }
   })
  }
};
</script>
<style scoped>
#leaderboard {
  margin: 20px 5px 5px 5px;
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: #2e2e2e;
}
.board-head {
  color: red;
  background-color: #1e1e1e;
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: solid white;
  border-width: 1px;
}
.board-entry {
  color: white;
  padding: 20px;
  display: flex;
  width: 100%;
  border-bottom: solid white;
  border-width: 1px;
}
.board-entry:hover {
  background-color: #3f3f3f;
  color: red;
}
.rank {
  text-align: left;
  width: 5%;
}
.name {
  text-align: left;
  width: 25%;
}
.stat {
  width: 22%;
  text-align: center;
}

@media screen and (max-width: 860px) {
  .board-head {
    font-size: 2.2vw;
  }
  .board-entry {
    font-size: 2vw;
  }
}
</style>

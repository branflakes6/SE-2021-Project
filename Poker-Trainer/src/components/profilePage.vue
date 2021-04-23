<template>
  <div id="main-div">
    <div id="name-pic">
      <h1 id="name">{{ this.details.name }}</h1>
      <img id="pic" src="../assets/profile-pic-1.png" alt="" />
    </div>

    <div class="details-container">
      <div class="stat-container">
        <h2>Stats:</h2>
        <p id="rating" class="stat">
          - Rating: {{ this.details.score }}
        </p>
        <p id="scenarios" class="stat">
          - Scenarios Played: {{ this.details.scePlayed }}
        </p>
        <p id="contributions" class="stat">
          - Contributions: {{ this.details.contribs }}
        </p>
      </div>
      <div id="about">
        <h2 id="about-header">About</h2>
        <p id="about-text">{{ this.details.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
const db = firebase.firestore();
const auth = firebase.auth();
export default {
  name: "profilePage",
  data () {
    return {
      userName: "",
      details: {
        bio:"",
        contribs: 0,
        scePlayed: 0,
        score: 0
      }
    }
  },
  created() {
    this.userName = auth.currentUser.uid//this.$route.params.userName 
     db.collection("users").doc(this.userName).get().then(doc =>{
                this.details.bio = doc.data().bio
                this.details.contribs = doc.data().contribs
                this.details.scePlayed = doc.data().scePlayed
                this.details.score = doc.data().score
    })  
  }
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#profile {
  display: flex;
  height: 60vh;
  width: 75%;
  justify-content: space-evenly;
  align-items: center;
}
#name {
  margin: 0 0 10px 0;
  color: rgb(182, 0, 0);
}

#pic {
  border: solid white;
  border-radius: 50%;
  border-width: 2px;
  width: 10vw;
  height: 10vw;
  margin: 10px 0 10px;
}
.details-container {
  background-color: #1d1d1d;
  box-shadow: black;
  height: 50%;
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stat-container {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 0 0 0;
}
.stat {
  margin: 10px 0 10px 0;
}
#about {
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#about-text {
  padding: 10px;
  text-align: left;
  background-color: #a7a7a710;
  height: 30vh;
}
@media screen and (max-width: 1400px) {
  #profile {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    width: 100vw;
    margin: 10px 0 0px 0;
  }
  #name-pic {
    min-height: 40%;
  }
  #pic {
    width: 100px;
    height: auto;
  }
  .details-container {
    width: 90%;
  }
}
</style>

<template>
  <div id="profile">
    <div id="name-pic">
      <h1 id="name">{{ this.profileDeets.name }}</h1>
      <img id="pic" src="../assets/profile-pic-1.png" alt="" />
    </div>

    <div class="details-container">
      <div class="stat-container">
        <h2>Stats:</h2>
        <p id="rating" class="stat">
          - Rating: {{ this.profileDeets.score }}
        </p>
        <p id="scenarios" class="stat">
          - Scenarios Played: {{ this.profileDeets.scePlayed }}
        </p>
        <p id="contributions" class="stat">
          - Contributions: {{ this.profileDeets.contribs }}
        </p>
      </div>
      <div id="about">
        <h2 id="about-header">About</h2>
        <p id="about-text">{{ this.profileDeets.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilePage",
  props: ["profileDeets"]
};
</script>

<style scoped>
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

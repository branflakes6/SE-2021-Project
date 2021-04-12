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
export default {
  name: "fakeLeaderboard",
  data: () => ({
    users: [
      {
        name: "Pokerlover47",
        rating: 1928,
        scenariosPlayed: 432,
        contributions: 15,
      },
      {
        name: "VodkaPokerCoke",
        rating: 1911,
        scenariosPlayed: 390,
        contributions: 1,
      },
      {
        name: "pokerlicious",
        rating: 1875,
        scenariosPlayed: 582,
        contributions: 12,
      },
      {
        name: "pokeypokey",
        rating: 1872,
        scenariosPlayed: 792,
        contributions: 8,
      },
      {
        name: "jack",
        rating: 1852,
        scenariosPlayed: 304,
        contributions: 22,
      },
      {
        name: "mamaaaaaaaa99",
        rating: 1812,
        scenariosPlayed: 280,
        contributions: 17,
      },
      {
        name: "justkilled73",
        rating: 1774,
        scenariosPlayed: 197,
        contributions: 19,
      },
      {
        name: "a_man",
        rating: 1741,
        scenariosPlayed: 397,
        contributions: 6,
      },
      {
        name: "putA_gunAgain5t_hi5_h3d",
        rating: 1688,
        scenariosPlayed: 269,
        contributions: 19,
      },
      {
        name: "pu113ed_muh",
        rating: 1659,
        scenariosPlayed: 198,
        contributions: 17,
      },
      {
        name: "3ger_nao",
        rating: 1603,
        scenariosPlayed: 308,
        contributions: 11,
      },
      {
        name: "he5_d3ad",
        rating: 1572,
        scenariosPlayed: 459,
        contributions: 6,
      },
    ],
  }),
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

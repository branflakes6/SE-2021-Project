<template>
  <div id="main-div">
    <h1>Upper Hand Leaderboard</h1>
    <fakeLeaderboard />
  </div>
</template>

<script>
import fakeLeaderboard from "./fakeLeaderboard";
export default {
  name: "fakeLeaderboardPage",
  components: {
    fakeLeaderboard,
  },
};
</script>
<style scoped>
#main-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
}
h1 {
  color: white;
}
</style>

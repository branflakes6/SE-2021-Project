<template>
  <div id="main-div">
    <!-- getting the scenario address stored as data for the app
         not the best way of doing it but works for now -->
    <scenario v-bind:address="this.$parent.$parent.$parent.$parent.scenario" />
  </div>
</template>

<script>
import scenario from "./scenario";
export default {
  components: {
    scenario,
  },
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
}
</style>

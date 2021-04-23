<template>
  <div id="dialog-container">
    <v-card>
      <h3 align="center">{{ type }} Decision</h3>
      <h4>{{ text }}</h4>
    </v-card>

    <!-- scenario options after user answered, wont display on invalid decision -->
    <template v-if="type != 'Invalid'">
      <v-btn to="/scenarioBrowser" dark class="post-option" v-model="answered">
        <h1>Browse</h1>
      </v-btn>
      <v-btn
        active-class="no-active"
        dark
        class="post-option"
        v-model="answered"
        @click.stop="reload()"
      >
        <h1>Retry</h1>
      </v-btn>
      <v-btn to="/" dark class="post-option" v-model="answered">
        <h1>Home</h1>
      </v-btn>
    </template>
  </div>
</template>

<script>
export default {
  name: "optionDialogue",
  props: ["type", "text"],
  methods: {
    reload() {
      window.location.reload();
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
#dialog-container {
  display: flex;
  flex-direction: column;
}
.post-option {
  background-color: #222222 !important;
  border: solid white !important;
  margin: 10px 0 10px 0;
}
.post-option:hover {
  background-color: #3d3d3d !important;
}
.no-active {
  background-color: #222222 !important;
}
</style>

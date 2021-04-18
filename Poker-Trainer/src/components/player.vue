<template>
  <div class="player-container">
    <!-- users cards -->
    <div class="d-c-container">
      <div v-if="playerParams.dealer" class="dealer-chip-container">
        <img
          class="dealer-chip"
          src="../assets/dealer-chip.png"
          alt="dealer-chip"
        />
      </div>
      <div class="player-chips-container">
        Chips: {{ playerParams.chipsAvailable }}
      </div>
    </div>
    <div class="player-cards">
      <vue-playing-card
        :signature="playerParams.cardOne"
        :width="cardWidth"
      ></vue-playing-card>
      <vue-playing-card
        :signature="playerParams.cardTwo"
        :width="cardWidth"
      ></vue-playing-card>
    </div>
    <v-btn class="player-details">
      {{ playerParams.name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "player",
  props: ["playerParams", "cardWidth"],
};
</script>

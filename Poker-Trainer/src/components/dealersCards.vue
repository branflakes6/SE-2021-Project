<template>
 <div>
    <div v-if="cards.length == 5">
            <vue-playing-card
                signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[1]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[2]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[3]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[4]"
                :width="cardWidth"
              ></vue-playing-card>
    </div>
    
    <div v-if="cards.length == 4">
            <vue-playing-card
                signature="cover"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[1]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[2]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[3]"
                :width="cardWidth"
              ></vue-playing-card>
    </div>
    <div v-if="cards.length == 3">
            <vue-playing-card
                signature="cover"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[1]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[2]"
                :width="cardWidth"
              ></vue-playing-card>
    </div>
     <div v-if="cards.length == 2">
            <vue-playing-card
                signature="cover"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[1]"
                :width="cardWidth"
              ></vue-playing-card>
    </div>
     <div v-if="cards.length == 1">
            <vue-playing-card
                signature="cover"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="cards[0]"
                :width="cardWidth"
              ></vue-playing-card>
    </div>
</div>
</template>


<script>
export default {
  name: "dealersCards",
  props: ["cards"],
  data: function() {
    return {
      OneCard: false,
      TwoCard: false,
      ThreeCard: false,
      FourCard: false,
      FiveCard: false,
      loaded: false,
      cardWidth: 85
    };
  },

};
</script>

<style>
</style>

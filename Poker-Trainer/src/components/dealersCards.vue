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
  methods: {
   handleResize() {
      if (window.innerWidth < 400) {
        this.cardWidth = 10;
      } else if (window.innerWidth < 600) {
        this.cardWidth = 20;
      } else if (window.innerWidth < 800) {
        this.cardWidth = 30;
      } else if (window.innerWidth < 1000) {
        this.cardWidth = 40;
      } else if (window.innerWidth < 1200) {
        this.cardWidth = 50;
      } else {
        this.cardWidth = 65;
      }
    },
   
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
   },
   destroyed() {
    window.removeEventListener("resize", this.handleResize);
   },
   
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

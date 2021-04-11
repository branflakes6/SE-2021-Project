const database = [
  // Sample Scenario 0
  {
    title: "Going All In",
    context:
      "Jack went all in, meaning he thinks he has the best hand! Will you call his bluff? ",
    pot: 55,
    numOfOpponents: 5,
    dealer: 5,
    showCardsAfter: true,
    callType: "Correct",
    callText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    foldType: "Wrong",
    foldText:
      "Your opponent went all in and you had a Royal Flush, the best possible hand. The only correct decision in this situation is to go all in!",
    raiseType: "Invalid",
    raiseText: "",
    cardsOnTable: {
      firstCard: "ac",
      secondCard: "kh",
      thirdCard: "8s",
      fourthCard: "ah",
      fifthCard: "3d",
      sixthCard: "qh",
    },

    userParams: {
      name: "You",
      cardOne: "jh",
      cardTwo: "th",
      chipsBet: 5,
      chipsAvailable: 55,
    },
    opponentOneParams: {
      name: "Kylie",
      cardOne: "8d",
      cardTwo: "8h",
      chipsBet: 5,
      chipsAvailable: 33,
    },
    opponentTwoParams: {
      name: "Jack",
      cardOne: "ad",
      cardTwo: "as",
      chipsBet: 5,
      chipsAvailable: 35,
    },
    opponentThreeParams: {
      name: "Daniel",
      cardOne: "kd",
      cardTwo: "ks",
      chipsBet: 5,
      chipsAvailable: 49,
    },
    opponentFourParams: {
      name: "Alex",
      cardOne: "qs",
      cardTwo: "qd",
      chipsBet: 5,
      chipsAvailable: 42,
    },
    opponentFiveParams: {
      name: "Kevin",
      cardOne: "js",
      cardTwo: "jd",
      chipsBet: 5,
      chipsAvailable: 47,
    },
  },
  // Sample Scenario 1
  {
    title: "how aggressive should i play",
    context:
      "Most of the players bet before the flop. Alex is raising to 10, causing some players to fold. Only 3 people are still in.",
    pot: 25,
    numOfOpponents: 5,
    dealer: 4,
    showCardsAfter: false,
    callType: "Correct",
    callText:
      "You have a good hand but shouldn't raise quickly, we don't want anyone else folding. You should lead the other players into betting more after the turn.",
    foldType: "Wrong",
    foldText: "You have a good hand, so you shouldn't fold.",
    raiseType: "Wrong",
    raiseText: "Your hand is good, but it is too risky to raise already.",
    cardsOnTable: {
      firstCard: "cover",
      secondCard: "cover",
      thirdCard: "cover",
      fourthCard: "kh",
      fifthCard: "jd",
      sixthCard: "8s",
    },

    userParams: {
      name: "You",
      cardOne: "js",
      cardTwo: "8d",
      chipsBet: 5,
      chipsAvailable: 55,
    },
    opponentOneParams: {
      name: "Kylie",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 33,
    },
    opponentTwoParams: {
      name: "Jack",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 35,
    },
    opponentThreeParams: {
      name: "Daniel",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 49,
    },
    opponentFourParams: {
      name: "Alex",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 42,
    },
    opponentFiveParams: {
      name: "Kevin",
      cardOne: "cover",
      cardTwo: "cover",
      chipsBet: 5,
      chipsAvailable: 47,
    },
  },
  // Sample Scenario 2
  {
    title: "Good time to fold?",
    context: "Cards have been dealt and first round of betting has begun.",
    pot: 55,
    numOfOpponents: 5,
    dealer: 5,
    showCardsAfter: false,
    callType: "Wrong",
    callText:
      "Poor hand, and because of the where the dealer chip is, you are in a poor position.",
    foldType: "Correct",
    foldText:
      "Poor hand, and because of the where the dealer chip is, you are in a poor position.",
    raiseType: "Wrong",
    raiseText:
      "Poor hand, and because of the where the dealer chip is, you are in a poor position.",
    cardsOnTable: {
      firstCard: "cover",
      secondCard: "cover",
      thirdCard: "cover",
      fourthCard: "cover",
      fifthCard: "cover",
      sixthCard: "cover",
    },

    userParams: {
      name: "You",
      cardOne: "6s",
      cardTwo: "8d",
      chipsBet: 5,
      chipsAvailable: 55,
    },
    opponentOneParams: {
      name: "Kylie",
      cardOne: "8d",
      cardTwo: "8h",
      chipsBet: 5,
      chipsAvailable: 33,
    },
    opponentTwoParams: {
      name: "Jack",
      cardOne: "ad",
      cardTwo: "as",
      chipsBet: 5,
      chipsAvailable: 35,
    },
    opponentThreeParams: {
      name: "Daniel",
      cardOne: "kd",
      cardTwo: "ks",
      chipsBet: 5,
      chipsAvailable: 49,
    },
    opponentFourParams: {
      name: "Alex",
      cardOne: "qs",
      cardTwo: "qd",
      chipsBet: 5,
      chipsAvailable: 42,
    },
    opponentFiveParams: {
      name: "Kevin",
      cardOne: "js",
      cardTwo: "jd",
      chipsBet: 5,
      chipsAvailable: 47,
    },
  },
];

export default database;

<template>
  <div id="main-div">
    <div id="askLogIn" v-if="!loggedIn">
      <h1>Welcome To The Account Page</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem
        ipsum earum tenetur maiores pariatur adipisci velit doloremque nesciunt
        neque.
      </h3>
      <div id="btn-container">
        <v-btn
          width="200"
          outlined
          class="signup"
          v-on:click="showSignUpForm = !showSignUpForm"
        >
          Create Account
        </v-btn>
        <v-btn
          width="200"
          outlined
          class="signup"
          v-on:click="showSignInForm = !showSignInForm"
        >
          Sign In
        </v-btn>

        <small>---- or connect with ----</small>
        <a id="facebook-link">
          <v-icon color="blue"> mdi-facebook</v-icon> Facebook</a
        >
        <a id="google-link"><v-icon color="red"> mdi-google</v-icon> Google</a>

        <a id="apple-link"><v-icon color="white"> mdi-apple</v-icon> Apple</a>
      </div>

      <v-dialog v-model="showSignUpForm" max-width="640">
        <v-card dark id="signup-form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="signUpEmail"
        :error-messages="errors" label="Email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signUpUsername"
        :error-messages="errors" label="Username" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="signUpPassword"
                   :error-messages="errors"
                    label="Password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    required
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="register" class="createAccount-btn" type="submit"
            color="red darken-1" text @click="showSignUpForm = false">
              Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="showSignInForm" max-width="640">
        <v-card dark id="signin-form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="signInEmail"
                    :error-messages="errors"
                    label="Email"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="signInPassword"
                    :error-messages="errors"
                    label="Password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    required
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="login" class="login-btn" type="submit"
              color="red darken-1"
              text
            >
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div v-else id="profile">
      <div id="name-pic">
        <h1 id="name">{{ this.profileDetails.name }}</h1>
        <img id="pic" src="../assets/profile-pic-1.png" alt="" />
      </div>

      <div class="details-container">
        <div class="stat-container">
          <h2>Stats:</h2>
          <p id="rating" class="stat">
            - Rating: {{ this.profileDetails.rating }}
          </p>
          <p id="scenarios" class="stat">
            - Scenarios Played: {{ this.profileDetails.scenariosPlayed }}
          </p>
          <p id="contributions" class="stat">
            - Contributions: {{ this.profileDetails.contributions }}
          </p>
        </div>
        <div id="about">
          <h2 id="about-header">About</h2>
          <p id="about-text">{{ this.profileDetails.about }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
  name: "accountPage",
  components: {},
  props: ["visiting", "loggedIn", "profileDetails"],
  data: function(){
    return{
      errors: '',
      signInEmail: '',
      signInUsername: '',
      signInPassword: '',
      signUpEmail: '',
      signUpUsername: '',
      signUpPassword: '',
      password: '',
      showSignInForm: false,
      showSignUpForm: false,
      showPass: true
    };
  },
  methods:{
    register: function(e){
        firebase.auth().createUserWithEmailAndPassword(this.signUpEmail,this.signUpPassword)
            .then(user => {
              alert('Account created for '+this.signUpEmail);
              this.$router.push('/');
              console.log(user)
              },
              err => {
                  alert(err.message)
            })
        e.preventDefault();
    },
      login: function(e){
        console.log(this.signInEmail)
        firebase.auth().signInWithEmailAndPassword(this.signInEmail,this.signInPassword)
            .then(user => {
              alert('You are logged in as '+this.signInEmail);
              this.showSignInForm = false;
              this.$root.loggedIn = true;
              this.$router.push('/');
              console.log(user)
              },
              err => {
                  alert(err.message)
            })
        e.preventDefault();
    }
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
#askLogIn {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3 {
  width: 55%;
  margin: 60px 0 10px 0;
}
.signup {
  color: red;
  font-size: 15px !important;
  margin: 10px 0 10px 0;
  border-radius: 5%;
}
#btn-container {
  background-color: #0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 40px 0 0 0;
}
a {
  margin: 5px 0 5px 0;
}
#facebook-link {
  color: #2196f3;
}
#google-link {
  color: #f34336;
}
#apple-link {
  color: white;
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

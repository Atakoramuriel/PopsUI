<template>
    <div id="login">
    <!-- Area for top nav -->
    <div class="nav black" style="position:absolute; top:0%; width:100%;">
        <h3 class="black red-text" id="title"><b>Pop's WebUI</b></h3>
    </div>

    <div id="index-banner" class="parallax-container" style="">
        <div class="section no-pad-bot">
            <!-- <img src="../assets/logo.png" width="10%"> -->
           <!-- <h1 class=white-text><i>Pop's Tattoo WebUI</i></h1>  -->
        </div>
        <div class="parallax">
            <img src="../assets/WebImages/newLogo.jpg" style="width: 80%;" alt="Amoura">
        </div>
    </div>

<!-- Start with the inputs -->
<center> 
<div id="loginCard">
  <h2 class="white-text" id="subTitle">Login Page</h2>
        <div class="row container">
        <div class="input-field col s12" id="inputTxt">
          <input id="email" type="email" class="validate white-text" v-model="email">
          <label for="email" class=black-text>Email</label>
        </div>
    </div>
    <div class="row container">
        <div class="input-field col s12" id="inputTxt">
          <input id="password" type="password" class="validate white-text" v-model="password">
          <label for="password" class="black-text">Password</label>
        </div>
    </div>
    <div class="row">
        <button class="btn-large red darken-4 waves" v-on:click="loginUser"><b>Login</b></button>
    </div>
</div>

<div class="row">
    <br><br>
</div>

<!-- This is the footer for forgetting the password -->

<div class="row black" style="position: absolute; width: 100%;">
    <br>
    <router-link to="/register">
        <a href="#">Need to create an account? Click here </a>
    </router-link>
    <br> <br>
</div>

</center>



    </div>
</template>

<style>
#title{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#subTitle{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#loginCard{
    width: 75%;
    text-align: center;
    padding-bottom: 5%;
}

input{
    color: black;

}

#inputTxt{
    border: solid rgb(92, 92, 92) 2px;
    border-radius: 30px;
    background-color: rgb(92, 92, 92);
}

label{
    color: black;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: red;
}
</style>

<script>
import firebase from 'firebase'
import 'materialize-css'
import db from './firebaseInit'
name: 'Login'
export default {
    data(){
        return {
            email: null,
            password: null,


        }
    },
    created(){

    },
    methods: {
        loginUser(){
            //This is signing the users into the account
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => { //saves username and password
                var username = firebase.auth().currentUser.displayName
                alert("Logged In")
                //alert(`Welcome back ${username}`); //Welcome back message
                //this.$router.push("/Home") //Redirect to the dashboard full of posts
                this.$router.go({path: this.$router.path})
                location.reload();
                })
        }
    }
}
</script>

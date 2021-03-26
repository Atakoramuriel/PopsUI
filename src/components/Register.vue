<template>
    <div id="register">
        <h2 class=white-text>Register Page</h2>
        <!-- Start with the inputs -->
<center> 
<div id="registerCard">
    <div class="row container">
        <div class="input-field col s12" id="inputTxt">
          <input id="email" type="email" class="validate" v-model="email">
          <label for="email" class=black-text>Email</label>
        </div>
    </div>
    <div class="row container">
        <div class="input-field col s12" id="inputTxt">
          <input id="password" type="password" class="validate" v-model="password">
          <label for="password" class="black-text">Password</label>
        </div>
    </div>
      <div class="row container">
        <div class="input-field col s12" id="inputTxt">
          <input id="password" type="password" class="validate" v-model="ConfirmPassword">
          <label for="password" class="black-text">Confirm Password</label>
        </div>
    </div>
    <div class="row">
        <button class="btn-large red darken-4 waves" v-on:click="createUser"><b>Create Account</b></button>
    </div>
</div>


<!-- This is the footer for forgetting the password -->

<div class="row" style="">
    <br><br>
    <router-link to="/login">
        <a href="#">Already have an account? Click to Login</a>
    </router-link>
 
</div>

</center>

    </div>
</template>

<style>
#registerCard{
    width: 75%;
    text-align: center;
 
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
</style>

<script>
import firebase from 'firebase'
import db from './firebaseInit'
import 'materialize-css'
name: 'register'
export default {
    data(){
        return {

            email: null,
            password: null,
            ConfirmPassword: null,
        }
    },
    created(){

    },
    methods: {
        createUser(){
            //Creation of variables
            var email = this.email;
            var password = this.password; 
            var ConfirmPassword = this.ConfirmPassword; 
            
            if(password == ConfirmPassword){
                //now begin further
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then(user => {
                    alert("Welcome to Pop's WebUI", user.email);
                    console.log(user)
                },
                err => { 
                    alert("VexError: " + err.message);
                });

                event.preventDefault();
                
               

            }else{
                alert("Passwords do not match");
            }

        }
    }
}
</script>

<template>
    <div id="register">
      

      


        <!-- Start with the inputs -->
        <div class="row" id="A"></div>

<center> 
    <div class="row" id="AQUI">
        <center>
            <img src="../assets/WebImages/favicon.png" class="show-on-medium" id="popsIcon" alt="">
        </center>
    </div>
    <div class="row " id="registerSection">
        <div class="col s12 m6 l6 offset-m3 offset-l3">
            <div id="registerCard" class="z-depth-5">
                <center>
    <h2 class=white-text>Create Account</h2>
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
                    <button class="btn-large grey darken-4 waves" v-on:click="createUser"><b>Submit</b></button>
                </div>
                <router-link to="/login">
                    <a href="#">Already have an account? Click to Login</a>
                </router-link>
                </center>
            
            </div>
        </div>
    </div>



<!-- This is the footer for forgetting the password -->

<div class="row" style="">
    <br><br>
  
 
</div>

</center>

    </div>
</template>

<style>
#AQUI{
    position: absolute;
    top: 10%;
    width: 100%;
    z-index: 4;
}

#popsIcon{
    background: black;
    border: solid red 0px;
    border-radius: 20px;
    padding: 2%;
    z-index: 2;
    top: 8%;
    width: 7%;

}
#A{
    background: linear-gradient(to bottom, black, rgb(56, 18, 18), black);
    padding: 5%;
    z-index: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0%;
}

#registerSection{
    position: absolute;
    top: 15%;
    width: 100%;
}

#registerCard{
    text-align: center;
    background: linear-gradient(to bottom right, rgb(43, 7, 7), black, rgb(43, 7, 7));
    padding: 2%;
    border-radius: 30px;
 
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

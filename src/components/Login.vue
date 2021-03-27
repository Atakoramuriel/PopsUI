<template>
 <div id="login">
    <!-- Area for top nav -->


<img src="../assets/WebImages/favicon.png" class="show-on-medium" id="popsIcon" alt="">

<div class="row" id="A"></div>
<div class="row" id="B">
  
   
    <h4 class="grey-text" id="loginTitle">Pop's Tattoo </h4>
</div>
<div class="row" id="C"></div>
 
            <div class="row" id="loginSection">
                <div class="col s12 m6 l6 offset-m3 offset-l3">
                    
                        <div id="loginCard" class="z-depth-5">
                        <h2 class="white-text" id="subTitle">Login</h2>
                        <h5 class="red-text" id="ErrorMsg"></h5>
                            <div class="row" id="inputRow" style="padding: 5%">
                                <div class="input-field col s12" id="inputTxt">
                                <input id="email" type="email" placeholder="Email. . ." class="validate white-text" v-model="email">
                                
                                </div>
                        
                                <div class="input-field col s12" id="inputTxt">
                                <input id="password" type="password" placeholder="Password. . . " class="validate white-text" v-model="password">
                            
                                </div>
                            </div>
                            <div class="row">
                                <button class="btn-large grey darken-4 waves" v-on:click="login"><b>Submit</b></button>
                            </div>
                            <div class="row">
                                <router-link to="/register">
                                    <a href="#">Need to create an account? Click here </a>
                                </router-link>
                                <br>
                            </div>
                        </div>
                </div>
            </div>


 
   
 </div>
    
</template>

<style>
#popsIcon{
    background: black;
    border: solid red 0px;
    border-radius: 20px;
    padding: 2%;
    position: absolute;
    z-index: 2;
    top: 13%;
    left: 45%;
    width: 9%;

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

#B{
    position: absolute;
    top: 19%;
    width: 100%;
    z-index: 2;
}

#loginTitle{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 350%;
    z-index: 4;
    position: relative;
}



#loginSection{
    position: absolute;
    top: 25%;
    width: 100%;
}
#title{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#subTitle{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

#loginCard{
    border: solid black 2px;
    border-radius: 30px;
    background: linear-gradient(to bottom right, rgb(43, 7, 7), black, rgb(43, 7, 7));
    text-align: center;
    padding-bottom: 0%;
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
  color: rgb(255, 255, 255);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(255, 255, 255);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgb(255, 255, 255);
}


#bottomBanner{
    background: black;
    position: absolute;
    bottom: 0%;
    padding: 2%;
    width: 100%;
    height: 10px;
    z-index: 3;
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
        },
        login(){
                //This is signing the users into the account
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => { //saves username and password
                var username = firebase.auth().currentUser.displayName
                //alert(`Welcome back ${username}`); //Welcome back message
                this.$router.push("/admin") //Redirect to the dashboard full of posts
                //this.$router.go({path: this.$router.path})
                location.reload();
            },
            err => {
               // alert(err.message); //If there is an error then display message
               
               document.getElementById('ErrorMsg').textContent = "Incorrect Email or Password"
                this.$router.push('/login') //Redirect the user
            })
            event.preventDefault();
        }
    }
}
</script>

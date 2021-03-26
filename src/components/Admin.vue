<template>
    <div id="admin">
       <!-- Start with the top nav -->
         <nav>
            <div class="nav-wrapper">
            <a href="#" class="left title" ><i>Pop's Client <a href="#" class="red-text">Web UI</a></i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="#">Clients</router-link></li>
                <li><router-link to="#">Artists</router-link></li>
                <li><router-link to="#">Gallery</router-link></li>
                <li><router-link to="#" class="red-text">Sign out</router-link></li>
            </ul>
            </div>
        </nav>
        
        <!-- This is the main section -->
        <div class="row" id="main">
            <br>
            <!-- This is the section for the Menu Buttons -->
            <div class="col s12 m2 l2  offset-m1 offset-l1">
                <!-- This is the section Buttons -->
                <div class="row">
                    <div class="col s12 m12">
                    <div class="card z-depth-4" id="menuCard">
                        <div class="card-content white-text">
                         <i class="material-icons">create</i>
                        <span class="card-title">Add New Client info</span>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12">
                    <div class="card z-depth-4" id="menuCard">
                        <div class="card-content white-text">
                            <i class="material-icons">add_a_photo</i>
                        <span class="card-title">New Gallery Image</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12">
                    <div class="card z-depth-4" id="menuCard">
                        <div class="card-content white-text">
                         <i class="material-icons">account_circle</i>
                        <span class="card-title">Update Artist Portfolio</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12">
                    <div class="card z-depth-4" id="menuCard">
                        <div class="card-content white-text">
                            <i class="material-icons">archive</i>
                        <span class="card-title">review deleted content</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <!-- This is the section for the log of user data -->
            <div class="col s12 m9 l9" >
                  <div class="row" >
                    <div class="col s12 m12 l12 ">
                        <h5 class="white-text">{{selecctedTask}}</h5>
                    <div class="card" id="clientCard">
                        <div class="card-content white-text">
                        <span class="card-title"></span>
                        <table class="responsive-table highlight">
                            <thead>
                            <tr>
                                <th>F.Name</th>
                                <th>L.Name</th>
                                <th>Age</th>
                                <th>Tattoo Description</th>
                                <th>Apppointment Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Delete</th>

                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="client in clients" v-bind:key="client.id"> 
                                <td>
                                    {{client.Name}}
                                   <!-- <input placeholder="First Name. . ." id="entryTxt" type="text" class="validate" v-model="newFName"> -->

                                </td>
                                <td>{{client.LName}}</td>
                                <td>{{client.Age}}</td>
                                <td>{{client.Description}}</td>
                                <td>{{client.AptDate}}</td>
                                <td>{{client.startTime}}</td>
                                <td>{{client.endTime}}</td>
                                <td>
                                    <p v-on:click="deletedClients.push(client)">{{client.delete}}</p>
                                    
                                    <!-- <i class="material-icons" id="uncheckedBox"  v-on:click="checked=!checked">check_box_outline_blank</i> -->
                                    <!-- <i class="material-icons" id="checkedBox" v-if="checked" v-on:click="checked=!checked" >check_box</i> -->
                                </td>
                            </tr>
                            <tr id="entryRow" v-if="swapMessage">
                                <td>
                                     <input placeholder="First Name. . ." id="entryTxt" type="text" class="validate" v-model="newFName">
                                </td>
                                <td>
                                     <input placeholder="Last Name. . ." id="entryTxt" type="text" class="validate" v-model="newLName">
                                </td>
                                <td>
                                     <input placeholder="Age. . ." id="entryTxt" type="text" class="validate" v-model="newAge">
                                </td>
                                <td>
                                     <input placeholder="Tattoo Description. . ." id="entryTxt" type="text" class="validate" v-model="newDescription" >
                                </td>
                                               <td>
                                      <input type="text" class="validate" id="datePick" placeholder="Appointment Date. . ." value=" "  style="color:white;" v-model="newAptDate">
                                </td>
                                <td>
                                     <!-- <input placeholder="Start Time. . ." id="entryTxt" type="text" class="validate"> -->
                                       <input type="text" class="validate" id="entryTxt startPick" placeholder="Start Time. . ." value=""  style="color:white;" v-model="startTime">
                                </td>
                                <td>
                                    <!-- <input placeholder="End Time. . ." id="entryTxt" type="text" class="validate"> -->
                                    <input type="text" class="validate" id="entryTxt endPick" placeholder="End Time. . ."  value=""  style="color:white;" v-model="endTime" v-on:keyup.enter="addNewClient()">

                                </td>
                            </tr>
                        
                            </tbody>
                        </table>
                        </div>
                      
                    </div>
                    </div>
                    <div class="row">
  
                         <div class="col m6 l6">
                            <button class="btn blue darken-4" v-if="!swapMessage" v-on:click="swapMessage=!swapMessage">{{addMessage}}</button>
                            <button class="btn blue darken-4" v-if="swapMessage" v-on:click="addNewClient(); swapMessage=!swapMessage;">{{addMessage2}}</button>
                        </div>
                        <div class="col m6 l6">
                            <button class="btn red darken-4" v-if="!swapMessage2" v-on:click="swapMessage2=!swapMessage2">{{deleteMessage}}</button>
                            <button class="btn red darken-4" v-if="swapMessage2" v-on:click="deleteClient(); swapMessage2=!swapMessage2;">{{deleteMessage2}}</button>
                        </div>
                        
                    </div>
                   
                </div>
                

                <div class="row">
                    <div class="col s12 m3 l3 offset-m1 offset-l1">
                        <div class="card z-depth-4" id="subMenuCard">
                            <div class="card-content white-text">
                                <h5 class="white-text">10</h5>
                                <span class="card-title">Upcoming Appointments</span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m3 l3">
                        <div class="card z-depth-4" id="subMenuCard">
                            <div class="card-content white-text">
                                <h5 class="white-text">4</h5>
                                <span class="card-title">Cancelled Appointments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<style>
/* Styling for the top navigation */
.title{
    font-size: 225%;
    padding-left: 1%;
    padding-top: 0.25%;
    font-family:'Times New Roman', Times, serif
}

nav{
    background: black;
    position: fixed;
    top: 0%;
    width: 100%;
    z-index: 2;
}

/* Area for the buttons */
#menuCard{
    border-radius: 10px;
    background: linear-gradient(to bottom left, rgb(134, 30, 30), rgb(59, 27, 27))
}

#menuCard:hover{
    border-radius: 10px;
    background: linear-gradient(rgb(168, 48, 48), rgb(34, 22, 22));
    cursor: pointer;
    width: 100%;
    
}

#subMenuCard{
    border-radius: 10px;
    background: linear-gradient(to bottom left, grey, rgb(55, 55, 80))
}

#subMenuCard:hover{
    border-radius: 10px;
    background: linear-gradient(to bottom left, rgb(94, 94, 94), rgb(40, 40, 58));
    cursor: pointer;
    width: 100%;
    
}
/* Area for the Client Card */
#clientCard{
    min-height: 550px;
    height: 550px;
    max-height: 550px;
    overflow: auto;
    background: linear-gradient(to bottom right, rgb(46, 64, 97));
    border-radius: 15px;
    
}

/* For the new entry row  */
#entryRow{
    background-color: rgb(17, 17, 54);
    border-radius: 10px;
    color: white;
}

#entryTxt{
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 125%;
}

/* For Date picker */
 .datepicker-date-display {
 background-color: rgb(83, 38, 38);
 
}
.datepicker-day-button{
    color:black;
}

.datepicker-cancel, .datepicker-clear, .datepicker-today, .datepicker-done {
 /* color:rgb(69, 143, 204); */
 color: rgb(83, 38, 38);
}
abbr{
    color: rgb(83, 38, 38);
}
.datepicker-table td.is-today {
 background-color: rgb(83, 38, 38);
 color: white;

}

.datepicker-table td.is-selected {
 background-color: rgb(118, 186, 241);
 color: black;
}

/* For the time picker */
.timepicker-digital-display{
    background-color: rgb(83, 38, 38);
}

.timepicker-close{
    color: rgb(83, 38, 38);
}

circle.timepicker-canvas-bg{
      color: rgb(83, 38, 38);
}

circle{
    color: rgb(134, 30, 30)
}

.timepicker-canvas-bg, .timepicker-canvas-bg, .timepicker-canvas-bearing{
    color: rgb(83, 38, 38);
}

/* For the check boxes */
#checkedBox:hover{
    cursor: pointer;
}

#uncheckedBox:hover{
    cursor: pointer;
}
</style>

<script>
import 'firebase'
import 'materialize-css'
import db from './firebaseInit'
import firebase from 'firebase'
name: 'admin'
export default {
    data(){
        return {
            selecctedTask: null,
            clients:[], 
            newFName: "",
            newLName: "",
            newAge: "",
            newAptDate: "",
            startTime: "",
            endTime: "",
            newDescription: "",
            
            addMessage: "Add New Client appointment",
            addMessage2: "Save Client appointment",
            
            deleteMessage: "Delete Client Appointment",
            deleteMessage2: "Delete Appointments Selected",

            swapMessage: false,
            swapMessage2: false,

            checked: false,

            deletedClients: [],

        }
    },
    created(){
      this.getNewClients()
    },
    mounted(){
        $(document).ready(function(){
            $('.datepicker').datepicker();
        });
    },
    methods: {
        newClient(){
            //open the div for adding a new client
        },
        getNewClients(){
           
            //Fetch the list of clients from new Clients
            var path = db.collection("newClients")
            path.orderBy("timestamp","desc").onSnapshot(snapshot => {
                this.clients = [] //empty out the array for clients
                snapshot.forEach(doc => {
                    console.log(doc.data())
                    const data = {
                        'id' : doc.id,
                        'Name' : doc.data().Name,
                        'LName' : doc.data().LName,
                        'Age' : doc.data().Age,
                        'AptDate' : doc.data().AptDate,
                        'Description' : doc.data().Description,
                        'startTime' : doc.data().startTime,
                        'endTime' : doc.data().endTime,
                        'timestamp' : doc.data().timestamp,
                        'delete' : doc.data().delete 
                    }
                    this.clients.push(data)
                 
                });
            })

        },
        addNewClient(){
           //Add new Client to list 
            var approve = false
      

           
            

              const clientData = {
                        'Name' : this.newFName,
                        'LName' : this.newLName,
                        'Age' : this.newAge,
                        'AptDate' : this.newAptDate,
                        'Description' : this.newDescription,
                        'startTime' : this.startTime,
                        'endTime' : this.endTime,
                        'timestamp' : firebase.firestore.FieldValue.serverTimestamp(),
                    }

            if(this.newFName == ""){
                alert("Fill in First Name");
                approve = false
            }else if(this.newLName == ""){
                alert("Fill in Last Name");
                approve = false
            }else if(this.newAge == ""){
                alert("Fill in Age");
                approve = false
            }else if(this.newAptDate == "")
            {
                alert("fill in Appointment date");
                approve = false
            }else if(this.newDescription== ""){
                alert("Fill in Tattoo Description");
                approve = false
            }else if(this.startTime== ""){
                alert("Fill in start time");
                approve = false
            }else if(this.endTime == "")
            {
                alert("Fill in end time")
                approve = false
            }else{
                approve = true
            }

           if(approve){
               db.collection("newClients").add(clientData)
           }
           
           

           //call getNewClients
           this.getNewClients();
        },
        editclient(clientID){

        },
        deleteClient(client){
            alert(this.deletedClients.length)
            alert("Client Deleted" + client);
            console.log("Deleted Client: " + client);
        }
    }
}
</script>

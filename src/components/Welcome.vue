<template>
    <div id="Welcome">
    <div class="row black" style="position:Absolute; top: 0%; width: 100%;">
        <h5 style="padding:2%;"></h5>
    </div>
    <div id="index-banner" class="parallax-container" style="">
        <div class="section no-pad-bot">
            <!-- <img src="../assets/logo.png" width="10%"> -->
           <!-- <h1 class=white-text><i>Pop's Tattoo WebUI</i></h1>  -->
        </div>
        <div class="parallax">
            <img src="../assets/WebImages/pops.jpeg" style="width: 30%;" alt="Amoura">
        </div>
    </div>
           <!-- Start of row -->
           <div class="row black" style="border: solid red 3px">
               <br><br>
                <div class="row container">
                        <div class="col s12 m6">
                            <button class="btn-large grey darken-4">
                                <h5>Contact Us</h5>
                            </button>
                        </div>
                        <div class="col s12 m6">
                            <button class="btn-large red darken-4">
                                <h5>Gallery</h5>
                            </button>
                        </div>
                    </div>
                    <br>
                
           </div>

    <!-- Start of the display of the content -->
    <div class="row" id="section">
        <div class="col s12 m6 l6 black">
              <img src="../assets/WebImages/wizard-tattoo.jpg" width="50%">
        </div>
        <div class="col s12 m6 l6 black white-text" id="blackbox">
            <h1 class=grey-text>Ink Gallery</h1>
            <h3 class="white-text">View Pops' Tattoo's Finest Artwork</h3> <br>
            <button class="btn-large red darken-4">View Gallery</button><br> <br>
        </div>
    </div>
     <div class="parallax-container">
         <div class="parallax">
              <img src="../assets/WebImages/lion-head-tattoo-flash.jpg" id="paraImg" width="100%">
         </div>
    </div>
        
    <div class="row" id="section">
        <div class="col s12 m6 l6 black white-text" id="blackbox">
            <h1 class=grey-text>Art</h1>
            <h3 class="white-text">
                Pop's artists take commissions for custom artwork, from portraits to murals. Call or email today!
            </h3> 
            <button class="btn-large red darken-4">View Art</button> <br> <br>
        
        </div>
        <div class="col s12 m6 l6">
           <img src="../assets/WebImages/lion-head-tattoo-flash.jpg" width="100%">
        </div>
    </div>
     <div class="parallax-container">
        <div class="parallax">
          <img src="../assets/WebImages/grim-reaper-tattoo-art.jpeg" id="paraImg" width="100%">
            </div>
    </div>
    <div class="row" id="section">
        <div class="col s12 m6 l6">
              <img src="../assets/WebImages/double-helix.jpg" width="90%">
        </div>
        <div class="col s12 m6 l6 black white-text" id="blackbox">
             <h1 class=grey-text>Piercing</h1>
             <h3 class="white-text">Full-Service Piercing, 7 days a week.</h3> <br>
             <button class="btn-large red darken-4">View Pierce Gallery</button> <br> <br>
             </div>
    </div>
     <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/WebImages/cholos-ghetto-art.jpg" id="paraImg" width="100%">
          </div>
    </div>

    <!-- This is the footer area -->
    <div class="row black">
        <div class="col s12 m12 l12">
            <div class="white-text">
                <h4>Email:
                info@popstattoo.net
                Phone: 
                301-850-1792</h4>
                <h5>
                Address
                Pop's Tattoo
                1917 Seminary Road
                Silver Spring, MD 20910
                </h5>
                <p> © Copyright 2019 Pop's Tattoo LLC</p>
               
            </div>
        </div>
    </div>
        
        
        
    </div>
</template>


<style scoped>
#section{
    border:solid black 3px;
    padding: 1%;
    background-color: black;
}

#blackbox{
    border: solid red 2px;
    border-radius: 10px;
    height: 450px;
}
</style>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

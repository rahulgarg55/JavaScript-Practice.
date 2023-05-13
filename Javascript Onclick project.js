<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      header img {
        width: 100%;
      }
      .button {
        width: 100%;
      }
     
      

      #overlay {
        /* background-image: url(Screens/Upload_Popup.png); */
        background-repeat: no-repeat;
        display: none;
        width: 100%;
        object-fit: cover;
        background-size: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 2;
        background-size: cover;
        height: 100%;
        position: absolute;
        overflow: hidden;
      }
      #img {
        
        
        background-image: url(2.jpg);
        background-size: cover;
        width: 100%;
        height: 100%;
        display: none;
        object-fit: cover;

      }
      
      .card{
        border: hidden;
        margin-top: 100px;
      }
      .cardimg{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #upload{
        display: none;
        object-fit: cover;
        width: 977px;
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 283px;
        position: absolute;
        z-index: 2;
        
   
        
      
       
      }
      #ful{
        display: none;
      }
      #dark{
        display: block;
        
      }
      #do{
        display: none;
      }
      #change{
        display: none;
        transition: 1s;
        
      }
      #stop{
        display: block;
        transition: 1s;
      }
      @media only screen and (max-height: 568px) {
        #overlay{
          height: 100%;
          width: 100%;
        }
       
      }
    </style>
  </head>
  <body id="scroll">
    <header>
      <img src="Screens/Header_Desktop.png" alt="" />
    </header>
    <div>
      <img
        class="button"
        src="Screens/Banner_Desktop.png"
        alt=""
        onclick="on()"
        style="top: 0;"
      />
    
    <div >
    <div id="overlay">
      <div style="  background: rgba(0, 0, 0, 0.1);cursor: pointer;">
        <img
          src="Buttons/Close_X.png"
          alt=""
          onclick="off()"
          width="50px"
          style="float: right;
          margin-top:10px
          ;margin-right: 10px;"
        />
       
         </div>
        <!-- <img
          id="text"
          src="Screens/Upload_Popup.png"
          alt=""
          height="700px"
          width="100%"
        /> -->
        <div class="card mb-12" style="max-width: 100%;">
          <div class="row g-0">
            <div class="col-6 col-md-4 col-lg-4">
              <img id="cardimg" src="Screens/Upload_Popup2.png" class="img-fluid rounded-start" alt="upload">
            </div>
            <div class="col-6 col-md-8 col-lg-8">
              <div class="card-body">
                
                <p class="card-text">
                  <div id="text" style="border: 3px solid grey;">
                    <div id="img"><br><br><br><br><br><br><br><br><br><br></div>
                    <center id="ful" style=""><br><br><br><br><h1><Strong>Uploaded <br> Successfully!</Strong></h1><br><br><br></center>
                    <div id="dark">
                      <center>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16" style="color:rgba(4, 107, 162, 0.863);">
                          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                        </svg>
                        <p><i><b> Drag/Drop files here <br>or</b></i></p>
                        <img src="Buttons/Browse_A_File.png" alt="" width="50%" style="padding-bottom: 40px; cursor: pointer;" onclick="upload()" >
                      </center>
                    </div>
                  </div>
                  <center>
                    <small><img id="stop" src="Buttons/Upload_Album_Inactive.png" width="50%" style="padding-top: 40px; padding-bottom: 0px;"alt=""></small>
                    <small><img id="change" src="Buttons/Upload_Album.png" width="50%" style="padding-top: 40px; padding-bottom: 0px;"alt="" onclick="save()"></small>
                    <small><img id="do" src="Buttons/Upload_Album_Down.png" width="50%" style="padding-top: 40px; padding-bottom: 0px;"alt=""></small>

                  </center>
                  
                </p>
               
              </div>
            </div>
          </div>
          <div style="background-color:rgb(18, 86, 123);color: #fff ;size: 24;"><CENter><h2>ADD AS MANY PHOTOS AS YOU'D LIKE</h2></CENter></div>
        </div>
        
      </div>
    </div>

    
      <img src="Buttons/Like_Descending.png" alt="" width="10%">
      <img src="Buttons/Time_Descending.png" alt=""width="10%">
      <img style="float: right;" src="Buttons/Refresh_Album_Down.png" alt="" width="15%">
    </div>
    
      <div class="card" style="width: 50%;margin-left: 25%;border: hidden;">
        <img src="1.jpg" class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text">Andrew tate</p>
        </div>
        
      </div>
      <div>
        <div class="card" style="width: 50%;margin-left: 25%;border: hidden;">
          <img src="1.jpg" class="card-img-top" alt="..." width="100%">
          <div class="card-body">
            <p class="card-text">Andrew tate</p>
          </div>
          
        </div>
    
    <script>
      function on() {
        document.getElementById("overlay").style.display = "block";
        
        document.getElementById("scroll").style.overflow="hidden";
      }

      function off() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("stop").style.display="block";
        document.getElementById("change").style.display="none";
        document.getElementById("do").style.display="none";
        document.getElementById("ful").style.display="none";
        document.getElementById("img").style.display="none";
        document.getElementById("dark").style.display = "block";
        document.getElementById("scroll").style.overflow="visible";
      }
      function upload(){
        document.getElementById('img').style.display="block";
        document.getElementById('dark').style.display="none";
        document.getElementById('change').style.display="block";
        document.getElementById('stop').style.display='none';
      }
      function save(){
        document.getElementById("ful").style.display="block";
        document.getElementById("img").style.display="none";
        document.getElementById("change").style.display="none";
        document.getElementById('do').style.display="block";
      }
    </script>
  </body>
</html>

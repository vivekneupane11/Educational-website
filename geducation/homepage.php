<!DOCTYPE html>
<html lang="en">
<head>
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link href="css/homepage.css" rel="stylesheet">
    <link href="css/textanimation.css" rel="stylesheet">
    <link href="include/slider/slider.css" rel="stylesheet">
    <style>
        footer
        {
            width: 100%;
            height: 300px;
            border:1px solid black;
            background-color: black;
            color:white;

        }
        footer div

        {
            flex-grow: 1;

        }
        
    </style>
</head>
<body onload="startTimer()">
    <div class="main-grid">
  
       <?php include('include/banner.php'); ?> <!-- 1)INCLUDED BANNER.THE FIRST BIG IMAGE , WITH SLIDING
        BACKGROUND , AND ALL THE CONTENT ON IT. TOOL BAR TOO..DARK COVER DIV ON HOVER
        !-->
    <?php include('include/slider/slider.php');  ?> <!-- Slider wala banner tala ko !-->



    <div class="timer">
<br> 
<p id="timertext1">COURSES FOR FREE</p><p id="timertext"> GET 100S OF ONLINE</p> <br>
<p id="timertext2">REGISTER NOW</p>
<div class="form" id="registerform" onmouseover="verifybutton()">

<div id="boxes" style=
 >
    <input onfocus="emailsverify()" onfocusout="emailverify()" class="boxes" type="email" name="email" placeholder="Email : example@gmail.com" required id="email"><br>

      <p id="gmailverify1"style="color:red;font-family:roboto;
     font-size:10px;padding:5px;
     font-weight:bolder;display:none;
     "><i class="fas fa-exclamation-triangle"></i>Example:example@gmail.com</p>

    <input class="boxes" onfocus="passwordsverify()" onfocusout="passwordverify()" type="password" name="password" placeholder="Password" required id="password"><br>

      <p id="passwordverify1"style="color:red;font-family:roboto;
     font-size:10px;
     font-weight:bolder;display:none;
     "><i class="fas fa-exclamation-triangle"></i>Password minimum length : 8 characters</p>

   

    <input id="register" onclick= "register()" type="submit" class="boxesbutton" name="submit" value="GET IT NOW" >

</div>
</div>

</div>

<!--Timer ko div ends here!-->
<br>
<div class="events">
    <h1>EVENTS</h1>
    <p>Upcoming Educational Events to Feed your Brains.</p>
<div class="event">
    <div class="event1" style="box-shadow:0 1px 5px rgba(104,104,104,0.8); display:grid;grid-template-columns: 1fr 1fr;width:500px;">
       <img src="include/slider/sliderimage/course10.jpg" style="margin-left:1px;height:200px;width:220px;box-shadow:0 1px 5px rgba(104,104,104,0.8); 
       background-position: cover;object-position: center;" alt="">
       <div>
           <p style="top:0px;justify-content:start;float:left;font-family: 'Roboto Slab',serif;font-size:17px;font-weight:700;color: rgb(51, 51, 51); ">Seminar on Data Science</p>
            <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fab fa-bandcamp"></i> &nbsp;Organizer : Pokhara University </p>
                 <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-map-marker" style="font-size:20px"></i> &nbsp;Venue : Baneshwor, Kathmandu</p>
                  <p style="margin-right:-13px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "> <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Date : 23rd August, 2018</p>     
                   <p id="demo" style="margin-right:10px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="far fa-clock"></i>/i> &nbsp;</p>       </div>
    </div>

<div class="event2"  style="box-shadow:0 1px 5px rgba(104,104,104,0.8); display:grid;grid-template-columns: 1fr 1fr;width:500px; background-color:white;">
   <img src="include/slider/sliderimage/course5.jpg" style="margin-left:1px;height:200px;width:220px;box-shadow:0 1px 5px rgba(104,104,104,0.8); 
       background-position: cover;object-position: center;" alt="">
       <div>
           <p style="justify-content:start;margin-left:10px;margin-top:-10px;font-family: 'Roboto Slab',serif;font-size:17px;font-weight:700;color: rgb(51, 51, 51); ">Seminar on Data Science</p>
            <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fab fa-bandcamp"></i> &nbsp;Organizer : BroadWay infosis</p>
                 <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-map-marker" style="font-size:20px"></i> &nbsp;Venue : Baneshwor, Kathmandu</p>
                  <p style="margin-right:-13px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "> <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Date : 3rd September, 2018</p>     
                   <p id="demo1" style="margin-right:10px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="far fa-clock"></i> &nbsp;</p>       </div>
    </div>
</div>
<br>
<div class="event3"  style="box-shadow:0 1px 5px rgba(104,104,104,0.8); display:grid;grid-template-columns: 1fr 1fr;width:500px; background-color:white;">
       <img src="include/slider/sliderimage/course1.jpg" style="margin-left:1px;height:200px;width:220px;box-shadow:0 1px 5px rgba(104,104,104,0.8); 
       background-position: cover;object-position: center;" alt="">
       <div>
           <p style="justify-content:start;margin-left:10px;margin-top:-10px;font-family: 'Roboto Slab',serif;font-size:17px;font-weight:700;color: rgb(51, 51, 51); ">Machine Learning tranning</p>
            <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fab fa-bandcamp"></i> &nbsp;Organizer : Kathmandu University</p>
                 <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-map-marker" style="font-size:20px"></i> &nbsp;Venue : Dhulikhel , Kavre</p>
                  <p style="margin-right:-13px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "> <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Date : 3rd September, 2018</p>     
                   <p id="demo2" style="margin-right:10px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="far fa-clock"></i> &nbsp;</p>       </div>
</div>
<div class="event4" style="box-shadow:0 1px 5px rgba(104,104,104,0.8); display:grid;grid-template-columns: 1fr 1fr;width:500px; background-color:white;">
<img src="include/slider/sliderimage/course3.jpg" style="margin-left:1px;height:200px;width:220px;box-shadow:0 1px 5px rgba(104,104,104,0.8); 
       background-position: cover;object-position: center;" alt="">
       <div>
           <p style="justify-content:start;margin-left:10px;margin-top:-10px;font-family: 'Roboto Slab',serif;font-size:17px;font-weight:700;color: rgb(51, 51, 51); ">CCMA tranning</p>
            <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fab fa-bandcamp"></i> &nbsp;Organizer : LivFrog infosis</p>
                 <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-map-marker" style="font-size:20px"></i> &nbsp;Venue : Lalitpur, Kathmandu</p>
                  <p style="margin-right:-13px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "> <p style="float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Date : 3rd September, 2018</p>     
                   <p id="demo3" style="margin-right:10px;float:left;font-family: 'Roboto Slab',serif;font-size:14px;font-weight:500;color:black;margin-top:-20px; "><i class="far fa-clock"></i> &nbsp;</p>       </div>

</div>
</div>
    

</div>
<br>    
<footer style="display:flex;">
    <div style="width:300px;padding: 10px; margin-left:40px; ">
      <h6> About Us </h6> 
      <p style="text-align: justify;">We believe in providing quality education for distant people in low price.We are open source platform where any one can be a mentor and a learner.Feel free to connect with us.</p>
    </div>

    <div style="margin:5px;">
        <h6>Quick Links</h6>
        <a href="#">Courses</a><br>
        <a href="#">Exam Results</a><br>
        <a href="#">Mentors Profile</a><br>
        <a href="#">Sucess Stories</a><br>
        <a href="#">Register</a>
    </div>
    <div>
        <h6>Secure Payments</h6>
        <img src="images/paypal.svg" alt="" height="100" width="100">
        <img src="images/visa.svg" alt="" height="100" width="100">
    </div>
    <div>
       <h6>Stay Connected</h6>
       <img src="images/facebook.png" alt="" height="50" width="50">
       <img src="images/instagram.png" alt="" height="50" width="50">
    </div>
    <div style="width: 200px;"><iframe width="100%" height="250" src="https://maps.google.com/maps?width=100%&amp;height=250&amp;hl=en&amp;coord=27.7172453, 85.3239605&amp;q=Kathmandu%20Nepal+(E-learning)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Create Google Map</a></iframe></div><br />
</footer> 
</div>

</div>



</body>
<script>
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
     document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
     document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
           document.getElementById("demo1").innerHTML = "EXPIRED";
            document.getElementById("demo2").innerHTML = "EXPIRED";
               document.getElementById("demo3").innerHTML = "EXPIRED";
    }
}, 1000);
</script>

<script>
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
</script>
<script src="homepage.js"></script>
<script src="include/slider/slider.js" type="text/javascript"></script>


</html>
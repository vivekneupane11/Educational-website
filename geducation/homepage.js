window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky"); 
    navbar.style.backgroundColor="white";
    navbar.style.width="100%";
    navbar.style.zIndex="100";
    document.getElementById("a").zIndex="-1";
    document.getElementById("b").zIndex="-1";
    document.getElementsByClassName("slider-btn-hldr ").style.display="none";
  } else {
    navbar.classList.remove("sticky"); 
    navbar.style.backgroundColor="transparent";
    navbar.style.zIndex="1";
    navbar.style.transition = "all 2s";
    navbar.style.width="100%";
    document.getElementById("a").zIndex="-1";
    document.getElementById("b").zIndex="-1";
  }
}
//above code for scrolling navbar at top effect
//REGISTRATION FORM ERROR FREE BANAUNA """""""""""""""""""""""""""""""""""""""""""//

 ///////////////////////////////errrrrrrrrrrorrrrrrrrrrrrrrrrrrrrrrrr fffffffffffrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//////////////////////
//CODE FOR TRANSPARENT BLACK BANNERCATEGORY TO BLACK

var bestindustry = document.getElementById("bestindustry");
bestindustry.onmouseover = function(){
bestindustry.style.backgroundColor="black";
bestindustry.style.transition = "all 1s";
}
bestindustry.onmouseout = function(){
  bestindustry.style.backgroundColor="rgba(0, 0, 0, 0.7)";
}


var books = document.getElementById("books");
books.onmouseover = function(){
books.style.backgroundColor="black";
books.style.transition = "all 1s";
}
books.onmouseout = function(){
  books.style.backgroundColor="rgba(0, 0, 0, 0.7)";
}

var courses = document.getElementById("courses");
courses.onmouseover = function(){
courses.style.backgroundColor="black";
courses.style.transition = "all 1s";
}
courses.onmouseout = function(){
  courses.style.backgroundColor="rgba(0, 0, 0, 0.7)";
}




//change backgroundimage
var banner = document.getElementById("banner");
banner.style.backgroundImage='url("images/1.jpg")';
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  if(x==0){
banner.style.backgroundImage = 'url('+images[x]+')';
banner.style.transition="all 3s";
document.getElementById("a").style.color="white";
document.getElementById("b").style.color="white";
}
else if(x==1){
  banner.style.backgroundImage = 'url('+images[x]+')';
  banner.style.transition="all 3s";
document.getElementById("a").style.color="black";
document.getElementById("b").style.color="black";
}
else{
  banner.style.backgroundImage = 'url('+images[x]+')';

}
}
function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
banner.style.backgroundImage = 'url('+images[x]+')';
document.getElementById("a").style.color="white";
document.getElementById("b").style.color="white";

}
//body bata call vaxa
function startTimer() {
  setInterval(displayNextImage, 7000);
}

var images = [], x = -1;
images[0] = "images/0.jpg";
images[1] = "images/1.jpg";
//background image sakkiyo


//hover ma div dekha
  var course = document.getElementById("course");
  var coursediv = document.getElementById("coursediv");
  course.onmouseover = function(){
          coursediv.classList.add('coursediv1');
 
        };
    
        coursediv.onmouseover = function(){
          coursediv.classList.add('coursediv1');
        };
        coursediv.onmouseout = function(){
          coursediv.classList.remove('coursediv1');
        };
//hover ma coourse ends here



//search starts here
        var searchi = document.getElementById("searchi");
        var wholesearch = document.getElementById("wholesearch");
        searchi.onclick=function(){
         wholesearch.style.visibility="visible";
         wholesearch.style.width="1360px";
         wholesearch.style.height="105vh";
         wholesearch.style.transition="0.7s all";
         document.body.style.overflow = "hidden";
         window.document.onkeydown = function (e)
         {
         if (!e) e = event;
         if (e.keyCode == 27)
         {
         
         
            
            wholesearch.style.display="none";
            location.reload();
           
          
        
         }
         }
     
        }
       document.getElementById("close").onclick= function(){
      
        wholesearch.style.display="none";
        document.body.style.overflow = "visible";
        location.reload();
       }
        
        
       //search end here
       

       //Register form ko sab starts here  //Register form ko sab starts here  //Register form ko sab starts here  //Register form ko sab starts here


      
 function emailverify(){
var email = document.getElementById("email").value;

var gmail = email.substr(email.length - 10);
if(gmail == "@gmail.com"){
document.getElementById("gmailverify1").style.display = "none";

}
else{
  document.getElementById("gmailverify1").style.display = "block";
  document.getElementById("register").style.display = "block";
}
}

      
 function passwordverify(){
var password = document.getElementById("password").value;


if(password.length < 8){
    document.getElementById("passwordverify1").style.display = "block";
  document.getElementById("register").style.display = "block";

}
else{
document.getElementById("passwordverify1").style.display = "none";

}
}



 function emailsverify(){
var email = document.getElementById("email").value;

var gmail = email.substr(email.length - 10);
if(gmail == "@gmail.com"){
document.getElementById("gmailverify1").style.display = "none";

}
else{
  document.getElementById("gmailverify1").style.display = "block";
  document.getElementById("register").style.display = "block";
}
}

      
 function passwordsverify(){
var password = document.getElementById("password").value;


if(password.length < 8){
    document.getElementById("passwordverify1").style.display = "block";
  document.getElementById("register").style.display = "block";

}
else{
document.getElementById("passwordverify1").style.display = "none";

   document.getElementById("register").style.transition = "all 2s";
}
}

function verifybutton(){


  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

var gmail = email.substr(email.length - 10);

    if(password.length > 8 && gmail == "@gmail.com" ){
    document.getElementById("register").style.display = "block";

    document.getElementById("passwordverify1").style.display = "none";
      document.getElementById("emailverify1").style.display = "none";
}
else{
    document.getElementById("register").style.display = "block";
}
}


document.getElementById("registerform").onmouseout = function(){
    document.getElementById("register").style.display = "block";
    document.getElementById("register").style.transition = "all 3s";
}

//VERIFY LOGIN

function loginoutline(){
document.getElementById("loginnow").style.border = "2px solid yellow";
document.getElementById("loginnow").style.outline = "2px solid yellow";
document.getElementById("loginnow").style.cursor= "pointer";
}

function x(){
  document.getElementById("loginnow").style.border = "0px solid yellow";
document.getElementById("loginnow").style.outline = "0px solid yellow";
document.getElementById("loginnow").style.cursor= "default";
}

document.getElementById("loginemail").onfocus = function(){
document.getElementById("loginemail").style.outline = "1px solid #ffee00";

       document.getElementById("user").style.color="rgb(255, 182, 6)";
       document.getElementById("loginemail").style.border="none";
}

document.getElementById("loginemail").onfocusout = function(){
   var vivek = document.getElementById("loginemail").value;
  var vivekgmail = vivek.substr(vivek.length - 10);
    if(vivekgmail == "@gmail.com"){
    
        document.getElementById("loginemail").style.border = "none";
                 }
      else{
      

       document.getElementById("user").style.color="red";
       document.getElementById("loginemail").style.border="3px solid red";
      }

}



document.getElementById("loginpassword").onfocus = function(){
document.getElementById("loginpassword").style.outline = "1px solid #ffee00";
  document.getElementById("loginpassword").style.border="none";
  document.getElementById("key").style.color="rgb(255, 182, 6)";
}
document.getElementById("loginpassword").onfocusout = function(){

var passw = document.getElementById("loginpassword").value;
if(passw == ""){
document.getElementById("key").style.color="red";
       document.getElementById("loginpassword").style.border="3px solid red";
}
else{
     document.getElementById("loginpassword").style.border = "none";
}
}
document.getElementById("eye").onmouseover = function(){
  document.getElementById("eye").style.color="#d5dae2";
  var obj = document.getElementById("loginpassword");
  obj.type = "text";
}

document.getElementById("eye").onmouseout = function(){
  document.getElementById("eye").style.color="black";
  var obj = document.getElementById("loginpassword");
  obj.type = "password";
}

   
 
//Registration ko lagi ////////////////////////////////////////////////////////////////////////////////////////////////////////


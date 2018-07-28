var regiemail = document.getElementById("regiemail").value;
var regipassword = document.getElementById("regipassword").value;
var regiconfpassword = document.getElementById("regiconfpassword").value;
var regicontact = document.getElementById("regicontact");
var usernameregi = document.getElementById("usernamereg");
document.getElementById("usernamereg").onfocus = function(){
	document.getElementById("usernamereg").style.outline = "1px solid #ffee00";
}
document.getElementById("usernamereg").onfocusout = function(){
	if(document.getElementById("usernamereg").value == ""){
	document.getElementById("use1").style.display = "block";
	document.getElementById("use").style.color = "red";
}
else{
	document.getElementById("usernamereg").style.outline = "none";
	document.getElementById("use1").style.display = "none";
	document.getElementById("use").style.color = "#ffee00";
}
}

document.getElementById("usernamereg").onfocus = function(){
	document.getElementById("usernamereg").style.outline = "1px solid #ffee00";
}

document.getElementById("regiemail").onfocus = function(){
	document.getElementById("regiemail").style.outline = "1px solid #ffee00";
}
document.getElementById("regiemail").onfocusout = function(){
	if(document.getElementById("regiemail").value == ""){
	document.getElementById("use3").style.display = "block";
	document.getElementById("use2").style.color = "red";
}
else{
	document.getElementById("regiemail").style.outline = "none";
		document.getElementById("use3").style.display = "none";
	document.getElementById("use2").style.color = "#ffee00";

}
}

document.getElementById("regipassword").onfocus = function(){
	document.getElementById("regipassword").style.outline = "1px solid #ffee00";
}
document.getElementById("regipassword").onfocusout = function(){
	if(document.getElementById("regipassword").value == ""){
	document.getElementById("use5").style.display = "block";
	document.getElementById("use4").style.color = "red";
}
else{
	document.getElementById("regipassword").style.outline = "none";
		document.getElementById("use5").style.display = "none";
	document.getElementById("use4").style.color = "#ffee00";
}
}

document.getElementById("regiconfpassword").onfocus = function(){
	document.getElementById("regiconfpassword").style.outline = "1px solid #ffee00";
}
document.getElementById("regiconfpassword").onfocusout = function(){
if(document.getElementById("regiconfpassword").value == "" ){
document.getElementById("use7").style.display = "block";
	document.getElementById("use6").style.color = "red";
}
	else if( document.getElementById("regipassword").value != document.getElementById("regiconfpassword").value   ){
	document.getElementById("use7").style.display = "block";
	document.getElementById("use6").style.color = "red";

}

else{
	document.getElementById("regiconfpassword").style.outline = "none";
	document.getElementById("use7").style.display = "none";
	document.getElementById("use6").style.color = "#ffee00";
}
}





document.getElementById("regicontact").onfocus = function(){
	document.getElementById("regicontact").style.outline = "1px solid #ffee00";
}
document.getElementById("regicontact").onfocusout = function(){
	if(document.getElementById("regicontact").value == ""){
	document.getElementById("use10").style.display = "block";
		document.getElementById("use10").style.marginTop= "-4px";
	document.getElementById("use9").style.color = "red";
}
else if(isNaN(document.getElementById("regicontact").value)){
document.getElementById("use10").style.display = "block";
	document.getElementById("use9").style.color = "red";
}
else{
	document.getElementById("regicontact").style.outline = "none";
	document.getElementById("use10").style.display = "none";
	document.getElementById("use9").style.color = "#ffee00";
}
}
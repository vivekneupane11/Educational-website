var listEl = document.querySelector('.home-grid.products-grid.products-grid--max-4');
var btnLeftEl = document.querySelector('#left-btn');
var btnRightEl = document.querySelector('#right-btn');
count = 0;


btnLeftEl.addEventListener("click", function x(e) {
    count++;
    listEl.style.left = count * 286 + 'px';
    if (count > -2) {
        btnRightEl.style.display = 'block';
    }
    if (count >= 0) {
        btnLeftEl.style.display = 'none';
    }
    listEl.style.transition="0.5s all";
});
btnRightEl.addEventListener("click", function x(e) {
    document.getElementById("leftarrow").style.display="block";
    count--;
    listEl.style.left = count * 286 + 'px';
    if (count < 0) {
        btnLeftEl.style.display = 'block';
    }
    if (count <= -2) {
        btnRightEl.style.display = 'none';
    }
    listEl.style.transition="0.5s all";
});
//////////////////////////////////slide hune part sakkiyo


////////////hover ma readme aauna lai
var slideimg1 = document.getElementById("slideimg1");
slideimg1.onmouseover = function(){
    document.getElementById("img1readmore").style.zIndex="1";
    document.getElementById("img1readmore").style.marginTop="100px";
    document.getElementById("img1readmore").style.transition="0.5s all";
    document.getElementById("img1").style.width="110%";
    document.getElementById("img1").style.height="270px;";
    document.getElementById("img1").style.transition="1s all";
}
slideimg1.onmouseout = function(){
  
    document.getElementById("img1readmore").style.marginTop="0px";
    document.getElementById("img1readmore").style.zIndex="-1";
    document.getElementById("img1readmore").style.transition="2s all";
    document.getElementById("img1").style.width="100%";
    document.getElementById("img1").style.height="245px;";
    document.getElementById("img1").style.transition="1s all";
}



var slideimg0 = document.getElementById("slideimg0");
slideimg0.onmouseover = function(){
    document.getElementById("img0readmore").style.zIndex="1";
    document.getElementById("img0readmore").style.marginTop="100px";
    document.getElementById("img0readmore").style.transition="0.5s all";
    document.getElementById("img0").style.width="110%";
    document.getElementById("img0").style.height="270px;";
    document.getElementById("img0").style.transition="1s all";
}
slideimg0.onmouseout = function(){
  
    document.getElementById("img0readmore").style.marginTop="0px";
    document.getElementById("img0readmore").style.zIndex="-1";
    document.getElementById("img0readmore").style.transition="2s all";
    document.getElementById("img0").style.width="100%";
    document.getElementById("img0").style.height="245px;";
    document.getElementById("img0").style.transition="1s all";
}

var slideimg2 = document.getElementById("slideimg2");
slideimg2.onmouseover = function(){
    document.getElementById("img2readmore").style.zIndex="1";
    document.getElementById("img2readmore").style.marginTop="100px";
    document.getElementById("img2readmore").style.transition="0.5s all";
    document.getElementById("img2").style.width="110%";
    document.getElementById("img2").style.height="270px;";
    document.getElementById("img2").style.transition="1s all";
}
slideimg2.onmouseout = function(){
  
    document.getElementById("img2readmore").style.marginTop="0px";
    document.getElementById("img2readmore").style.zIndex="-1";
    document.getElementById("img2readmore").style.transition="2s all";
    document.getElementById("img2").style.width="100%";
    document.getElementById("img2").style.height="245px;";
    document.getElementById("img2").style.transition="1s all";
}


var slideimg3 = document.getElementById("slideimg3");
slideimg3.onmouseover = function(){
    document.getElementById("img3readmore").style.zIndex="1";
    document.getElementById("img3readmore").style.marginTop="100px";
    document.getElementById("img3readmore").style.transition="0.5s all";
    document.getElementById("img2").style.width="110%";
    document.getElementById("img2").style.height="270px;";
    document.getElementById("img2").style.transition="1s all";
}
slideimg3.onmouseout = function(){
  
    document.getElementById("img3readmore").style.marginTop="0px";
    document.getElementById("img3readmore").style.zIndex="-1";
    document.getElementById("img3readmore").style.transition="1s all";
    document.getElementById("img3").style.width="100%";
    document.getElementById("img3").style.height="245px;";
    document.getElementById("img3").style.transition="1s all";
}




var slideimg4 = document.getElementById("slideimg4");
slideimg4.onmouseover = function(){
    document.getElementById("img4readmore").style.zIndex="1";
    document.getElementById("img4readmore").style.marginTop="100px";
    document.getElementById("img4readmore").style.transition="0.5s all";
    document.getElementById("img4").style.width="110%";
    document.getElementById("img4").style.height="270px;";
    document.getElementById("img4").style.transition="1s all";
}
slideimg4.onmouseout = function(){
  
    document.getElementById("img4readmore").style.marginTop="0px";
    document.getElementById("img4readmore").style.zIndex="-1";
    document.getElementById("img4readmore").style.transition="2s all";
    document.getElementById("img4").style.width="100%";
    document.getElementById("img4").style.height="245px;";
    document.getElementById("img4").style.transition="1s all";
}

var slideimg5 = document.getElementById("slideimg5");
slideimg5.onmouseover = function(){
    document.getElementById("img5readmore").style.zIndex="1";
    document.getElementById("img5readmore").style.marginTop="100px";
    document.getElementById("img5readmore").style.transition="0.5s all";
    document.getElementById("img5").style.width="110%";
    document.getElementById("img5").style.height="270px;";
    document.getElementById("img5").style.transition="1s all";
}
slideimg5.onmouseout = function(){
  
    document.getElementById("img5readmore").style.marginTop="0px";
    document.getElementById("img5readmore").style.zIndex="-1";
    document.getElementById("img5readmore").style.transition="2s all";
    document.getElementById("img5").style.width="100%";
    document.getElementById("img5").style.height="245px;";
    document.getElementById("img5").style.transition="1s all";
}
var slideimg6 = document.getElementById("slideimg6");
slideimg6.onmouseover = function(){
    document.getElementById("img6readmore").style.zIndex="1";
    document.getElementById("img6readmore").style.marginTop="100px";
    document.getElementById("img6readmore").style.transition="0.5s all";
    document.getElementById("img6").style.width="110%";
    document.getElementById("img6").style.height="270px;";
    document.getElementById("img6").style.transition="1s all";
}
slideimg6.onmouseout = function(){
  
    document.getElementById("img6readmore").style.marginTop="0px";
    document.getElementById("img6readmore").style.zIndex="-1";
    document.getElementById("img6readmore").style.transition="2s all";
    document.getElementById("img6").style.width="100%";
    document.getElementById("img6").style.height="245px;";
    document.getElementById("img6").style.transition="1s all";
}

var slideimg7 = document.getElementById("slideimg7");
slideimg7.onmouseover = function(){
    document.getElementById("img7readmore").style.zIndex="1";
    document.getElementById("img7readmore").style.marginTop="100px";
    document.getElementById("img7readmore").style.transition="0.5s all";
    document.getElementById("img7").style.width="110%";
    document.getElementById("img7").style.height="270px;";
    document.getElementById("img7").style.transition="1s all";
}
slideimg7.onmouseout = function(){
  
    document.getElementById("img7readmore").style.marginTop="0px";
    document.getElementById("img7readmore").style.zIndex="-1";
    document.getElementById("img7readmore").style.transition="2s all";
    document.getElementById("img7").style.width="100%";
    document.getElementById("img7").style.height="245px;";
    document.getElementById("img7").style.transition="1s all";
}
//sakkiyo slider ko readme ko chatak


//aaba palo TYO COURSE NAME INTERACTIVE PYTHON KO COLOR CHANGE ON MOUSEOVER
document.getElementById("coursename").onmouseover= function(){
    document.getElementById("coursename").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename").style.cursor="pointer";
}
document.getElementById("coursename").onmouseout= function(){
    document.getElementById("coursename").style.color="#272a2d";
    document.getElementById("coursename").style.cursor="";
}

document.getElementById("coursename1").onmouseover= function(){
    document.getElementById("coursename1").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename1").style.cursor="pointer";
}
document.getElementById("coursename1").onmouseout= function(){
    document.getElementById("coursename1").style.color="#272a2d";
    document.getElementById("coursename1").style.cursor="";
}
document.getElementById("coursename2").onmouseover= function(){
    document.getElementById("coursename2").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename2").style.cursor="pointer";
}
document.getElementById("coursename2").onmouseout= function(){
    document.getElementById("coursename2").style.color="#272a2d";
    document.getElementById("coursename2").style.cursor="";
}
document.getElementById("coursename3").onmouseover= function(){
    document.getElementById("coursename3").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename3").style.cursor="pointer";
}
document.getElementById("coursename3").onmouseout= function(){
    document.getElementById("coursename3").style.color="#272a2d";
    document.getElementById("coursename3").style.cursor="";
}
document.getElementById("coursename4").onmouseover= function(){
    document.getElementById("coursename4").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename4").style.cursor="pointer";
}
document.getElementById("coursename4").onmouseout= function(){
    document.getElementById("coursename4").style.color="#272a2d";
    document.getElementById("coursename4").style.cursor="";
}
document.getElementById("coursename5").onmouseover= function(){
    document.getElementById("coursename5").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename5").style.cursor="pointer";
}
document.getElementById("coursename5").onmouseout= function(){
    document.getElementById("coursename5").style.color="#272a2d";
    document.getElementById("coursename5").style.cursor="";
}
document.getElementById("coursename6").onmouseover= function(){
    document.getElementById("coursename6").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename6").style.cursor="pointer";
}
document.getElementById("coursename6").onmouseout= function(){
    document.getElementById("coursename6").style.color="#272a2d";
    document.getElementById("coursename6").style.cursor="";
}
document.getElementById("coursename7").onmouseover= function(){
    document.getElementById("coursename7").style.color="rgb(255, 182, 6)";
    document.getElementById("coursename7").style.cursor="pointer";
}
document.getElementById("coursename7").onmouseout= function(){
    document.getElementById("coursename7").style.color="#272a2d";
    document.getElementById("coursename7").style.cursor="";
}






//la tyo coursename ko color change chatak ni sakkiyo

//slide garam aafai

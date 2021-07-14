let nav=document.getElementsByTagName("nav");
let hamberger=document.getElementsByClassName("menu-line");
let close=document.getElementsByClassName("menu-close");
function menuopen(){
    nav[0].style.left="0";
    hamberger[0].style.display="none";
    hamberger[1].style.display="none";
    hamberger[2].style.display="none";
    close[0].style.display="block";
    document.getElementById("menu").onclick=menuclose;
}

function menuclose(){
    nav[0].style.left="-100%";
    close[0].style.display="none";
    hamberger[0].style.display="block";
    hamberger[1].style.display="block";
    hamberger[2].style.display="block";
    init();
}

function init() {
    document.getElementById("menu").onclick=menuopen;
}
window.addEventListener("load", init, false);

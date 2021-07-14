let nav=document.getElementsByTagName("nav");
function menuopen(){
    nav[0].style.left="0";
    document.getElementById("menu").onclick=menuclose;
}

function menuclose(){
    nav[0].style.left="-100%";
    init();
}

function init() {
    document.getElementById("menu").onclick=menuopen;
}
window.addEventListener("load", init, false);

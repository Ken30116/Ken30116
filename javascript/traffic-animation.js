window.onscroll = function () {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    let logo = document.getElementById("logo");
    let header = document.getElementsByTagName("header");
    let item = document.getElementsByClassName("item");
    let nav = document.getElementsByTagName("nav");
    let menu = document.getElementById("menu");
    let mq = window.matchMedia("(min-width: 768px)");
    let choose = document.getElementsByClassName("choose-text");
    let TOP = document.getElementsByClassName("top");


    choose[0].onmousedown = function () {
        choose[0].style.transform = "scale(1.2)";
    };
    
    if (mq.matches) {
        
        if (t >= 300) {
            logo.style.width = "0%";
            logo.style.minWidth = "0";
            header[0].style.backgroundColor = "rgba(0,128,128,.9)";
            nav[0].style.margin = "0";
            item[1].style.marginRight = "0.8em";
            TOP[0].style.display="block";
        }
        else {
            logo.style.width = "15%";
            logo.style.minWidth = "80px";
            header[0].style.backgroundColor = "rgba(0,128,128,.4)";
            nav[0].style.margin = "0.7rem 0";
            item[1].style.marginRight = "11em";
            TOP[0].style.display="none";
        }
    }
    else {
        if (t >= 100) {
            logo.style.display = "none";
            header[0].style.backgroundColor = "rgba(0,128,128,.9)";
            menu.style.width = "30px";
            menu.style.height = "30px";
            menu.style.border = "1px solid rgba(255,255,255,.4)";
            header[0].style.justifyContent = "flex-end";
        } else {
            logo.style.display = "block";
            menu.style.width = "1.5rem";
            menu.style.height = "1.5rem";
            menu.style.border = "none";
            header[0].style.justifyContent = "space-between";
            header[0].style.backgroundColor = "rgba(0,128,128,.2)";
        }
    }
}
window.onscroll = function () {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    let winheight = window.innerHeight;
    let logo = document.getElementById("logo");
    let header = document.getElementsByTagName("header");
    let item = document.getElementsByClassName("item");
    let nav = document.getElementsByTagName("nav");
    let menu=document.getElementById("menu");
    let mq = window.matchMedia("(min-width: 768px)");
    let slideshow2 = document.getElementsByClassName("slideshow");
    let historyshow= document.getElementsByClassName("history");
    let msg=document.getElementsByClassName("history-msg");
    let clickshow=document.getElementById("clickshow");
    let history_box=document.getElementsByClassName("history_box");
    let historyxy=history_box[0].getBoundingClientRect();
    let newimg=document.getElementsByClassName("new_img-click");
    let newimgxy= newimg[0].getBoundingClientRect();
    let smallimg=document.getElementsByClassName("small_img");
    let newmsg=document.getElementsByClassName("new-msg");

    if (newimgxy.bottom>0 && newimgxy.bottom<winheight) {
        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].style.display="block";
        }
        newmsg[0].style.display="block";
    }
    else {
        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].style.display="none";
        }
        newmsg[0].style.display="none";
    }

    if (mq.matches) {
        clickshow.src="./img/home/mouse-click.png"
        if (t >= 300) {
            logo.style.width = "0%";
            logo.style.minWidth="0";
            header[0].style.backgroundColor = "rgba(0,128,128,.9)";
            nav[0].style.margin = "0";
            item[1].style.marginRight = "0.8em";
            slideshow2[0].style.clipPath="polygon(50% 0, 50% 80%, 50% 100%, 50% 80%, 50% 0)";
        }
        else {
            logo.style.width = "15%";
            logo.style.minWidth="80px";
            header[0].style.backgroundColor = "rgba(0,128,128,.4)";
            nav[0].style.margin = "0.7rem 0";
            item[1].style.marginRight = "11em";
            slideshow2[0].style.clipPath="polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0)";
        }
        if (historyxy.bottom>0 && historyxy.bottom<winheight) {
            historyshow[0].style.clipPath="polygon(0 0, 100% 10%, 100% 90%, 0% 100%)";
            msg[0].style.display="block";
        }
        else {
            historyshow[0].style.clipPath="polygon(100% 10%, 100% 10%, 100% 90%, 100% 90%)";
            msg[0].style.display="none";
        }
    }
else{
    clickshow.src="./img/home/hand-click.png"
    if (t >= 100) {
        logo.style.display = "none";
        header[0].style.backgroundColor = "rgba(0,128,128,.9)";
        menu.style.width="30px";
        menu.style.height="30px";
        menu.style.border="1px solid rgba(255,255,255,.4)";
        header[0].style.justifyContent="flex-end";
    }else {
        logo.style.display = "block";
        menu.style.width="1.5rem";
        menu.style.height="1.5rem";
        menu.style.border="none";
        header[0].style.justifyContent="space-between";
        header[0].style.backgroundColor = "rgba(0,128,128,.2)";
    }
    if (historyxy.top>0 && historyxy.bottom<winheight) {
        msg[0].style.display="block";
    }
    else {
        msg[0].style.display="none";
    }
}

}


let img = document.querySelectorAll('.slideshow_img img');
let span = document.querySelectorAll('.slideshow-selector span');
let left = document.querySelector('.btn_left');
let right = document.querySelector('.btn_right');
let slideshow = document.querySelector('.slideshow');
let slidetext = document.querySelector('.slideshow-text');
let slidetitle = document.getElementById("slideshow-title")
let slidecon = document.getElementById("slideshow-con")
let slideimg = document.querySelector('.slideshow_img');
let mq2 = window.matchMedia("(min-width: 768px)");
let index = 0;
let timer;
span[0].style.backgroundColor = "#008080";
img[index].style.transform = "scale(1)";
function show1() {
    for (let i = 0; i < span.length; i++) {
        span[i].onmouseover = function () {
            span[i].style.backgroundColor = "#00c234";
            span[i].style.opacity = "1";
        };
        span[i].onmouseout = function () {
            span[i].style.backgroundColor = "#ffffff";
            span[i].style.opacity = "0.5";

            show()
        }
    }
}
show1();

function show() {
    for (let i = 0; i < span.length; i++) {
        if (i == index) {
            span[index].style.backgroundColor = "#008080";
            img[index].style.width = "100%";
            if (mq2.matches) {
                img[index].style.transform = "scale(1)";
            }
        } else {
            span[i].style.backgroundColor = "#ffffff";
            if (mq2.matches) {
                img[i].style.transform = "scale(1.2)";
            }
        }
    }
    for (let i = 1; i < span.length; i++) {
        if (i != index) {
            img[i].style.width = "0%";
        }
    }

    if (index == 0) {
        slidetitle.innerText = "園區主題區";
        slidecon.innerText = "-感受環境•美麗島•音景vol.1";
        slidetext.style.animation = "slidetext1 3s";
        if (mq2.matches) { } else {
            slideimg.style.animation = "slideimg1 5s forwards";
        }
    } else {
        if (index == 1) {
            slidetitle.innerText = "推廣音樂教育";
            slidecon.innerText = "-體驗聲音•寧韻•音景vol.2";
            slidetext.style.animation = "slidetext2 3s";
            if (mq2.matches) { } else {
                slideimg.style.animation = "slideimg2 5s forwards";
            }
        } else {
            if (index == 2) {
                slidetitle.innerText = "美麗島一日遊"
                slidecon.innerText = "-享受假期•生活圈•音景vol.3"
                slidetext.style.animation = "slidetext3 3s";
                if (mq2.matches) { } else {
                    slideimg.style.animation = "slideimg3 5s forwards";
                }
            } else {
                if (index == 3) {
                    slidetitle.innerText = "萬物之聲"
                    slidecon.innerText = "-音樂平台•交流•音景vol.4"
                    slidetext.style.animation = "slidetext2 3s";
                    if (mq2.matches) { } else {
                        slideimg.style.animation = "slideimg2 5s forwards";
                    }
                } else {
                    if (index == 4) {
                        slidetitle.innerText = "構築藝術音樂因子"
                        slidecon.innerText = "-教育領域•多元性質•音景vol.5"
                        slidetext.style.animation = "slidetext3 3s";
                        if (mq2.matches) { } else {
                            slideimg.style.animation = "slideimg3 5s forwards";
                        }
                    }
                }
            }
        }
    }
}
show();




function autoPlay() {
    timer = setInterval(function () {
        if (index == span.length) {
            index = 0;
        }
        show();
        index++;
    }, 5000);
}
autoPlay();



function ctrlPlay() {
    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function () {
            index = i;
            show();
        }
    }

}
ctrlPlay();
function clickPlay() {
    left.onclick = function () {
        if (index == 0) {
            index = span.length - 1;
        } else {
            index--;
        }
        show();

    }
    right.onclick = function () {
        if (index == span.length - 1) {
            index = 0;
        } else {
            index++;
        }
        show();
    }
}
clickPlay();


function eventList() {
    slideshow.addEventListener('mouseover', function () {
        clearInterval(timer);
    }, false);
    slideshow.addEventListener('mouseout', function () {
        clearInterval(timer);
        autoPlay();
    }, false);
}
eventList();


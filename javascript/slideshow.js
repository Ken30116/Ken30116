let img = document.querySelector('.slideshow_img img');
let span = document.querySelectorAll('.slideshow-selector span');
let left = document.querySelector('.btn_left');
let right = document.querySelector('.btn_right');
let slideshow = document.querySelector('.slideshow');
let index = 0;
let timer;
span[0].style.backgroundColor = "#008080";

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
    img.src = `img/home/slideshow/slideshow${index}.jpg`;
    for (let i = 0; i < span.length; i++) {
        if (i == index) {
            span[index].style.backgroundColor = "#008080";
        } else {
            span[i].style.backgroundColor = "#ffffff";
        }
    }
}




function autoPlay() {
    timer = setInterval(function () {
        if (index == span.length) {
            index = 0;
        }
        show();
        index++;
    }, 3000);
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
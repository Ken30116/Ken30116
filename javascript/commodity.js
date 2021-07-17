let comimg = document.querySelector(".commodity_img img");
let comspan = document.querySelectorAll(".commodity-selector span");
comspan[0].style.backgroundColor = "#008080";
comspan[0].style.color = "#ffffff";
function comshow1() {
    for (let i = 0; i < comspan.length; i++) {
        comspan[i].onmouseover = function () {
            comspan[i].style.backgroundColor = "#00c234";
            comspan[i].style.color = "#ffffff";
            comspan[i].style.opacity = "1";
        };
        comspan[i].onmouseout = function () {
            comspan[i].style.backgroundColor = "#ffffff";
            comspan[i].style.color ="#00c234";
            comspan[i].style.opacity = "0.5";
            comshow()
        }
    }
}
comshow1();

function comshow() {
    comimg.src = `img/home/commodity/commodity${index}.jpg`;
    for (let i = 0; i < comspan.length; i++) {
        if (i == index) {
            comspan[index].style.backgroundColor = "#008080";
            comspan[index].style.color = "#ffffff";
        } else {
            comspan[i].style.backgroundColor = "#ffffff";
            comspan[i].style.color = "#008080";
        }
    }
}

function ctrlnum() {
    for (let i = 0; i < comspan.length; i++) {
        comspan[i].onclick = function () {
            index = i;
            comshow();
        }
    }
}
ctrlnum();
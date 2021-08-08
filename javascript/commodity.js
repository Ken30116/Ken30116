let comimg = document.querySelector(".commodity_img img");
let comspan = document.querySelectorAll(".commodity-selector span");
comspan[0].style.backgroundColor = "#008080";
comspan[0].style.color = "#ffffff";
comspan[0].style.opacity = "1";
function comshow1() {
    for (let i = 0; i < comspan.length; i++) {
        comspan[i].onmouseover = function () {
            comspan[i].style.backgroundColor = "#00c234";
            comspan[i].style.color = "#ffffff";
            comspan[i].style.opacity = "1"; //亮綠
        };
        comspan[i].onmouseout = function () {
            comspan[i].style.backgroundColor = "#ffffff";
            comspan[i].style.color = "#008080";
            comspan[i].style.opacity = "0.5";//恢復
        }

    }
}
comshow1();

function comshow() {
    comimg.src = `img/home/commodity/commodity${index1}.jpg`;
    for (let j = 0; j < comspan.length; j++) {
        if (j == index1) {
            comspan[index1].style.backgroundColor = "#008080";
            comspan[index1].style.color = "#ffffff";
            comspan[index1].style.opacity = "1";
            comspan[index1].onmouseout = function () {
                comspan[index1].style.backgroundColor = "#008080";
                comspan[index1].style.color = "#ffffff";
                comspan[index1].style.opacity = "1";
            }
        } else {
            comspan[j].style.backgroundColor = "#ffffff";
            comspan[j].style.color = "#008080";
            comspan[j].style.opacity = "0.5";
            comspan[j].onmouseover = function () {
                comspan[j].style.backgroundColor = "#00c234";
                comspan[j].style.color = "#ffffff";
                comspan[j].style.opacity = "1"; //亮綠
            };
            comspan[j].onmouseout = function () {
                comspan[j].style.backgroundColor = "#ffffff";
                comspan[j].style.color = "#008080";
                comspan[j].style.opacity = "0.5";//恢復
            }
        }
    }
}

    function ctrlnum() {
        for (let i = 0; i < comspan.length; i++) {
            comspan[i].onclick = function () {
                index1 = i;
                comshow();
            }
        }
    }
    ctrlnum();


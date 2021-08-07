window.onload = function () {
    let mb = window.matchMedia("(min-width: 1200px)");
    let mq = window.matchMedia("(min-width: 768px)");
    let mt = window.matchMedia("(min-width: 640px)");
    let btn_wood = document.getElementById("btn_wood");
    let btn_fire = document.getElementById("btn_fire");
    let btn_terra = document.getElementById("btn_terra");
    let btn_water = document.getElementById("btn_water");
    let btn_gold = document.getElementById("btn_gold");
    let image_wood = document.getElementById("image_wood");
    let image_fire = document.getElementById("image_fire");
    let image_terra = document.getElementById("image_terra");
    let image_water = document.getElementById("image_water");
    let map_gold = document.getElementById("map_gold");
    let map_wood = document.getElementById("map_wood");
    let map_fire = document.getElementById("map_fire");
    let map_terra = document.getElementById("map_terra");
    let map_water = document.getElementById("map_water");
    let text_gold = document.getElementById("text_gold");
    let text_wood = document.getElementById("text_wood");
    let text_fire = document.getElementById("text_fire");
    let text_terra = document.getElementById("text_terra");
    let text_water = document.getElementById("text_water");




    if (mb.matches) {

        btn_wood.onmouseover = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "18%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        btn_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "16%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_wood.onmouseover = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "18%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        image_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "16%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_fire.onmouseover = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "50%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        btn_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "48%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_fire.onmouseover = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "50%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        image_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "48%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_terra.onmouseover = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "66%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        btn_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "64%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_terra.onmouseover = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "66%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        image_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "64%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_water.onmouseover = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        btn_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "32%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_water.onmouseover = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        image_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "32%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_gold.onmouseover = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "2%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        btn_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "0%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_gold.onmouseover = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "2%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        image_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "0%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

    } else if (mq.matches) {
        btn_wood.onmouseover = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "34%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        btn_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "20%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_wood.onmouseover = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "34%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        image_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "20%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_fire.onmouseover = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "34%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        btn_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "20%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_fire.onmouseover = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "34%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        image_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "20%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_terra.onmouseover = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "34%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        btn_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "20%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_terra.onmouseover = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "34%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        image_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "20%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_water.onmouseover = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        btn_water.onmouseout= function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_water.onmouseover = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        image_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_gold.onmouseover = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "34%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        btn_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "20%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_gold.onmouseover = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "34%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        image_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "20%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };
    }else if (mt.matches) {
        btn_wood.ontouchstart = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "34%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        btn_wood.ontouchend = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "20%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_wood.ontouchstart = function () {
            map_wood.style.display = "block";
            text_wood.style.display = "block";
            btn_wood.style.top = "34%";
            btn_wood.style.boxShadow = " 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b";
            btn_wood.style.border = "none";
        };

        image_wood.ontouchend = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.top = "20%";
            btn_wood.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_wood.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_fire.ontouchstart = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "34%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        btn_fire.ontouchend = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "20%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_fire.ontouchstart = function () {
            map_fire.style.display = "block";
            text_fire.style.display = "block";
            btn_fire.style.top = "34%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        image_fire.ontouchend = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "20%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_terra.ontouchstart = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "34%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        btn_terra.ontouchend = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "20%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_terra.ontouchstart = function () {
            map_terra.style.display = "block";
            text_terra.style.display = "block";
            btn_terra.style.top = "34%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        image_terra.ontouchend = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "20%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_water.ontouchstart = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        btn_water.ontouchend = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_water.ontouchstart = function () {
            map_water.style.display = "block";
            text_water.style.display = "block";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        image_water.ontouchend = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_gold.ontouchstart = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "34%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        btn_gold.ontouchend = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "20%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_gold.ontouchstart = function () {
            map_gold.style.display = "block";
            text_gold.style.display = "block";
            btn_gold.style.top = "34%";
            btn_gold.style.boxShadow = " 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909";
            btn_gold.style.border = "none";
        };

        image_gold.ontouchend = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.top = "20%";
            btn_gold.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_gold.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };
    }
}

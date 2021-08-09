window.onload = function () {
    let mb = window.matchMedia("(min-width: 1200px)");
    let mq = window.matchMedia("(min-width: 768px)");
    let mt = window.matchMedia("(min-width: 640px)");
    let ms = window.matchMedia("(min-width: 414px)");
    let btn_wood = document.getElementById("btn_wood");
    let btn_fire = document.getElementById("btn_fire");
    let btn_terra = document.getElementById("btn_terra");
    let btn_water = document.getElementById("btn_water");
    let btn_gold = document.getElementById("btn_gold");
    let image_wood = document.getElementById("image_wood");
    let image_fire = document.getElementById("image_fire");
    let image_terra = document.getElementById("image_terra");
    let image_water = document.getElementById("image_water");
    let image_gold = document.getElementById("image_gold");
    let controlmap = document.getElementById("control-map");
    let alltheme = document.getElementsByClassName("all-theme");
    let map_wood = document.getElementById("map_wood");
    let map_fire = document.getElementById("map_fire");
    let map_gold = document.getElementById("map_gold");
    let map_water = document.getElementById("map_water");
    let map_terra = document.getElementById("map_terra");
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
        }

    } else if (mq.matches) {
        image_wood.coords="345,135,360,139,377,137,393,133,402,121,397,109,384,103,367,101,351,103,340,108,330,117,331,126,337,131";
        image_fire.coords="367,120,601,154,616,190,610,208,619,222,615,231,635,283,621,306,626,321,647,330,633,351,226,271";
        image_terra.coords="233,270,364,125,347,120,155,123,133,130,117,152,94,109,78,105,55,116,47,129,73,170,53,172,29,199,29,209,32,217,19,226";
        image_water.coords="415,53,372,117,347,126,156,124,163,106,193,88,201,60,198,45,206,40,230,41,287,41,343,39";
        image_gold.coords="370,117,414,55,441,55,445,25,452,23,455,11,465,11,466,21,479,24,477,57,485,57,484,75,492,74,493,65,511,67,513,53,541,57,540,70,543,79,552,91,562,91,561,104,565,108,569,101,577,101,581,109,603,157,391,125";
        controlmap.src="./img/layout/control-map.png";
        alltheme[0].src="./img/layout/all-theme.png";
        map_wood.src="./img/layout/wood-theme.png";
        map_fire.src="./img/layout/fire-theme.png";
        map_gold.src="./img/layout/gold-theme.png";
        map_water.src="./img/layout/water-theme.png";
        map_terra.src="./img/layout/terra-theme.png";

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
        image_wood.coords="199,78,212,78,222,73,226,64,216,58,207,57,197,57,188,63,187,71,192,75";
        image_fire.coords="127,152,205,65,337,85,347,106,343,118,347,124,348,134,359,160,350,175,353,182,364,184,358,196,348,197";
        image_terra.coords="131,153,208,65,86,66,64,83,53,59,42,59,28,67,28,74,38,94,28,100,17,112,11,126,28,132";
        image_water.coords="233,30,208,66,87,68,93,58,109,49,113,25,127,23,151,24,184,22,213,26";
        image_gold.coords="205,67,232,31,248,32,251,15,257,6,264,5,264,12,272,12,270,31,276,34,283,38,289,30,304,32,311,48,320,50,338,86";
        controlmap.src="./img/layout/control-map_phone370.png";
        alltheme[0].src="./img/layout/all-theme_phone370.png";
        map_wood.src="./img/layout/wood-theme_phone370.png";
        map_fire.src="./img/layout/fire-theme_phone370.png";
        map_gold.src="./img/layout/gold-theme_phone370.png";
        map_water.src="./img/layout/water-theme_phone370.png";
        map_terra.src="./img/layout/terra-theme_phone370.png";

        btn_wood.onmouseover = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
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
            map_wood.style.display = "none";
            text_wood.style.display = "none";
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
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "34%";
            btn_fire.style.boxShadow = " 0 0 .3rem #ea0000, inset 0 0 .3rem #ea0000";
            btn_fire.style.border = "none";
        };

        btn_fire.onmouseout= function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.top = "20%";
            btn_fire.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_fire.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_fire.onmouseover = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
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
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "34%";
            btn_terra.style.boxShadow = " 0 0 0.3rem #d64d00, inset 0 0 .3rem #d64d00";
            btn_terra.style.border = "none";
        };

        btn_terra.onmouseout= function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.top = "20%";
            btn_terra.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_terra.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_terra.onmouseover  = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
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

        btn_water.onmouseover  = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        btn_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        image_water.onmouseover  = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "34%";
            btn_water.style.boxShadow = " 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4";
            btn_water.style.border = "none";
        };

        image_water.onmouseout= function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.top = "20%";
            btn_water.style.boxShadow = " 0px 0.3rem 0.05rem rgba(0, 122, 128, 0.5)";
            btn_water.style.border = "0.1rem solid rgba(0, 128, 128, 0.5)";
        };

        btn_gold.onmouseover  = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
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

        image_gold.onmouseover  = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
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
    }else if(ms.matches){
        image_wood.coords="199,78,212,78,222,73,226,64,216,58,207,57,197,57,188,63,187,71,192,75";
        image_fire.coords="127,152,205,65,337,85,347,106,343,118,347,124,348,134,359,160,350,175,353,182,364,184,358,196,348,197";
        image_terra.coords="131,153,208,65,86,66,64,83,53,59,42,59,28,67,28,74,38,94,28,100,17,112,11,126,28,132";
        image_water.coords="233,30,208,66,87,68,93,58,109,49,113,25,127,23,151,24,184,22,213,26";
        image_gold.coords="205,67,232,31,248,32,251,15,257,6,264,5,264,12,272,12,270,31,276,34,283,38,289,30,304,32,311,48,320,50,338,86";
        controlmap.src="./img/layout/control-map_phone370.png";
        alltheme[0].src="./img/layout/all-theme_phone370.png";
        map_wood.src="./img/layout/wood-theme_phone370.png";
        map_fire.src="./img/layout/fire-theme_phone370.png";
        map_gold.src="./img/layout/gold-theme_phone370.png";
        map_water.src="./img/layout/water-theme_phone370.png";
        map_terra.src="./img/layout/terra-theme_phone370.png";

        btn_wood.onmouseover = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = "0.1rem solid #00c234";
            btn_wood.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_wood.style.background = "transparent";
        };

        image_wood.onmouseover = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = "0.1rem solid #00c234";
            btn_wood.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_wood.style.background = "transparent";
        };

        btn_fire.onmouseover = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = "0.1rem solid #00c234";
            btn_fire.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_fire.style.background = "transparent";
        };

        image_fire.onmouseover = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = "0.1rem solid #00c234";
            btn_fire.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_fire.style.background = "transparent";
        };

        btn_terra.onmouseover = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = "0.1rem solid #00c234";
            btn_terra.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_terra.style.background = "transparent";
        };

        image_terra.onmouseover = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = "0.1rem solid #00c234";
            btn_terra.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_terra.style.background = "transparent";
        };

        btn_water.onmouseover = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = "0.1rem solid #00c234";
            btn_water.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_water.style.background = "transparent";
        };

        image_water.onmouseover = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = "0.1rem solid #00c234";
            btn_water.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_water.style.background = "transparent";
        };

        btn_gold.onmouseover = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = "0.1rem solid #00c234";
            btn_gold.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_gold.style.background = "transparent";
        };

        image_gold.onmouseover = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = "0.1rem solid #00c234";
            btn_gold.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_gold.style.background = "transparent";
        };
        
    }
    else{
        image_wood.coords="144,57,155,57,164,53,163,45,155,40,143,42,134,47,136,52";
        image_fire.coords="96,112,147,48,248,67,253,79,251,87,261,118,255,128,266,136,260,145";
        image_terra.coords="151,47,60,50,48,63,38,45,30,45,19,49,27,68,12,83,8,92,99,111";
        image_water.coords="168,22,153,49,61,52,67,44,79,37,80,26,79,18,86,17,98,20,112,20,116,17,127,17,138,17,151,20";
        image_gold.coords="151,50,167,23,181,23,183,11,187,5,192,5,196,11,196,23,200,28,209,27,213,22,221,24,225,33,237,42,248,68";
        controlmap.src="./img/layout/control-map_phone270.png";
        alltheme[0].src="./img/layout/all-theme_phone270.png";
        map_wood.src="./img/layout/wood-theme_phone270.png";
        map_fire.src="./img/layout/fire-theme_phone270.png";
        map_gold.src="./img/layout/gold-theme_phone270.png";
        map_water.src="./img/layout/water-theme_phone270.png";
        map_terra.src="./img/layout/terra-theme_phone270.png";

        btn_wood.onmouseover = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = "0.1rem solid #00c234";
            btn_wood.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_wood.style.background = "transparent";
        };

        image_wood.onmouseover = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = "0.1rem solid #00c234";
            btn_wood.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_wood.onmouseout = function () {
            map_wood.style.display = "none";
            text_wood.style.display = "none";
            btn_wood.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_wood.style.background = "transparent";
        };

        btn_fire.onmouseover = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = "0.1rem solid #00c234";
            btn_fire.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_fire.style.background = "transparent";
        };

        image_fire.onmouseover = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = "0.1rem solid #00c234";
            btn_fire.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_fire.onmouseout = function () {
            map_fire.style.display = "none";
            text_fire.style.display = "none";
            btn_fire.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_fire.style.background = "transparent";
        };

        btn_terra.onmouseover = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = "0.1rem solid #00c234";
            btn_terra.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_terra.style.background = "transparent";
        };

        image_terra.onmouseover = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = "0.1rem solid #00c234";
            btn_terra.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_terra.onmouseout = function () {
            map_terra.style.display = "none";
            text_terra.style.display = "none";
            btn_terra.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_terra.style.background = "transparent";
        };

        btn_water.onmouseover = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = "0.1rem solid #00c234";
            btn_water.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_water.style.background = "transparent";
        };

        image_water.onmouseover = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = "0.1rem solid #00c234";
            btn_water.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_water.onmouseout = function () {
            map_water.style.display = "none";
            text_water.style.display = "none";
            btn_water.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_water.style.background = "transparent";
        };

        btn_gold.onmouseover = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = "0.1rem solid #00c234";
            btn_gold.style.background = "rgba(255, 255, 255, 0.4)";
        };

        btn_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_gold.style.background = "transparent";
        };

        image_gold.onmouseover = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = "0.1rem solid #00c234";
            btn_gold.style.background = "rgba(255, 255, 255, 0.4)";
        };

        image_gold.onmouseout = function () {
            map_gold.style.display = "none";
            text_gold.style.display = "none";
            btn_gold.style.border = " 0.1rem solid rgba(0, 128, 128, 0.5)";
            btn_gold.style.background = "transparent";
        };
    }
}











window.onload = function () {
    let mq = window.matchMedia("(min-width: 768px)");
    let high = document.getElementById("high");
    let train = document.getElementById("train");
    let car = document.getElementById("car");
    let first_high = document.getElementsByClassName("first-content-high");
    let second_high = document.getElementsByClassName("second-content-high");
    let thirt_high = document.getElementsByClassName("thirt-content-high");
    let first_train = document.getElementsByClassName("first-content-train");
    let second_train = document.getElementsByClassName("second-content-train");
    let thirt_train = document.getElementsByClassName("thirt-content-train");
    let first_car = document.getElementsByClassName("first-content-car");
    let second_car = document.getElementsByClassName("second-content-car");
    let thirt_car = document.getElementsByClassName("thirt-content-car");
    let choose = document.getElementsByClassName("choose-text");
    let choose_bottom = document.getElementsByClassName("choose-bottom-btn");
    let first_top = document.getElementsByClassName("first-top-btn");
    let first_top_t = document.getElementsByClassName("first-top-btn-train");
    let first_top_c = document.getElementsByClassName("first-top-btn-car");
    let first_bakimg = document.getElementsByClassName("first-bakimg-btn");
    let first_bakimg2 = document.getElementsByClassName("first-bakimg-btn-timepage");
    let time_page = document.getElementsByClassName("time-page");
    let time_btn = document.querySelector(".time-page span");
    let go = document.getElementsByClassName("go");
    let go_s = document.querySelector(".go span");
    let carimg_1_s1 = document.getElementsByClassName("carimg-1-s1");
    let first_bottom = document.getElementsByClassName("first-bottom-btn");
    let first_bottom_t = document.getElementsByClassName("first-bottom-btn-train");
    let first_bottom_c = document.getElementsByClassName("first-bottom-btn-car");
    let mascot_1 = document.getElementsByClassName("mascot-1");
    let mascot_1_t = document.getElementsByClassName("mascot-1-train");
    let mascot_2 = document.getElementsByClassName("mascot-2");
    let mascot_3 = document.getElementsByClassName("mascot-3");
    let bus = document.getElementsByClassName("busimg-box");
    let bus2 = document.getElementsByClassName("busimg2-box");
    let mrt = document.getElementsByClassName("mrtimg-box");
    let mrtdoor_left = document.getElementsByClassName("mrtdoor-left");
    let mrtdoor_right = document.getElementsByClassName("mrtdoor-right");
    let mascot2_1 = document.getElementsByClassName("mascot2-1");
    let mascot2_4_t = document.getElementsByClassName("mascot2-4-train");
    let carimg_2_s1 = document.getElementsByClassName("carimg-2-s1");
    let carimg_2_f = document.getElementsByClassName("carimg-2-f");
    let second_top = document.getElementsByClassName("second-top-btn");
    let second_top_t = document.getElementsByClassName("second-top-btn-train");
    let second_top_c = document.getElementsByClassName("second-top-btn-car");
    let second_bottom = document.getElementsByClassName("second-bottom-btn");
    let second_bottom_t = document.getElementsByClassName("second-bottom-btn-train");
    let second_bottom_c = document.getElementsByClassName("second-bottom-btn-car");
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let min1 = document.getElementById("min1");
    let min2 = document.getElementById("min2");
    let min3 = document.getElementById("min3");
    let path1 = document.getElementById("path1");
    let path2 = document.getElementById("path2");
    let path3 = document.getElementById("path3");
    let text1_t = document.getElementById("text1-train");
    let text2_t = document.getElementById("text2-train");
    let text3_t = document.getElementById("text3-train");
    let text4_t = document.getElementById("text4-train");
    let min1_t = document.getElementById("min1-train");
    let min2_t = document.getElementById("min2-train");
    let min3_t = document.getElementById("min3-train");
    let path1_t = document.getElementById("path1-train");
    let path2_t = document.getElementById("path2-train");
    let path3_t = document.getElementById("path3-train");
    let mascot3_1 = document.getElementsByClassName("mascot3-1");
    let mascot3_1_t = document.getElementsByClassName("mascot3-1-train");
    let thirt_logo = document.getElementsByClassName("thirt-logo");
    let thirt_exit = document.getElementsByClassName("thirt-exit");
    let thirt_top = document.getElementsByClassName("thirt-top-btn");
    let thirt_top_t = document.getElementsByClassName("thirt-top-btn-train");
    let thirt_top_c = document.getElementsByClassName("thirt-top-btn-car");
    let carimg_3_f = document.getElementsByClassName("carimg-3-f");
    let carimg_3_s2 = document.getElementsByClassName("carimg-3-s2");
    let carimg_3_b = document.getElementsByClassName("carimg-3-b");
    let thirt_logo_car = document.getElementsByClassName("thirt-logo-car");
    let TOP = document.getElementsByClassName("top");
    let top_btn = document.getElementsByClassName("top-btn");
    let top_span = document.querySelector(".top span");

    if (mq.matches) {
        first_bakimg[0].onclick = function () {
            time_page[0].style.width = "40%";
            time_page[0].style.bottom = "-45%";
            time_page[0].style.left = "60%";
            time_page[0].style.zIndex = "100";
            time_btn.style.fontSize = "1rem";
        }

        first_bakimg2[0].onclick = function () {
            time_page[0].style.width = "40%";
            time_page[0].style.bottom = "-45%";
            time_page[0].style.left = "60%";
            time_page[0].style.zIndex = "100";
            time_btn.style.fontSize = "1rem";
        }
    }
    else {
        first_bakimg[0].onclick = function () {
            time_page[0].style.width = "100%";
            time_page[0].style.bottom = "-150%";
            time_page[0].style.left = "0%";
            time_page[0].style.zIndex = "100";
            time_btn.style.fontSize = "1rem";
        }

        first_bakimg2[0].onclick = function () {
            time_page[0].style.width = "100%";
            time_page[0].style.bottom = "-150%";
            time_page[0].style.left = "0%";
            time_page[0].style.zIndex = "100";
            time_btn.style.fontSize = "1rem";
        }      

    }

    for (var i = 0; i < 3; i++) {
        choose[i].onclick = function () {
            for (var j = 0; j < 3; j++) {
                choose[j].style.transform = "scale(1)";
                choose[j].style.backgroundColor = "rgba(255, 255, 255, .6)";
            }
            this.style.transform = "scale(1.2)";
            this.style.backgroundColor = "rgba(255, 255, 255, 1)";
            choose_bottom[0].style.display = "block";
        }
    }

    high.onclick = function () {
        first_high[0].style.display = "block";
        second_high[0].style.display = "block";
        thirt_high[0].style.display = "block";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    train.onclick = function () {
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "block";
        second_train[0].style.display = "block";
        thirt_train[0].style.display = "block";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    car.onclick = function () {
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "block";
        second_car[0].style.display = "block";
        thirt_car[0].style.display = "block";
    }

    choose_bottom[0].onclick = function () {
        for (j = 0; j < 3; j++) {
            choose[j].style.transform = "scale(1)";
            choose[j].style.backgroundColor = "rgba(255, 255, 255, .6)";
            choose_bottom[0].style.display = "none";
        };
        mascot_1_t[0].style.animation = "mascot_right1 1.5s forwards";
        first_bottom_t[0].style.display = "block";
        carimg_1_s1[0].style.animation = "car-right1 3s 1s forwards,car_shock  0.2s infinite";
        first_bottom_c[0].style.display = "block";
    }

    first_top[0].onclick = function () {
        first_bakimg[0].style.animation = "btn_infinite2 1.5s infinite";
        $('head').append("<style>.first-bakimg-btn::before{ animation:btn_before_infinite 1.5s infinite}</style>");
        go[0].style.animation = "none";
        go_s.style.display = "inline";
        first_bottom[0].style.display = "none";
        mascot_1[0].style.display = "block";
        mascot_2[0].style.display = "none";
        mascot_3[0].style.display = "none";
        bus[0].style.animation = " none";
        mascot_1_t[0].style.animation = "none";
        first_bottom_t[0].style.display = "none";
        carimg_1_s1[0].style.animation = "none";
        first_bottom_c[0].style.display = "none";
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    first_top_t[0].onclick = function () {
        first_bakimg[0].style.animation = "btn_infinite2 1.5s infinite";
        $('head').append("<style>.first-bakimg-btn::before{ animation:btn_before_infinite 1.5s infinite}</style>");
        go[0].style.animation = "none";
        go_s.style.display = "inline";
        first_bottom[0].style.display = "none";
        mascot_1[0].style.display = "block";
        mascot_2[0].style.display = "none";
        mascot_3[0].style.display = "none";
        bus[0].style.animation = " none";
        mascot_1_t[0].style.animation = "none";
        first_bottom_t[0].style.display = "none";
        carimg_1_s1[0].style.animation = "none";
        first_bottom_c[0].style.display = "none";
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    first_top_c[0].onclick = function () {
        first_bakimg[0].style.animation = "btn_infinite2 1.5s infinite";
        $('head').append("<style>.first-bakimg-btn::before{ animation:btn_before_infinite 1.5s infinite}</style>");
        go[0].style.animation = "none";
        go_s.style.display = "inline";
        first_bottom[0].style.display = "none";
        mascot_1[0].style.display = "block";
        mascot_2[0].style.display = "none";
        mascot_3[0].style.display = "none";
        bus[0].style.animation = " none";
        mascot_1_t[0].style.animation = "none";
        first_bottom_t[0].style.display = "none";
        carimg_1_s1[0].style.animation = "none";
        first_bottom_c[0].style.display = "none";
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    time_btn.onclick = function () {
        time_page[0].style.width = "6%";
        time_page[0].style.bottom = "26.5%";
        time_page[0].style.left = "75%";
        time_page[0].style.zIndex = "0";
        time_btn.style.fontSize = "0";
        first_bakimg[0].style.animation = "none";
        $('head').append("<style>.first-bakimg-btn::before{ animation:none}</style>");
        go[0].style.animation = "go 1s infinite";
        go_s.onmouseout = function () {
            go[0].style.animation = "go 1s infinite";
        }
    }

    go_s.onmouseover = function () {
        go[0].style.animation = "go 1s infinite";
    }

    go_s.onmouseout = function () {
        go[0].style.animation = "none";
    }

    go_s.onclick = function () {
        first_bakimg[0].style.animation = "none";
        $('head').append("<style>.first-bakimg-btn::before{ animation:none}</style>");
        mascot_1[0].style.display = "none";
        mascot_2[0].style.display = "block";
        mascot_3[0].style.display = "block";
        bus[0].style.animation = " bus_shock 0.2s 3s infinite, bus_right1 3s 4s forwards";
        go_s.style.display = "none";
        first_bottom[0].style.display = "block";
        go_s.onmouseout = function () {
            go[0].style.animation = "none";
        }
    }

    first_bottom[0].onclick = function () {
        bus2[0].style.display = "block";
        mascot2_1[0].style.animation = "mascot_none3 1s 2.5s forwards";
        second_bottom[0].style.display = "block";
        go_s.onmouseout = function () {
            go[0].style.animation = "none";
        }
    }

    first_bottom_t[0].onclick = function () {
        mrt[0].style.animation = "mrt 3s 4s forwards";
        mrtdoor_left[0].style.animation = "door 4s forwards";
        mrtdoor_right[0].style.animation = "door 4s forwards";
        mascot2_4_t[0].style.animation = "mascot_left2 3s 1s forwards";
        second_bottom_t[0].style.display = "block";
        mascot_1_t[0].style.animation = "none";
        first_bottom_t[0].style.display = "none";
    }

    first_bottom_c[0].onclick = function () {
        carimg_2_s1[0].style.animation = "car-right2 3s 1s forwards, car_shock 0.2s infinite";
        carimg_2_f[0].style.animation = "car-bottom1 1s 4s forwards, car_shock 0.2s infinite";
        second_bottom_c[0].style.display = "block";
        carimg_1_s1[0].style.animation = "none";
        first_bottom_c[0].style.display = "none";
    }

    second_top[0].onclick = function () {
        first_bakimg[0].style.animation = "btn_infinite2 1.5s infinite";
        $('head').append("<style>.first-bakimg-btn::before{ animation:btn_before_infinite 1.5s infinite}</style>");
        go[0].style.animation = "none";
        go_s.style.display = "inline";
        first_bottom[0].style.display = "none";
        mascot_1[0].style.display = "block";
        mascot_2[0].style.display = "none";
        mascot_3[0].style.display = "none";
        bus[0].style.animation = " none";
        bus2[0].style.display = "none";
        mascot2_1[0].style.animation = "none";
        second_bottom[0].style.display = "none";
    }

    second_top_t[0].onclick = function () {
        mrt[0].style.animation = "none";
        mrtdoor_left[0].style.animation = "none";
        mrtdoor_right[0].style.animation = "none";
        mascot2_4_t[0].style.animation = "none";
        second_bottom_t[0].style.display = "none";
        mascot_1_t[0].style.animation = "mascot_right1 1.5s forwards";
        first_bottom_t[0].style.display = "block";
    }

    second_top_c[0].onclick = function () {
        carimg_2_s1[0].style.animation = "none";
        carimg_2_f[0].style.animation = "none";
        second_bottom_c[0].style.display = "none";
        carimg_1_s1[0].style.animation = "car-right1 3s 1s forwards,car_shock  0.2s infinite";
        first_bottom_c[0].style.display = "block";
    }

    second_bottom[0].onclick = function () {
        text1.style.animation = "text 3s 1s";
        text2.style.animation = "text 6s 1s";
        text3.style.animation = "text 6s 4s";
        text4.style.animation = "text 3s 7s";
        min1.style.animation = "min 3s 1s";
        min2.style.animation = "min 3s 4s";
        min3.style.animation = "min 3s 7s";
        path1.style.animation = "path1 3s 1s steps(5, start)";
        path2.style.animation = "path2 3s 4s steps(5, start)";
        path3.style.animation = "path3 3s 7s steps(5, start)";
        mascot3_1[0].style.animation = "mascot_path 9s 1s linear forwards";
        thirt_logo[0].style.animation = "thirt_logo 1s 9s forwards cubic-bezier(.86,-0.05,1,1.53)";
        top_btn[0].style.animation = "top 1s 10.5s infinite";
        top_span.style.animation = "top_span 1s 10.5s infinite";
        $('head').append("<style>.top-btn::before{ animation:top_before 1s 10.5s infinite }</style>");
    }

    second_bottom_t[0].onclick = function () {
        text1_t.style.animation = "text 3s 1s";
        text2_t.style.animation = "text 6s 1s";
        text3_t.style.animation = "text 6s 4s";
        text4_t.style.animation = "text 3s 7s";
        min1_t.style.animation = "min 3s 1s";
        min2_t.style.animation = "min 3s 4s";
        min3_t.style.animation = "min 3s 7s";
        path1_t.style.animation = "path1-train 3s 1s steps(5, start)";
        path2_t.style.animation = "path2-train 3s 4s steps(5, start)";
        path3_t.style.animation = "path3-train 3s 7s steps(5, start)";
        mascot3_1_t[0].style.animation = "mascot_path2  9s 1s linear forwards";
        thirt_exit[0].style.animation = "thirt_exit 1s 9s infinite";
        second_bottom_t[0].style.display = "none";
        mrt[0].style.animation = "none";
        mrtdoor_left[0].style.animation = "none";
        mrtdoor_right[0].style.animation = "none";
        mascot2_4_t[0].style.animation = "none";
        top_btn[0].style.animation = "top 1s 10.5s infinite";
        top_span.style.animation = "top_span 1s 10.5s infinite";
        $('head').append("<style>.top-btn::before{ animation:top_before 1s 10.5s infinite }</style>");
    }

    second_bottom_c[0].onclick = function () {
        carimg_3_f[0].style.animation = "car-bottom2 1s 1s forwards,car_shock 0.2s infinite";
        carimg_3_s2[0].style.animation = "car-left1 2s 2s forwards, car_shock 0.2s infinite";
        carimg_3_b[0].style.animation = "car-top1 1s 4s forwards,car_shock 0.2s infinite";
        thirt_logo_car[0].style.animation = "thirt_logo  1s 4.5s forwards";
        carimg_2_s1[0].style.animation = "none";
        carimg_2_f[0].style.animation = "none";
        second_bottom_c[0].style.display = "none";
        top_btn[0].style.animation = "top 1s 5s infinite";
        top_span.style.animation = "top_span 1s 5s infinite";
        $('head').append("<style>.top-btn::before{ animation:top_before 1s 5s infinite }</style>");
    }

    thirt_top[0].onclick = function () {
        text1.style.animation = "none";
        text2.style.animation = "none";
        text3.style.animation = "none";
        text4.style.animation = "none";
        min1.style.animation = "none";
        min2.style.animation = "none";
        min3.style.animation = "none";
        path1.style.animation = "none";
        path2.style.animation = "none";
        path3.style.animation = "none";
        mascot3_1[0].style.animation = "none";
        thirt_logo[0].style.animation = "none";
        top_btn[0].style.animation = "none";
        top_span.style.animation = "none";
        $('head').append("<style>.top-btn::before{ animation:none }</style>");
    }

    thirt_top_t[0].onclick = function () {
        text1_t.style.animation = "none";
        text2_t.style.animation = "none";
        text3_t.style.animation = "none";
        text4_t.style.animation = "none";
        min1_t.style.animation = "none";
        min2_t.style.animation = "none";
        min3_t.style.animation = "none";
        path1_t.style.animation = "none";
        path2_t.style.animation = "none";
        path3_t.style.animation = "none";
        mascot3_1_t[0].style.animation = "none";
        thirt_exit[0].style.animation = "none";
        second_bottom_t[0].style.display = "block";
        mrt[0].style.animation = "mrt 3s 4s forwards";
        mrtdoor_left[0].style.animation = "door 4s forwards";
        mrtdoor_right[0].style.animation = "door 4s forwards";
        mascot2_4_t[0].style.animation = "mascot_left2 3s 1s forwards";
        top_btn[0].style.animation = "none";
        top_span.style.animation = "none";
        $('head').append("<style>.top-btn::before{ animation:none }</style>");
    }

    thirt_top_c[0].onclick = function () {
        carimg_3_f[0].style.animation = "none";
        carimg_3_s2[0].style.animation = "none";
        carimg_3_b[0].style.animation = "none";
        thirt_logo_car[0].style.animation = "none";
        carimg_2_s1[0].style.animation = "car-right2 3s 1s forwards, car_shock 0.2s infinite";
        carimg_2_f[0].style.animation = "car-bottom1 1s 4s forwards, car_shock 0.2s infinite";
        second_bottom_c[0].style.display = "block";
        top_btn[0].style.animation = "none";
        top_span.style.animation = "none";
        $('head').append("<style>.top-btn::before{ animation:none }</style>");
    }

    TOP[0].onclick = function () {
        top_btn[0].style.animation = "none";
        top_span.style.animation = "none";
        $('head').append("<style>.top-btn::before{ animation:none }</style>");
        first_high[0].style.display = "none";
        second_high[0].style.display = "none";
        thirt_high[0].style.display = "none";
        first_train[0].style.display = "none";
        second_train[0].style.display = "none";
        thirt_train[0].style.display = "none";
        first_car[0].style.display = "none";
        second_car[0].style.display = "none";
        thirt_car[0].style.display = "none";
    }

    if (mq.matches) {

    }
    else {

    }
}
window.onload = function () {
    var box1 = document.querySelector(".box1")
    var op = document.querySelector(".op");
    var hisimg = document.querySelectorAll(".history_box img")
    var mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) {
        op.onmousedown = function (event) {
            op.style.background = "conic-gradient(#00c234 45deg, transparent 45deg, transparent 115deg, #00c234 115deg)";
            event = event || window.event;
            var ol = event.clientX - op.offsetLeft;
            document.onmousemove = function (event) {
                event = event || window.event;
                var left = event.clientX - ol;
                if (left >= 0 && left <= (box1.offsetWidth - op.offsetWidth)) {
                    op.style.left = left + "px";
                    var imgright = left * 2;
                    for (let i = 0; i < hisimg.length; i++) {
                        hisimg[i].style.right = imgright + "%";
                    }
                    var rotate = left * 2.8;
                    op.style.transform = "rotate(" + rotate + "deg)";
                }
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                op.style.background = "conic-gradient(#309139 45deg, transparent 45deg, transparent 115deg, #309139 115deg)";
            }
            return false;
        }
    }else{
        op.ontouchstart = function (event) {
            op.style.background = "conic-gradient(#00c234 45deg, transparent 45deg, transparent 115deg, #00c234 115deg)";
            event = event || window.event;
            var ol = event.changedTouches[0].clientX - op.offsetLeft;
            document.ontouchmove = function (event) {
                event = event || window.event;
                var left = event.changedTouches[0].clientX - ol;
                if (left >= 0 && left <= (box1.offsetWidth - op.offsetWidth)) {
                    op.style.left = left + "px";
                    var imgright = left * 4;
                    for (let i = 0; i < hisimg.length; i++) {
                        hisimg[i].style.right = imgright + "%";
                    }
                    var rotate = left * 2;
                    op.style.transform = "rotate(" + rotate + "deg)";
                }
            }
            document.ontouchend = function () {
                document.ontouchmove = null;
                document.ontouchend= null;
                op.style.background = "conic-gradient(#309139 45deg, transparent 45deg, transparent 115deg, #309139 115deg)";
            }
            return false;
        }
    }
}

setInterval(function ShowHistory() {
    var op = document.querySelector(".op");
    var left = op.offsetLeft
    var mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) {
    if (left <= 35) {
        document.getElementById("year").innerText = "1920年";
        document.getElementById("history-text").innerText = "此時為日治時代，四周無任何建築。當時此車道為連結市區與港口唯一道路，白天經常有大型貨運車經過，因此當時叫「港市」。在寧靜夜晚只剩蟋蟀開Party。";
    } else if (left <= 85) {
        document.getElementById("year").innerText = "1950年";
        document.getElementById("history-text").innerText = "光復後，農業盛行，此時大批農民來開墾，圓環正中心點種植小榕樹，夏季時會聽到蟲鳴鳥叫聲。";
    } else if (left <= 135) {
        document.getElementById("year").innerText = "1980年";
        document.getElementById("history-text").innerText = "經濟起飛，政府陸續在建立城鎮，人口不斷引入，農地縮減商業林立，形成完美生活圈，可稱居住聖地，因此改名「美麗島」，夜晚時不像過去如此寧靜，似乎都纏雜人聲。";
    } else if (left <= 185) {
        document.getElementById("year").innerText = "2000年";
        document.getElementById("history-text").innerText = "都市擴張中，建築高聳，機汽車眾多，導致噪音問題，也是未來都市發展重要課題，該如何解決?";
    } else {
        document.getElementById("year").innerText = "2020年";
        document.getElementById("history-text").innerText = "思考...都市都是噪音嗎?並不全然。本團隊在忙碌的城市中，尋找我們遺忘的聲音足跡。停下腳步收錄掩蓋在吵雜噪音中細微的音波，似乎可以感受到都市該有的氣氛，讓城市風貌展現出來~";
    }
}else{
    if (left <= 17.5) {
        document.getElementById("year").innerText = "1920年";
        document.getElementById("history-text").innerText = "此時為日治時代，四周無任何建築。當時此車道為連結市區與港口唯一道路，白天經常有大型貨運車經過，因此當時叫「港市」。在寧靜夜晚只剩蟋蟀開Party。";
    } else if (left <= 42.5) {
        document.getElementById("year").innerText = "1950年";
        document.getElementById("history-text").innerText = "光復後，農業盛行，此時大批農民來開墾，圓環正中心點種植小榕樹，夏季時會聽到蟲鳴鳥叫聲。";
    } else if (left <= 67.5) {
        document.getElementById("year").innerText = "1980年";
        document.getElementById("history-text").innerText = "經濟起飛，政府陸續在建立城鎮，人口不斷引入，農地縮減商業林立，形成完美生活圈，可稱居住聖地，因此改名「美麗島」，夜晚時不像過去如此寧靜，似乎都纏雜人聲。";
    } else if (left <= 92.5) {
        document.getElementById("year").innerText = "2000年";
        document.getElementById("history-text").innerText = "都市擴張中，建築高聳，機汽車眾多，導致噪音問題，也是未來都市發展重要課題，該如何解決?";
    } else {
        document.getElementById("year").innerText = "2020年";
        document.getElementById("history-text").innerText = "思考...都市都是噪音嗎?並不全然。本團隊在忙碌的城市中，尋找我們遺忘的聲音足跡。停下腳步收錄掩蓋在吵雜噪音中細微的音波，似乎可以感受到都市該有的氣氛，讓城市風貌展現出來~";
    }
}
}, 500);




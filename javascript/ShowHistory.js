setInterval(function ShowHistory() {
    var Left = document.querySelector(".history_box").scrollLeft;
    if (Left <= 650) {
        document.getElementById("year").innerText = "1920年";
        document.getElementById("history-text").innerText = "此時為日治時代，當時四周較為荒涼，僅有極少數大型貨運車經過，在寧靜夜晚只剩蟋蟀開Party。";
    } else if (Left <= 1620) {
        document.getElementById("year").innerText = "1950年";
        document.getElementById("history-text").innerText = "光復後，農業盛行，此時大批農民來開墾，圓環正中心點種植小榕樹，夏季時會聽到蟲鳴鳥叫聲。";
    } else if (Left <= 2580) {
        document.getElementById("year").innerText = "1980年";
        document.getElementById("history-text").innerText = "經濟起飛，政府陸續建立城鎮，人口不斷引入，農地縮減，不像過去夜晚如此寧靜，似乎都纏雜人聲。";
    } else if (Left <= 3540) {
        document.getElementById("year").innerText = "2000年";
        document.getElementById("history-text").innerText = "都市擴張中，建築高聳，機汽車眾多，導致噪音問題，也是未來都市發展重要課題，該如何解決?";
    } else {
        document.getElementById("year").innerText = "2020年";
        document.getElementById("history-text").innerText = "思考...都市都是噪音嗎?並不全然。在忙碌的城市中，而我們卻遺忘四周美妙得聲音。停下腳步，聆聽掩蓋在吵雜噪音中細微的音波，似乎可以感受到都市該有的氣氛~";
    }
}, 500);

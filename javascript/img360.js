$(function () {
    $('.imgbox').mouseover(
        function pop() {
        let p=Math.ceil(Math.random()*4)*90 //亂數0~4,ceil=>1,2,3,4=>90,180,270,360
        $(this).css({
            transform: `rotate(${p}deg)`
        });
    });
});
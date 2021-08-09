$(function () {
    $('.great img').click(function () {
        if ($(this).attr("alt") == "great-black") {
            $(this).attr("src", "./img/platform_no1/great-blue.png").attr("alt", "great-blue");
        }else{
            $(this).attr("src", "./img/platform_no1/great-black.png").attr("alt", "great-black");
        }
    });
    $('#send').click(function () {
        let name = $('#name').val();
        let user_text = $('#user-text').val();
        $('#result').append(`<div class="spokesname">${name}</div><div class="spokestext">${user_text}</div><div class="reply">回覆</div>
        <div class="replyuser">
        <label class="replyman">發言人
        <input type="text" class="replyname" value="匿名" required> (可更改名稱)</label>
    <textarea class="reply-text" placeholder="新增公開留言..."></textarea>
    <div class="btn">
        <input class="reply-cancel" type="button" value="取消">
        <input class="reply-send" type="button" value="送出">
    </div>
    </div>
    <div class="reply-result"></div>`);


        $('.reply').click(function () {
            $(this).next('.replyuser').css({
                display: "block"
            });
            $('.reply-cancel').click(function () {
                $(this).parent('.btn').parent('.replyuser').css({
                    display: "none"
                });

            });
        });

        // $('.reply-send').click(function () {
        //     let name2 = $(this).parent('.btn').parent('.replyuser').children('.replyman').children('.replyname').val();
        //     let user_text2 = $(this).parent('.btn').parent('.replyuser').children('.reply-text').val();
        //     $(this).parent('.btn').parent('.replyuser').next('.reply-result:first').append(`<div class="spokesname">${name2}</div><div class="spokestext">${user_text2}</div><div class="reply">回覆</div>
        //     <div class="replyuser">
        //     <label class="replyman">發言人
        //     <input type="text" class="replyname" value="匿名" required> (可更改名稱)</label>
        // <textarea class="reply-text" placeholder="新增公開留言..."></textarea>
        // <div class="btn">
        //     <input class="reply-cancel" type="button" value="取消">
        //     <input class="reply-send" type="button" value="送出">
        // </div>
        // <div class="reply-result"></div></div>`

        //     );
        // });


    });

});









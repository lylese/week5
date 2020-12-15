$(document).ready(function () {
    //輸入訊息縮放區塊動作
    $('#replyEditor').click(function (e) { 
        e.preventDefault();
        $('.msg-board-js').addClass('active');    
    });
    $(".msg-cancel-js").click(function (e) { 
        e.preventDefault();
        $('.msg-board-js').removeClass('active');
        
    });
    //watchModal帶入值
    $(".watch-js").on("click", function (e) {
        e.preventDefault();
        var admindata=$(this).parent().parent().siblings();
        $("#watchModal .id-js").text(admindata[0].innerText);
        $("#watchModal .name-js").text(admindata[1].innerText);
        $("#watchModal .email-js").text(admindata[2].innerText);
             
    });
    //editModal帶入值
    $(".edit-js").on("click", function (e) {
        e.preventDefault();
        var admindata=$(this).parent().parent().siblings();
        $("#editModal #inputName").attr('placeholder',admindata[1].innerText);
        $("#editModal #inputEmail").attr('placeholder',admindata[2].innerText);
              
    });
});
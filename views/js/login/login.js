$(function(){
    $('#login').click(function(){
        var id = $('#user_id').val();
        var pwd = $('#user_pwd').val();
        var noinput = false;
        $('#status').val("");
        
        if(!id && id.length == 0){
            noinput = true;
        }else{
            if(!pwd && pwd.length==0){
                noinput = true;
            }
        }
        
        if(noinput){
            $('#status').text("로그인 입력을 확인하세요.");
            return;
        }else{
            $('#status').text("로그인 시작");
        }
        
        document.login_form.submit();
        console.log("form submit");
        var form = $('#login_form');
        
        console.log(form);
    });
});
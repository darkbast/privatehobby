$(function(){
  $('#login').click(function(){
    var id = $('#user_id').val();
    var pwd = $('#user_pwd').val();
    $('#status').val("");

    if(!id || !pwd){
      $('#status').text("로그인 입력을 확인하세요.");
      return;
    }

    document.login_form.submit();

  });
});
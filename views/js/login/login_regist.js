$(function(){
  $('#regist').click(function(){
    var id = $('#user_id').val();
    var pwd = $('#user_pwd').val();
    var pwd2 = $('#user_pwd2').val();
    var name = $('user_name').val();
    var email = $('user_email').val();
    
    var status = $('#status');
    status.val("")
    
    $(!id){
      status.val("아이디를 입력하세요.");
      return;
    }
    $(!pwd){
      status.val("패스워드를 입력하세요.");
      return;
    }
    $(!pwd2){
      status.val("패스워드 확인을 입력하세요.");
      return;
    }
    $(pwd != pwd2){
      status.val("패스워드와 확인의 입력이 일치하지 않습니다.");
      return;      
    }
    
    $(!name){
      status.val("닉네임을 입력하세요.");
      return;
    }
    
    document.login_form.submit();

  });
});
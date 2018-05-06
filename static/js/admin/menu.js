$(function(){
  console.log('a');
  $('#main_add').click(function(){

    $('#status').html("");
    var data = {
      menu_name : $('#menu_name').val(),
      menu_dname: $('#menu_dname').val(),
      menu_auth : $('#menu_auth').val(),
      menu_url  : $('#meu_url').val(),
      mode      : 'M'
    };
    
    $.ajax({
      method: "POST",
      dataType: "json",
      data:data,
      url : "/admin/add/input",
      success : function(result){
        console.log("success : " + result);
        $('#status').html("<span>" + result.status + "</span>");
      },
      error : function(xmlh,status, err){
        console.log("error : " + err);
      }
    });
  });

  $('#sub_add').click(function(){
    console.log('main clck');
    var data = {
      smenu_name : $('#smenu_name').val(),
      smenu_dname: $('#smenu_dname').val(),
      smenu_auth : $('#smenu_auth').val(),
      smenu_url  : $('#smenu_url').val(),
      mode       : 'S'
    };

    $.ajax({
      method: "POST",
      dataType: "json",
      data:data,
      url : "/admin/add/input",
      success : function(result){
        
      },
      error : function(xmlh,status, err){
        
      }
    });
  });
});
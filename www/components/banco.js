$(document).on("click", "#listar", function{
  $(location).attr('href', "listar.html");
});

$(document).on("click", "#cadastrar", function(){
  var parametros = {
    "titulo": $("#titulo").val(),
    "autor": $("#autor").val(),
    "ano": $("#ano").val(),
    "isbn": $("#isbn").val()
  }

  $.ajax({
    type:"post",
    url:"https://cadastro-biblioteca-alafe.c9users.io/cadastrar.php",
    data: parametros,
    success: function(data){
      $("#titulo").val("");
      $("#autor").val("");
      $("#ano").val("");
      $("#isbn").val("");
      alert(data);
    },
    error: function(data){
      alert("Erro: " + data);
    }
  })
});
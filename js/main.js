$("#agregar").click(contactoNuevo);

function contactoNuevo(){
  var $nombre = $("#nombre").val();
  $("#agenda").text($nombre);

  var $apellido = $("#apellido").val();
  $("#agenda").text($apellido);

  var $telefono = $("#telefono").val();
  $("#agenda").text($telefono);

  // var $contenedor = $("#agenda");
  // var $nombre = $("#nombre");
  // var $nombreIngresado = $nombre.val();
  // var $nuevoNombre = $("<p>");
  // $(nuevoNombre).text(nombreIngresado);
  // contenedor.append(nuevoNombre)
};

$(document).ready(contactoNuevo);

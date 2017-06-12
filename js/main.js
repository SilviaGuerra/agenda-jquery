$("#agregar").click(contactoNuevo);

function contactoNuevo(){
  var nombre = $("#nombre").val();
  var apellido = $("#apellido").val();
  var telefono = $("#telefono").val();
  var nuevoNombre = $("<p>");
  var nuevoApellido = $("<p>");
  var nuevoTelefono = $("<p>");
  nuevoNombre.text(nombre);
  nuevoApellido.text(apellido);
  nuevoTelefono.text(telefono);
  $("#agenda").append(nuevoNombre);
  $("#agenda").append(nuevoApellido);
  $("#agenda").append(nuevoTelefono);

  // var lista = $("<li>", {"class"="collection-item"});
  // colleccion.text(lista);

  // var $contenedor = $("#agenda");
  // var $nombre = $("#nombre");
  // var $nombreIngresado = $nombre.val();
  // var $nuevoNombre = $("<p>");
  // $(nuevoNombre).text(nombreIngresado);
  // contenedor.append(nuevoNombre)
};

$(document).ready(contactoNuevo);

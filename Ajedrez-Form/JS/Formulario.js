
function validar() {
  Us = document.getElementById("nombreUs");
  nombre = document.getElementById("nombre");
  apes = document.getElementById("apellidos");
  Tlf = document.getElementById("tlf");
  email = document.getElementById("mail");
  pasw = document.getElementById("ct");
  pasw2 = document.getElementById("ct2");
  var valido = new Boolean(true);

  if (pasw.value != pasw2.value) {
    alert('[ERROR] No coincide la password')
    pasw2.style.border = "red 2px solid"
    valido = false
  } else {

    pasw2.style.border = "green 2px solid"
    pasw.style.border = "green 2px solid"
  }
  if (Us.value == null || Us.value.length == 0) {

    alert('[ERROR]Usuario esta vacío o es incorrecto.');
    Us.style.border = "red 2px solid"
    valido = false;
  } else {
    Us.style.border = "green 2px solid"
  }
  if (nombre.value == null || nombre.value.length == 0) {

    nombre.style.border = "red 2px solid"

    valido = false;
  } else {

    nombre.style.border = "green 2px solid"
  }
  if (apes.value == null || apes.value.length == 0) {

    apes.style.border = "red 2px solid"
    valido = false

  } else {
    apes.style.border = "green 2px solid"
  }
  if (Tlf.value == null || Tlf.value.length < 6 || Tlf.value.length > 9) {

    alert('[ERROR] Telefono esta vacío o es incorrecto.');
    Tlf.style.border = "red 2px solid"
    valido = false

  } else {
    Tlf.style.border = "green 2px solid"
  }

  if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)) {

    email.style.border = "red 2px solid"
    valido = false
  } else {
    email.style.border = "green 2px solid"
  }
  if (valido != false) {
    window.location.href = "PaginaEnviar.html";
  }

}



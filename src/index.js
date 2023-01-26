function enviar() {
  var contadorResultado = 0;
  var respuestaP1 = document.getElementById("No1");
  if (respuestaP1.checked) {
    contadorResultado++;
  }
  var respuestaP2 = document.getElementById("aa/mm/dd1");
  if (respuestaP2.checked) {
    contadorResultado++;
  }
  var respuestaP3 = document.getElementById("20001");
  if (respuestaP3.checked) {
    contadorResultado++;
  }

  alert("Tu puntaje final es:  " + contadorResultado);
}

function comprobar1() {
  document.getElementById("respuesta1").innerHTML =
    " La respuesta correcta es :NO";
  document.getElementById("Si1").disabled = true;
  document.getElementById("No1").disabled = true;
  document.getElementById("Nose1").disabled = true;
}
function comprobar2() {
  document.getElementById("respuesta2").innerHTML =
    " La respuesta correcta es :aa/mm/dd";
  document.getElementById("dd/mm/aa1").disabled = true;
  document.getElementById("aa/mm/dd1").disabled = true;
  document.getElementById("mm/aa/dd1").disabled = true;
}
function comprobar3() {
  document.getElementById("respuesta3").innerHTML =
    " La respuesta correcta es :2000";
  document.getElementById("30001").disabled = true;
  document.getElementById("20001").disabled = true;
  document.getElementById("40001").disabled = true;
}

function seleccionoRespuesta() {
  alert("¿Estas seguro de escoger esta respuesta?");
}

function mostrarpregunta2() {
  document.getElementById("pregunta2").style.display = "block";
}
function mostrarpregunta3() {
  document.getElementById("pregunta3").style.display = "block";
}

function contartiempo() {
  let timer = 60;
  let intervalo = setInterval(() => {
    timer--;
    if (timer <= 0) {
      clearInterval(intervalo);
      enviar();
      location.reload();
    }
    document.getElementById(
      "t-restante"
    ).innerHTML = `Tiempo: ${timer} segundos`;
  }, 1000);
}

function juegaAhora() {
  var nombre = prompt("Ingresa tu nombre");
  if (nombre == "") {
    alert(" Debes ingrsar tu nombre");
    return;
  }

  //Mostrar nombre
  document.getElementById("mensaje_saludo").innerHTML =
    "Bienvenido " + nombre + " vamos a jugar";
  document.getElementById("myButton").style.display = "none";
  document.getElementById("boddy").style.backgroundColor = "#FFEBEE";
  document.getElementById("Imagen1").style.display = "none";

  // Mostrar form
  contartiempo();

  document.getElementById("pregunta1").style.display = "block";
  //document.getElementById("pregunta2").style.display = "block";
  //document.getElementById("pregunta3").style.display = "block";//
  document.getElementById("mensaje_saludo").style.display = "block";
  document.getElementById("mensaje_bienvenida").style.display = "none";
  document.getElementById("boddy").style.backgroundImage =
    "url(https://31.media.tumblr.com/f66561ade3154a5abd42e0ccc27b3991/tumblr_nqzg9dCNKP1ua6afwo1_400.gif)";
}
var botonSiguiente = document.getElementById("sig1");
botonSiguiente.addEventListener("click", mostrarpregunta2);
var botonSiguiente = document.getElementById("sig2");
botonSiguiente.addEventListener("click", mostrarpregunta3);

var botonJugar = document.getElementById("myButton");
botonJugar.addEventListener("click", juegaAhora);
var botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", enviar);

var opcionEcuador = document.getElementById("No1");
opcionEcuador.addEventListener("click", seleccionoRespuesta);
var opcionChile = document.getElementById("Si1");
opcionChile.addEventListener("click", seleccionoRespuesta);
var opcionParaguay = document.getElementById("Nose1");
opcionParaguay.addEventListener("click", seleccionoRespuesta);

var opcionPeso = document.getElementById("dd/mm/aa1");
opcionPeso.addEventListener("click", seleccionoRespuesta);
var opcionSucre = document.getElementById("aa/mm/dd1");
opcionSucre.addEventListener("click", seleccionoRespuesta);
var opcionBolivar = document.getElementById("mm/aa/dd1");
opcionBolivar.addEventListener("click", seleccionoRespuesta);

var opcionArroz = document.getElementById("30001");
opcionArroz.addEventListener("click", seleccionoRespuesta);
var opcionSushi = document.getElementById("20001");
opcionSushi.addEventListener("click", seleccionoRespuesta);
var opcionOnigiri = document.getElementById("40001");
opcionOnigiri.addEventListener("click", seleccionoRespuesta);

var opcionComprobar = document.getElementById("comprobar1");
opcionComprobar.addEventListener("click", comprobar1);
var opcionComprobar2 = document.getElementById("comprobar2");
opcionComprobar2.addEventListener("click", comprobar2);
var opcionComprobar3 = document.getElementById("comprobar3");
opcionComprobar3.addEventListener("click", comprobar3);

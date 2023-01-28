// CONTADOR RESULTADO
function enviar() {
  var contadorResultado = 0;
  var respuestaP1 = document.getElementById("Negativa1");
  if (respuestaP1.checked) {
    contadorResultado++;
  }
  var respuestaP2 = document.getElementById("fecha2");
  if (respuestaP2.checked) {
    contadorResultado++;
  }
  var respuestaP3 = document.getElementById("valor2");
  if (respuestaP3.checked) {
    contadorResultado++;
  }

  alert("Tu puntaje final es:  " + contadorResultado);
}
// COMPROBAR LAS RESPUESTAS
function comprobar1() {
  document.getElementById("sig1").style.display = "inline";
  document.getElementById("respuesta1").innerHTML =
    " La respuesta correcta es :No";
  document.getElementById("Afirmativa1").disabled = true;
  document.getElementById("Negativa1").disabled = true;
  document.getElementById("Dudativa1").disabled = true;
}
function comprobar2() {
  document.getElementById("sig2").style.display = "inline";
  document.getElementById("respuesta2").innerHTML =
    " La respuesta correcta es :aa/mm/dd";
  document.getElementById("fecha1").disabled = true;
  document.getElementById("fecha2").disabled = true;
  document.getElementById("fecha3").disabled = true;
}
function comprobar3() {
  document.getElementById("respuesta3").innerHTML =
    " La respuesta correcta es :2000";
  document.getElementById("valor1").disabled = true;
  document.getElementById("valor2").disabled = true;
  document.getElementById("valor3").disabled = true;
}

function seleccionoRespuesta() {
  alert("¿Estas seguro de escoger esta respuesta?");
}
// PREGUNTAS
function mostrarpregunta2() {
  document.getElementById("pregunta2").style.display = "block";
  document.getElementById("pregunta1").style.display = "none";
}
function mostrarpregunta3() {
  document.getElementById("pregunta3").style.display = "block";
  document.getElementById("pregunta2").style.display = "none";
}
// TEMPORIZADOR
function contartiempo() {
  let timer = 30;
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
// BOTON JUGAR
function juegaAhora() {
  var nombre = prompt("Ingresa tu nombre");
  if (nombre == "") {
    alert(" Debes ingresar tu nombre");
    return;
  }

  //MOSTRAR NOMBRES /IMAGENES
  document.getElementById("mensaje_saludo").innerHTML =
    "Bienvenido " + nombre + " vamos a jugar";
  document.getElementById("myButton").style.display = "none";
  document.getElementById("boddy").style.backgroundColor = "#FFEBEE";
  document.getElementById("Imagen1").style.display = "none";

  // MOSTRAR FORM
  contartiempo();
  document.getElementById("triviaDivertida").style.display = "block";
  document.getElementById("pregunta1").style.display = "block";
  //document.getElementById("pregunta2").style.display = "block";
  //document.getElementById("pregunta3").style.display = "block";//
  document.getElementById("mensaje_saludo").style.display = "block";
  document.getElementById("mensaje_bienvenida").style.display = "none";
  document.getElementById("boddy").style.backgroundImage =
    "url(https://31.media.tumblr.com/f66561ade3154a5abd42e0ccc27b3991/tumblr_nqzg9dCNKP1ua6afwo1_400.gif)";
}

//ATRAER INFORMACION DEL HTML
var botonSiguiente = document.getElementById("sig1");
botonSiguiente.addEventListener("click", mostrarpregunta2);
var botonSiguiente = document.getElementById("sig2");
botonSiguiente.addEventListener("click", mostrarpregunta3);

var botonJugar = document.getElementById("myButton");
botonJugar.addEventListener("click", juegaAhora);
var botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", enviar);

var opcionNegativa = document.getElementById("Negativa1");
opcionNegativa.addEventListener("click", seleccionoRespuesta);
var opcionAfirmativa = document.getElementById("Afirmativa1");
opcionAfirmativa.addEventListener("click", seleccionoRespuesta);
var opcionDudativa = document.getElementById("Dudativa1");
opcionDudativa.addEventListener("click", seleccionoRespuesta);

var opcionFecha1 = document.getElementById("fecha1");
opcionFecha1.addEventListener("click", seleccionoRespuesta);
var opcionFecha2 = document.getElementById("fecha2");
opcionFecha2.addEventListener("click", seleccionoRespuesta);
var opcionFecha3 = document.getElementById("fecha3");
opcionFecha3.addEventListener("click", seleccionoRespuesta);

var opcionValor1 = document.getElementById("valor1");
opcionValor1.addEventListener("click", seleccionoRespuesta);
var opcionValor2 = document.getElementById("valor2");
opcionValor2.addEventListener("click", seleccionoRespuesta);
var opcionValor3 = document.getElementById("valor3");
opcionValor3.addEventListener("click", seleccionoRespuesta);

var opcionComprobar = document.getElementById("comprobar1");
opcionComprobar.addEventListener("click", comprobar1);
var opcionComprobar2 = document.getElementById("comprobar2");
opcionComprobar2.addEventListener("click", comprobar2);
var opcionComprobar3 = document.getElementById("comprobar3");
opcionComprobar3.addEventListener("click", comprobar3);

$(document).ready(function() {
  var fondo = new Audio('../boy-sound/FONDO.mp3');
  var btn = new Audio('../boy-sound/boton.m4a')

  function FondoPlay(){
    fondo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    fondo.volume = 0.1;
    fondo.play();
  }

  var boton = new Audio('sonidos/01Hola.m4a');
  boton.play();

  FondoPlay();

  $( "#btn_play" ).click(function() {
    var empezar = new Audio('sonidos/02empecemos.m4a');
    btn.play();
    btn.onended = function () {
        empezar.play();
    }
    empezar.onended = function() {
      location.href = 'encenderLuz.html';;
    };
  });

  $( ".cerrar" ).click(function() {
    btnCerrar();
  });

  function btnCerrar(){
    btn.play();
    btn.onended = function () {
                        location.href = '../cargando.html';
    }

  }


 });

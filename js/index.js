$(document).ready(function() {

  var fondo = new Audio('boy-sound/FONDO.mp3');
  var boton = new Audio('boy-sound/boton.m4a')

  //FondoPlay();
  welcomeButtonAn();
  alumnButtonAn();
  addAlumnButtonAn();

  function FondoPlay(){
    fondo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    fondo.volume = 0.1;
    fondo.play();
  }


  function welcomeButtonAn() {
    $('#welcome-button').hover(function() {
      $('svg').find('#welcome-button').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': 'purple', 'transition': 'fill 1s'});
      console.log('on');
    }, function() {
      $('svg').find('#welcome-button').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': 'rgb(107, 73, 176)', 'transition': 'fill 1s'});
    });
  }

  function alumnButtonAn() {
    $('#manu-profile').hover(function() {
      $('svg').find('#manu-profile').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': 'purple', 'transition': 'fill 1s'});
      console.log('on');
    }, function() {
      $('svg').find('#manu-profile').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#422A73', 'transition': 'fill 1s'});
    });
  }

  function addAlumnButtonAn() {
    $('#add-alumno').hover(function() {
      $('svg').find('#add-alumno').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#f2d46e', 'transition': 'fill 1s'});
      console.log('on');
    }, function() {
      $('svg').find('#add-alumno').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 1s'});
    });
  }


  $( "#welcome-button" ).click(function() {
    boton.play();
    setTimeout(function() {
      location.href = 'alumnos.html';
    }, 1000);
  });

  $("#manu-profile").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'actividades.html';
    }, 1000);
  });

  $("#add-alumno").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'helpConfig.html';
    }, 1000);
  });

  $("#menu-config").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'menuDesp.html';
    }, 1000);
  });

  $("#lavar-dientes").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'personajes.html';
    }, 1000);
  });

});

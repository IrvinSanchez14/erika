$(document).ready(function() {

  var fondo = new Audio('boy-sound/FONDO.mp3');
  var boton = new Audio('boy-sound/boton.m4a');


  FondoPlay();
  welcomeButtonAn();
  alumnButtonAn();
  addAlumnButtonAn();
  menu1Anmination();
  menu2Anmination();
  menu3Anmination();
  menu4Anmination();
  menu5Anmination();
  menu6Anmination();

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

  function menu1Anmination() {
    $('#menu1').hover(function() {
      $('svg').find('#menu1').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu1').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
    });
  }

  function menu2Anmination() {
    $('#menu2').hover(function() {
      $('svg').find('#menu2').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu2').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
    });
  }

  function menu3Anmination() {
    $('#menu3').hover(function() {
      $('svg').find('#menu3').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu3').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
    });
  }

  function menu4Anmination() {
    $('#menu4').hover(function() {
      $('svg').find('#menu4').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu4').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
    });
  }

  function menu5Anmination() {
    $('#menu5').hover(function() {
      $('svg').find('#menu5').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu5').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
    });
  }

  function menu6Anmination() {
    $('#menu6').hover(function() {
      $('svg').find('#menu6').stop()
      .animate({'stroke-dashoffset': 0}, 1000)
      .css({'fill': '#ae8a10', 'transition': 'fill 0.5s'});
      console.log('on');
    }, function() {
      $('svg').find('#menu6').stop()
      .animate({'stroke-dashoffset': 900}, 1000)
      .css({'fill': '#EFCA4F', 'transition': 'fill 0.5s'});
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

  $(".menu-config").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'menuDesp.html';
    }, 1000);
  });

  $("#menu1").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'alumnos.html';
    }, 500);
  });

  $("#menu2").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'sesiones.html';
    }, 500);
  });

  $("#menu3").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'premios.html';
    }, 500);
  });

  $("#menu4").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'profesional.html';
    }, 500);
  });

  $("#menu5").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'configuracionG.html';
    }, 500);
  });

  $("#menu6").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'recordatorios.html';
    }, 500);
  });


  $("#lavar-dientes").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'personajes.html';
    }, 1000);
  });

  $(".femenino").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'macha/index.html';
    }, 1000);
  });

  $(".masculino").click(function(){
    boton.play();
    setTimeout(function() {
      location.href = 'macho/index.html';
    }, 1000);
  });


  SVGElement.prototype.getTransformToElement =
  SVGElement.prototype.getTransformToElement ||
  function(toElement) {
    return toElement
      .getScreenCTM()
      .inverse()
      .multiply(this.getScreenCTM());
  };

var svg = null;
var rect1 = null;
var rect2 = null;
var rect3 = null;
var dot1 = null;
var dot2 = null;

  /*$("#pan1").click(function(){
    do8();
  });

  $("#lechuga").click(function(){
    do9();
  });*/

  Draggable.create("#salami1", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#lechuga", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#pan1", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#salami2", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#queso", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#salamiG", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  Draggable.create("#pan2", {
    type:"x,y",
    bounds:"#container",
    overshootTolerance:0,
    throwProps:true
  })

  function toLocalPoint(element, point) {
    //Converts the point's html coordinates to svg coordinates

    var svg = element.ownerSVGElement;
    var globalPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    var globalToLocalMatrix = element.getTransformToElement(svg).inverse();
    return globalPoint.matrixTransform(globalToLocalMatrix);
  }

  function do8() {
    //Without moving the svg, move blue square top right to blue dot center
    var svg = document.querySelector("#svg-container");
    var dot = document.querySelector("#base1");
    var square = document.querySelector("#pan1");

    var rectSVG = svg.getBoundingClientRect();
    var rectDot = dot.getBoundingClientRect();
    var rectSquare = square.getBoundingClientRect();

    //Create svg points for the matrix transform functions
    var ptDot = svg.createSVGPoint();
    var ptSquare = svg.createSVGPoint();

    //Distance: From 0 to dot center in html coords
    ptDot.x = 250;//rectDot.left + (rectDot.width/2) - rectSVG.left;
    ptDot.y = 445;//rectDot.top - rectSVG.top;

    console.log(rectDot);

    //Distance: From square top right corner to svg top left corner in html coords
    ptSquare.x = 250;//rectSquare.left + rectSquare.width - rectSVG.left;
    ptSquare.y = 290;//rectSquare.top - rectSVG.top;

    //Convert html coords to svg coords
    var ptLclDot = toLocalPoint(square, ptDot); //From svg top left corner to dot center in svg coords
    var ptLclSquare = toLocalPoint(square, ptSquare); //From square top right corner to svg top left corner in svg coords

    //Get the distance between the 2 points
   var x = ptLclDot.x - ptLclSquare.x;
   var y = ptLclDot.y - ptLclSquare.y;

    //Move the square
    TweenLite.to(square, .5, {x: "+=" + x, y: "+=" + y});
  }

  function do9() {
    //Without moving the svg, move blue square top right to blue dot center
    var svg = document.querySelector("#svg-container");
    var dot = document.querySelector("#base1");
    var square = document.querySelector("#lechuga");

    var rectSVG = svg.getBoundingClientRect();
    var rectDot = dot.getBoundingClientRect();
    var rectSquare = square.getBoundingClientRect();

    //Create svg points for the matrix transform functions
    var ptDot = svg.createSVGPoint();
    var ptSquare = svg.createSVGPoint();

    //Distance: From 0 to dot center in html coords
    ptDot.x = 160;//rectDot.left + (rectDot.width/2) - rectSVG.left;
    ptDot.y = 485;//rectDot.top - rectSVG.top;

    console.log(rectDot);

    //Distance: From square top right corner to svg top left corner in html coords
    ptSquare.x = 250;//rectSquare.left + rectSquare.width - rectSVG.left;
    ptSquare.y = 290;//rectSquare.top - rectSVG.top;

    //Convert html coords to svg coords
    var ptLclDot = toLocalPoint(square, ptDot); //From svg top left corner to dot center in svg coords
    var ptLclSquare = toLocalPoint(square, ptSquare); //From square top right corner to svg top left corner in svg coords

    //Get the distance between the 2 points
   var x = ptLclDot.x - ptLclSquare.x;
   var y = ptLclDot.y - ptLclSquare.y;

    //Move the square
    TweenLite.to(square, .5, {x: "+=" + x, y: "+=" + y});
  }

  function do10() {
    //Without moving the svg, move blue square top right to blue dot center
    var svg = document.querySelector("#svg-container");
    var dot = document.querySelector("#base1");
    var square = document.querySelector("#salami1");

    var rectSVG = svg.getBoundingClientRect();
    var rectDot = dot.getBoundingClientRect();
    var rectSquare = square.getBoundingClientRect();

    //Create svg points for the matrix transform functions
    var ptDot = svg.createSVGPoint();
    var ptSquare = svg.createSVGPoint();

    //Distance: From 0 to dot center in html coords
    ptDot.x = 160;//rectDot.left + (rectDot.width/2) - rectSVG.left;
    ptDot.y = 425;//rectDot.top - rectSVG.top;

    console.log(rectDot);

    //Distance: From square top right corner to svg top left corner in html coords
    ptSquare.x = 250;//rectSquare.left + rectSquare.width - rectSVG.left;
    ptSquare.y = 290;//rectSquare.top - rectSVG.top;

    //Convert html coords to svg coords
    var ptLclDot = toLocalPoint(square, ptDot); //From svg top left corner to dot center in svg coords
    var ptLclSquare = toLocalPoint(square, ptSquare); //From square top right corner to svg top left corner in svg coords

    //Get the distance between the 2 points
   var x = ptLclDot.x - ptLclSquare.x;
   var y = ptLclDot.y - ptLclSquare.y;

    //Move the square
    TweenLite.to(square, .5, {x: "+=" + x, y: "+=" + y});
  }


});

window.onload = function(){

  var s = Snap("#svg");

  // g is a linear gradient, relative to the element applied
  var g = s.paper.gradient("r(0,1,1)#cf5300-#fff")

  function timer(line, i){
    setTimeout( function(){fadeIn(line)}, i * 100);
  }

  function fadeIn(line){
    line.animate({opacity:1}, 125, mina.easeout)
  }

  var radialFlare = function(type, numberOfLines){
    if (type === "half"){
      var totalDegrees = 180;
    } else {
      var totalDegrees = 360;
    };

    for(i=0; i<numberOfLines; i++){
      // can extract this to change the angle of starting
      var degree = ((totalDegrees / numberOfLines) * i) + 90
      var line = s.rect(500, 400, 2, 350).attr({opacity:0, transform:"rotate(" + degree + " 501 400)"})
      timer(line, i);
    }

    var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  }

  // deprecated function, now a parameter to decide if half or full circle
  // var halfRadialFlare = function(numberOfLines){
  //   for(i=0; i<=numberOfLines ; i++){
  //     var degree = ((180 / numberOfLines) * i) + 90
  //     s.rect(500, 400, 2, 350).attr({transform:"rotate(" + degree + " 501 400)"})
  //   }

  //   var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  // }

  // manual creation of the circle
  // var circleAnimation = function(lines){
  //   var line = s.rect(500, 400, 2, 350).attr({transform:"rotate(0 501 400)"})
  //   var line1 = s.rect(500, 400, 2, 350).attr({transform:"rotate(45 501 400)"})
  //   var line2 = s.rect(500, 400, 2, 350).attr({transform:"rotate(90 501 400)" , fill: g, stroke: g})
  //   var line3 = s.rect(500, 400, 2, 350).attr({transform:"rotate(135 501 400)", fill: g, stroke: g})
  //   var line4 = s.rect(500, 400, 2, 350).attr({transform:"rotate(180 501 400)", fill: g, stroke: g})
  //   var line5 = s.rect(500, 400, 2, 350).attr({transform:"rotate(225 501 400)", fill: g, stroke: g})
  //   var line6 = s.rect(500, 400, 2, 350).attr({transform:"rotate(270 501 400)"})
  //   var line7 = s.rect(500, 400, 2, 350).attr({transform:"rotate(315 501 400)"})
  //   var lineGroup = s.group(line, line1, line2, line3, line4, line5, line6, line7)

  //   var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  // }

  var extendedCenterLines = function(){
    var centerLeftLine = s.rect(500, 400, 2, 425).attr({transform:"rotate(90 501 400)", fill: g, stroke: g})
    var centerRightLine= s.rect(500, 400, 2, 425).attr({transform:"rotate(270 501 400)", fill: g, stroke: g})
    s.paper.circle(75, 400, 4).attr({fill: "#cf5300"})
    s.paper.circle(925, 400, 4).attr({fill: "#cf5300"})

  }

  var text = function(){
    // var

  }

  // create the center circle
  // s.circle(500, 400, 100).attr({ fill: "#fff"})

  // create the circle manually
  // circleAnimation();

   // create the radial
   // possible parameters: left or right or starting position
   radialFlare("full", 56)
   // radialFlare("half", 24)
   extendedCenterLines()

}

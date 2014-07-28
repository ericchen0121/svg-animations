window.onload = function(){

  var s = Snap("#svg");

  var radialFlare = function(type, numberOfLines){
    if (type === "half"){
      var totalDegrees = 180;
    } else {
      var totalDegrees = 360;
    };

    for(i=0; i<numberOfLines; i++){
      var degree = ((totalDegrees / numberOfLines) * i) + 90
      var line = s.paper.rect(500, 400, 2, 350).attr({opacity:0, transform:"rotate(" + degree + " 501 400)"})
      fadeInDelay(line, i);
    }

    var centerMask = s.paper.circle(500, 400, 160).attr({ fill: "#fff"})
  }

  function fadeInDelay(line, i){
    setTimeout( function(){fadeIn(line)}, i * 10);
  }

  function fadeIn(line){
    line.animate({opacity:1}, 1250, mina.easeout)
  }



  // deprecated function, now a parameter to decide if half or full circle
  // var halfRadialFlare = function(numberOfLines){
  //   for(i=0; i<=numberOfLines ; i++){
  //     var degree = ((180 / numberOfLines) * i) + 90
  //     s.rect(500, 400, 2, 350).attr({transform:"rotate(" + degree + " 501 400)"})
  //   }

  //   var centerMask = s.circle(500, 400, 160).attr({ fill: "#fff"})
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

    // g is a linear gradient, relative to the element applied
  var g = s.paper.gradient("r(0,1,1)#cf5300-#fff")

  var extendedCenterLines = function(){
    var centerLeftLine = s.rect(500, 400, 2, 425).attr({transform:"rotate(90 501 400)", fill: g, stroke: g})
    var centerRightLine= s.rect(500, 400, 2, 425).attr({transform:"rotate(270 501 400)", fill: g, stroke: g})
    s.paper.circle(75, 400, 4).attr({fill: "#cf5300"})
    s.paper.circle(925, 400, 4).attr({fill: "#cf5300"})

    // create a group for setting opacity to 0, then call fadeInDelay(group, 500)
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
   radialFlare("full", 100)
   // radialFlare("half", 24)
   extendedCenterLines()
   // text(mobile)

}

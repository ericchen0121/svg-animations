window.onload = function(){

  var s = Snap("#svg");

  // g is a linear gradient, relative to the element applied
  var g = s.paper.gradient("r(0,1,1)#cf5300-#fff")

  var circleAnimation = function(lines){
    var line = s.rect(500, 400, 2, 350).attr({transform:"rotate(0 501 400)"})
    var line1 = s.rect(500, 400, 2, 350).attr({transform:"rotate(45 501 400)"})
    var line2 = s.rect(500, 400, 2, 350).attr({transform:"rotate(90 501 400)" , fill: g, stroke: g})
    var line3 = s.rect(500, 400, 2, 350).attr({transform:"rotate(135 501 400)", fill: g, stroke: g})
    var line4 = s.rect(500, 400, 2, 350).attr({transform:"rotate(180 501 400)", fill: g, stroke: g})
    var line5 = s.rect(500, 400, 2, 350).attr({transform:"rotate(225 501 400)", fill: g, stroke: g})
    var line6 = s.rect(500, 400, 2, 350).attr({transform:"rotate(270 501 400)"})
    var line7 = s.rect(500, 400, 2, 350).attr({transform:"rotate(315 501 400)"})
    var lineGroup = s.group(line, line1, line2, line3, line4, line5, line6, line7)

    var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  }

  var radialFlare = function(numberOfLines){
    for(i=0; i<numberOfLines; i++){
      var degree = (360 / numberOfLines) * i
      s.rect(500, 400, 2, 350).attr({transform:"rotate(" + degree + " 501 400)"})
    }
    var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  }

  var halfRadialFlare = function(numberOfLines){
    for(i=0; i<=numberOfLines ; i++){
      var degree = ((180 / numberOfLines) * i) + 90
      s.rect(500, 400, 2, 350).attr({transform:"rotate(" + degree + " 501 400)"})
    }

    var centerCircle = s.circle(500, 400, 160).attr({ fill: "#fff"})
  }

  var extendedCenterLines = function(){
    var centerLeftLine = s.rect(500, 400, 2, 425).attr({transform:"rotate(90 501 400)", fill: g, stroke: g})
    var centerRightLine= s.rect(500, 400, 2, 425).attr({transform:"rotate(270 501 400)", fill: g, stroke: g})
  }

  var text = function(){
    // var

  }

  // create the center circle
  // s.circle(500, 400, 100).attr({ fill: "#fff"})

  // create the circle manually
  // circleAnimation();

   // create the radial
   radialFlare(140)
   extendedCenterLines()

   // halfRadialFlare(48);
   // extendedCenterLines()

}

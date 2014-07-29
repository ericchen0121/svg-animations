window.onload = function(){

  var s = Snap("#svg");

  // RADIAL FLARE CREATION
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

  // g is a linear gradient, relative to the element applied
  var g = s.paper.gradient("r(0,1,1)#cf5300-#fff")

  var extendedCenterLines = function(){
    var centerLeftLine = s.rect(500, 400, 2, 425).attr({transform:"rotate(90 501 400)", fill: g, stroke: g})
    var centerRightLine= s.rect(500, 400, 2, 425).attr({transform:"rotate(270 501 400)", fill: g, stroke: g})
    s.paper.circle(75, 400, 4).attr({fill: "#cf5300"})
    s.paper.circle(925, 400, 4).attr({fill: "#cf5300"})

    // create a group for setting opacity to 0, then call fadeInDelay(group, 500)
  }

  // VERTICAL LINE CREATION

  // builds "quantity" of vertical lines/rectangles, "distance" pixels apart
  function buildVerticalLines(x, y, width, height, quantity, distance){
   for(var i=0; i < quantity; i++){
      var line = s.rect(x + (i*distance), y, width, height).attr({opacity:0});
      fadeInDelay(line, i);
    }
  }

  function buildHorizontalLines(x, y, width, height, quantity, distance){
    for(var i=0; i < quantity; i++){
      var newY = y + (i*distance)
      var line = s.rect(x, newY, width, height).attr({opacity:0, transform:"rotate(90 " + x + " " + newY +")"});
      fadeInDelay(line, i);
    }
  }

  // HELPER ANIMATION FUNCTIONS

  function fadeInDelay(line, i){
    setTimeout( function(){fadeIn(line)}, i * 40);
  }

  function fadeIn(line){
    line.animate({opacity:1}, 600, mina.easeout)
  }

  var text = function(){
    // var

  }

  // ROUTER FUNCTION
  function draw(style, lines, text){
    if(style ==="horizontal"){
      buildVerticalLines(100, 145, 2, 150, lines, 20);

      // (x + 20*linesDiff + 1, y + height, width, height, lines - linesDiff, distance)
      buildVerticalLines(161, 295, 1, 30, lines - 3, 20);
    } else if (style==="vertical"){
      buildHorizontalLines(100, 145, 2, 150, lines, 20)

      // (x + height, y, width, height, lines, distance)
      buildHorizontalLines(130, 146, 1, 30, lines, 20)
    } else if(style==="halfradial"){
      radialFlare("half", lines)
      extendedCenterLines()
      radialText()
    } else if(style==="fullradial"){
      radialFlare("full", lines)
      extendedCenterLines()
    }
  }


   draw("horizontal", 50)
   // draw("vertical", 20)
   // draw("halfradial", 50)
   // draw("fullradial", 50)
   // text(mobile)

}

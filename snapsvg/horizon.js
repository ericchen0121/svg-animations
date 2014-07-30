window.onload = function(){

  var s = Snap("#svg");


  // HELPER ANIMATION FUNCTIONS

  function fadeInDelay(element, i){
    setTimeout( function(){fadeIn(element)}, i * 40);
  }

  function fadeIn(element){
    element.animate({opacity:1}, 600, mina.easeout)
  }

  // RADIAL FLARE CREATION
  var radialFlare = function(type, numberOfLines){

    if (type === "half"){
      var totalDegrees = 180;
    } else {
      var totalDegrees = 360;
    };

    // draw all radial lines
    for(i=0; i <= numberOfLines; i++){
      var degree = ((totalDegrees / numberOfLines) * i) + 90
      var line = s.paper.rect(radial.cx, radial.cy, 2, radial.r).attr({opacity:0, transform:"rotate(" + degree + " " + (radial.cx + 1) + " " + radial.cy + ")"})

      // color the first half of the radial lines
      if (i < (numberOfLines / 2)){
        line.attr({fill: g, stroke: g})
      } else {
        line.attr({fill: gDark, stroke: gDark})
      }

      fadeInDelay(line, i);
    }

    // var centerMask = s.paper.circle(radial.cx, radial.cy, radial.r / 2.2).attr({ fill: "#fff"})

    // add in image of car in center (svg path)
  }

  // g is a linear gradient, relative to the element applied
  var g = s.paper.gradient("r(0,1,1)#cf5300-#fff:60")
  var gDark = s.paper.gradient("r(0,1,1)#000-#fff:60")

  var extendedCenterLines = function(){
    var extension = 70
    var centerLeftLine = s.rect(radial.cx, radial.cy, 2, radial.r + extension).attr({transform:"rotate(90 " + (radial.cx + 1) + " " + radial.cy +")", fill: g, stroke: g})
    var centerRightLine= s.rect(radial.cx, radial.cy, 2, radial.r + extension).attr({transform:"rotate(270 " + (radial.cx + 1) + " " + radial.cy +")", fill: gDark, stroke: gDark})
    s.paper.circle(radial.cx - radial.r - extension, radial.cy, 4).attr({fill: "#cf5300"})
    s.paper.circle(radial.cx + radial.r + extension, radial.cy, 4).attr({fill: "#000"})

    // create a group for setting opacity to 0, then call fadeInDelay(group, radial.cx)
  }

  // VERTICAL LINE CREATION

  // builds "quantity" of vertical lines/rectangles, "distance" pixels apart
  function buildVerticalLines(x, y, width, height, quantity, distance){
   for(var i=0; i < quantity; i++){
      var line = s.rect(x + (i * distance), y, width, height).attr({ opacity:0 });
      fadeInDelay(line, i);
    }
  }

  function buildHorizontalLines(x, y, width, height, quantity, distance){
    for(var i=0; i < quantity; i++){
      var newY = y + (i * distance)
      var line = s.rect(x, newY, width, height).attr({ opacity:0, transform:"rotate(90 " + x + " " + newY +")" });
      fadeInDelay(line, i);
    }
  }

  // HELPER TEXT FUNCTIONS

  // leftText is {'title', 'description'}
  var renderRadialText = function(text, position){

    var lx = radial.cx - radial.r + 100
    var rx = radial.cx + radial.r - 100
    var y = radial.cy + 50

    if (position === "outside"){
      lx -= 190
      rx += 190
      y -= 60
    }

    var leftTitle = s.paper.text(lx, y, text.leftTitle).attr({"text-anchor": "end"})
    var leftDescription = s.paper.text(lx, y + 20, text.leftDescription).attr({"text-anchor": "end"})
    var rightTitle = s.paper.text(rx, y, text.rightTitle).attr({"text-anchor": "start"})
    var rightDescription = s.paper.text(rx, y + 20, text.rightDescription).attr({"text-anchor": "start"})

    var titles = s.group(leftTitle, rightTitle)
    var descriptions = s.group(leftDescription, rightDescription)

    titles.attr({fontSize: '1.2em'})
    descriptions.attr({fontSize: '.7em'})
  }

  // text is an array
  var renderLeftRightText = function(text){

    // create SnapSvg groups for applying styles
    // var titles = s.paper.g()
    // var descriptions = s.paper.g()

    // create text and style it
    var len = text.length
    for(i = 0; i < len; i++){
      var xPosition = linePosition.x + linePosition.distance * text[i][2] - 10

      // create alternating up and down text locations
      if(i % 2 == 0){
        var yPosition = linePosition.y - 100
      } else {
        var yPosition = linePosition.y + linePosition.mainLineHeight + 100
      }

      // create the text in the right position
      var title = s.paper.text(xPosition, yPosition, text[i][0]).attr({"text-anchor":"end", fontSize: '2.0em', opacity: 0})

      // if last one, emphasize it more
      // NOTE: this is tightly coupled to the text array parameter
      if(i=== len - 1){
        title.attr({fontSize:'4.0em'})
      }

      var description = s.paper.text(xPosition, yPosition + 30, text[i][1]).attr({"text-anchor":"end", fontSize: '1.2em', opacity: 0})

      // fade in opacity delay
      fadeInDelay(title, text[i][2])
      fadeInDelay(description, text[i][2])

      // add to Snap groups
      // titles.add(title)
      // descriptions.add(description)


      renderTextExtenders(text[i][2], i);
    }

  }

  var renderTopDownText = function(text){

    // create SnapSvg groups for applying styles
    // var titles = s.paper.g()
    // var descriptions = s.paper.g()

    // create text and style it
    var len = text.length
    for(i = 0; i < len; i++){
      var xPosition = linePosition.x + linePosition.miniLineHeight * 2 + 20
      var yPosition = linePosition.y + linePosition.distance * text[i][2]

      // create the text in the right position
      var title = s.paper.text(xPosition, yPosition, text[i][0]).attr({"text-anchor":"start", fontSize: '1.4em', opacity: 0})

      // if last one, emphasize it more
      // NOTE: this is tightly coupled to the text array parameter
      if(i=== len - 1){
        title.attr({fontSize:'3.2em'})
        description.attr({fontSize:'1.0em'})
      }

      var description = s.paper.text(xPosition, yPosition + 15, text[i][1]).attr({"text-anchor":"start", fontSize: '.8em', opacity: 0})

      // fade in opacity delay
      fadeInDelay(title, text[i][2])
      fadeInDelay(description, text[i][2])

      // add to Snap groups
      // titles.add(title)
      // descriptions.add(description)


      renderTopDownTextExtenders(text[i][2]);
    }
  }

  // this renders the line extender to reach the text on the lineNumber
  // loop Number is used to determine up or down position
  var renderTextExtenders = function(lineNumber, loopNumber){
    var xPosition = linePosition.x + linePosition.distance * lineNumber

    if(i % 2 == 0){
        var yPosition = linePosition.y - 135
      } else {
        var yPosition = linePosition.y + linePosition.mainLineHeight
    }

    // timing function to sync vertical line creation
    // a small hack due to reusing the buildVerticalLines function, which uses the number of lines to create the setTimeout
    setTimeout(function(){ buildVerticalLines(xPosition, yPosition, 2, 135, 1, linePosition.distance)}, lineNumber * 40);
  }

  var renderTopDownTextExtenders = function(lineNumber){
    var xPosition = linePosition.x + linePosition.miniLineHeight * 2
    var yPosition = linePosition.y + linePosition.distance * lineNumber + 1

    // timing function to sync vertical line creation
    // a small hack due to reusing the buildVerticalLines function, which uses the number of lines to create the setTimeout
    setTimeout(function(){ buildHorizontalLines(xPosition, yPosition, 1, linePosition.miniLineHeight, 1, linePosition.distance)}, lineNumber * 40);
  }

  // ROUTER FUNCTION
    // build functions have these params: (x + height, y, width, height, lines, distance)
  function draw(style, lines, config){
    if(style ==="leftRight"){
      // main lines
      buildVerticalLines(linePosition.x, linePosition.y, 2, linePosition.mainLineHeight, lines, linePosition.distance);
      // lower lines
      buildVerticalLines(linePosition.x + 1 + 3 * linePosition.distance, linePosition.y + linePosition.mainLineHeight, 1, linePosition.miniLineHeight, lines - 3, linePosition.distance);
      // text
      renderLeftRightText(config.text)
      // bold line
      setTimeout(function(){
          buildVerticalLines(linePosition.x + config.boldLine * linePosition.distance, linePosition.y - 135, 4, linePosition.mainLineHeight + 135 , 1, linePosition.distance)
        }, config.boldLine * 40);
    } else if (style==="topDown"){
      // main lines
      buildHorizontalLines(linePosition.x, linePosition.y, 2, linePosition.mainLineHeight, lines, linePosition.distance)
      // lower lines
      buildHorizontalLines(linePosition.x + linePosition.miniLineHeight, linePosition.y + 1, 1, linePosition.miniLineHeight, lines, linePosition.distance)
      // text
      renderTopDownText(config.text)
      // bold line
      setTimeout(function(){
          buildHorizontalLines(linePosition.x + linePosition.miniLineHeight * 2, linePosition.y + linePosition.distance * config.boldLine, 4, linePosition.mainLineHeight + linePosition.miniLineHeight * 2, 1, linePosition.distance)
        }, config.boldLine * 40);
    } else if(style==="halfRadial"){
      radialFlare("half", lines)
      extendedCenterLines()
      renderRadialText(config, "outside")
    } else if(style==="fullRadial"){
      radialFlare("full", lines) // may need to make these calls more flexible, like the lines
      extendedCenterLines()
      renderRadialText(config, "outside")
    } else if(style==="halfRadialMobile"){
      radial.r = 200
      radialFlare("half", lines)
      renderRadialText(config, "inside")
    }
  }

  // Current Text API
  // the the last value in text will be bolded.
  // boldLine is the index of the line to be bolded.

  // TEXT
  var radialText = {
    leftTitle: 'Sun Panels',
    leftDescription: 'Panels harness power throughout the day',
    rightTitle: 'Battery',
    rightDescription: 'The battery stores energy for later use'
  }

  var config1 = {
    boldLine: 49,
    text: [
            ['146hp', 'Lexus CT200H', 5],
            ['146hp', 'Mercedes Benz', 12],
            ['146hp', 'BMW', 18],
            ['146hp', 'BMW i3', 22],
            ['175hp', 'Audi A3 eTron', 49]
          ]
  }

  var config2 = {
    boldLine: 24,
    text: [
            ['8 TDs', 'Ryan Tannehill', 7],
            ['20 TDs', 'Tom Brady', 19],
            ['30 TDs', 'Peyton Manning', 29],
            ['22 TDs', 'Joe Flacco', 24],
          ]
  }

  var config3 = {
    boldLine: 22,
    text: [
            ['5.5h', 'iPad', 2],
            ['3h', 'Laptop', 8],
            ['2h', 'iPhone', 25],
            ['2.3h', 'Audi A3 eTron', 22]
          ]
  }


  // CONFIG POSITIONS
  var radial = {
    cx: 800,
    cy: 500,
    r: 350
  }

  var linePosition = {
    x: 100,
    y: 245,
    mainLineHeight: 165,
    miniLineHeight: 40,
    distance: 20
    // TODO: mainMiniOffset is the number of lines offset
  }

   // SEE DIFFERENT STYLES
    //"leftRight" config files will
   // draw("leftRight", 50, config1)
   // draw("topDown", 30, config3)
   // draw("halfRadial", 25, radialText)
   draw("fullRadial", 72, radialText)
   // draw("halfRadialMobile", 25, radialText)
   // draw("halfRadialMobile", 75, radialText)

}

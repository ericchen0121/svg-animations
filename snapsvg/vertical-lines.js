window.onload = function ()
{
  var test = function(){
    var s = Snap("#svg");

    // can create a Set of the vertical lines
    var lineSet = Snap.set();

    function timer(line, i){
      setTimeout( function(){fadeIn(line)}, i * 50);
    }

    function fadeIn(line){
      line.animate({opacity:1}, 1000, mina.easeout)
    }

    // builds "quantity" of vertical lines/rectangles, "distance" pixels apart
    function buildVerticalLines(x, y, width, height, quantity, distance){

     for(var i=0; i < quantity; i++){
        // var beginOffset = i.toString() + "s"
        // console.log(beginOffset)
        var line = s.rect(x + (i*distance), y, width, height).attr({opacity:0});

        // Create the function and call on each iteration of the loop
        // timer(line, i);

        // or create a Crockford module
        var module = function(line, i) {
          return setTimeout(function(){fadeIn(line)}, i * 50)
        }(line, i);

      }
    }

    // Text creation
    var lexusText = s.text(220, 100, "Lexus CT200H").attr({"text-anchor":"end"})
    var lexusHPText = s.text(220, 70, "134hp").attr({"text-anchor":"end"})
    var mercedesText = s.text(580, 100, "Mercedes B class ED").attr({"text-anchor":"end"})
    var mercedesHPText = s.text(580, 70, "174hp").attr({"text-anchor":"end"})
    var bmwText = s.text(420, 400, "BMW i3").attr({"text-anchor":"end"})
    var bmwHPText = s.text(420, 370, "170hp").attr({"text-anchor":"end"})
    var bmw2Text = s.text(660, 400, "BMW 320i").attr({"text-anchor":"end"})
    var bmw2HPText = s.text(660, 370, "180hp").attr({"text-anchor":"end"})
    var audiText = s.text(1070, 80, "A3 e-tron").attr({"text-anchor":"end"})
    var audiHPText = s.text(1070, 50, "204hp").attr({"text-anchor":"end"})

    // Create a set to iterate text styles
    var horsepowerSet = Snap.set();
    horsepowerSet.push(lexusHPText)
      .push(mercedesHPText)
      .push(bmwHPText)
      .push(bmw2HPText)
      .push(audiHPText);

    function horsepowerStyle(text){
      text.attr({fontSize:'2.2em'});
    };

    horsepowerSet.forEach(horsepowerStyle);

    // Create lines extending from text to the vertical lines
    // TO DO

    // Call Functions
    buildVerticalLines(100, 145, 2, 150, 50, 20);
    buildVerticalLines(161, 295, 1, 30, 47, 20);


  }


  test();
}

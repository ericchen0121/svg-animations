window.onload = function ()
{
  var test = function(){
    var s = Snap("#svg");

    // can create a Set of the vertical lines
    var lineSet = Snap.set();

    // var text = s.text(110, 110, ["lexus hs250h", "audi a4", "mercedes benz"]);

    // builds "quantity" of vertical lines/rectangles, "distance" pixels apart
    var buildVerticalLines = function(x, y, width, height, quantity, distance){
     for(var i=0; i < quantity; i++){
        s.rect(x + (i*distance), y, width, height)
          .attr({opacity:0})
          .animate({opacity:1}, 3000, mina.easeout );
      }
    }

    // create text separately, and set text-anchor to "end"
    var lexusText = s.text(180, 100, ["134hp", "Lexus CT200H"])
      // may want to style separately
      // lexusText.select('tspan:first-of-type').attr({fontSize:'2.2em'});
      // lexusText.select('tspan:last-of-type').attr({dx:-100, dy:20});
    var mercedesText = s.text(380, 100, ["174hp", "Mercedes B class ED"])
    var bmwText = s.text(220, 400, ["170hp", "BMW i3"])
    var bmw2Text = s.text(560, 400, ["180hp","BMW 320i"])
    var audiText = s.text(1100, 80, ["204hp", "A3 e-tron"])


    var textSet = Snap.set();
    textSet.push(lexusText)
      .push(mercedesText)
      .push(bmwText)
      .push(bmw2Text)
      .push(audiText);

    horsepowerStyleText = function(text){
      text.select('tspan:first-of-type').attr({fontSize:'2.2em'});
      text.select('tspan:last-of-type').attr({dx:-100, dy:20});
    };

    textSet.forEach(horsepowerStyleText);


    buildVerticalLines(100, 200, 2, 150, 50, 20);

  }


  test();
}

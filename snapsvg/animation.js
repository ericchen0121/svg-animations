window.onload = function ()
{
  var test = function(){
    var s = Snap("#svg");
    // var text = s.text(110, 110, ["lexus hs250h", "audi a4", "mercedes benz"]);

    // builds "quantity" of vertical lines/rectangles, "distance" pixels apart
    var buildVerticalLines = function(x, y, width, height, quantity, distance){
     for(var i=0; i < quantity; i++){
        s.rect(x + (i*distance), y, width, height);
      }
    }

    buildVerticalLines(50, 100, 2, 250, 30, 20);
  }

  test();
}

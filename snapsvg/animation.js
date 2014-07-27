window.onload = function ()
{
  var test = function(){
    var s = Snap("#svg");
    // rect(x,y,width, height)
    var line = s.rect(100, 100, 2, 250);
    // var text = s.text(110, 110, ["lexus hs250h", "audi a4", "mercedes benz"]);

    for(var i=0; i < 50; i++){
      s.rect(100 + (i*20), 100, 2, 250);
    }

  }

  // how does prototype work
  var build_lines = function(quantity){


  }

  test();
}

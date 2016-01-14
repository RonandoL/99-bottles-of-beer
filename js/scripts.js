$(document).ready(function() {
  // var numberBottles = (99..0);
  var lyrics1 = (" bottles of beer on the wall, ");
  var lyrics2 = (" bottles of beer. Take one down, pass it around, ");
  var lyrics3 = (" bottles of beer on the wall.");

  $("button.ninety").click(function() {
    for(var i = 99; i >= 0; i -= 1) {
      // count -= i;
      $("ul.list").append("<li>" + i + lyrics1 + i + lyrics2 + (i-1) + lyrics3 + "</li>")
    }

    $(".results").show();
  });

});

$(document).ready(function() {
  var numberBottles = (99..0);
  var lyrics1 = (" bottles of beer on the wall, ");
  var lyrics2 = (" bottles of beer. Take one down, pass it around,");
  var lyrics3 = (" bottles of beer on the wall.");
  var count = 99;

  $("button .ninety").click(function() {
    for(var i = 0; i >= 0; i -= 1) {
      count -= i;
      $("ul.list").append("<li>" + count + lyrics1 + count + lyrics2 + count + lyrics3 + "</li>")
    }

    $(".results").show();
  });

});

// to render the layout correctly in every browser/screen

$(window).on("load", function() {
  
  layout_resizer ()

});

$(window).on("resize", layout_resizer ());

function layout_resizer () {;
  var screenHeight = $(document).height();
  var headerHeight = $("header").height();
  var footerHeight = $("footer").height();

  var containerHeight = screenHeight - headerHeight - footerHeight;
  
  $(".container-fluid").css({
    height : containerHeight + "px"
  });
}
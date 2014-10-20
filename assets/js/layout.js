// to render the layout correctly in every browser/screen

$(window).on("load", function() {
  
  var screenHeight = $(document).height();
  var headerHeight = $("header").height();
  var footerHeight = $("footer").height();

  var containerHeight = screenHeight - headerHeight - footerHeight;
  
  $(".container-fluid").css({
    height : containerHeight + "px"
  });

  console.log(screenHeight, headerHeight, footerHeight, containerHeight)

});
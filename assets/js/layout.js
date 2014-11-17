// to render the layout correctly in every browser/screen

$(window).on("load", function() {
  
  layout_resizer ();

});

$(window).on("resize", function() {

  layout_resizer();

});

function layout_resizer () {;
  var screenHeight   = $(window).height();
  var headerHeight   = $("header").outerHeight();
  var footerHeight   = $("footer").outerHeight();
  var asideHeight    = $("aside ul").outerHeight();
  var sectionHeight  = $("section").outerHeight();

  if ( ( headerHeight + footerHeight + asideHeight ) > screenHeight && asideHeight > sectionHeight ) {
  
    $(".container-fluid").css({
      height : asideHeight + "px"
    });

  } else if ( ( headerHeight + footerHeight + sectionHeight ) > screenHeight && asideHeight < sectionHeight) {

    $(".container-fluid").css({
      height : sectionHeight + "px"
    });

  } else {

    $(".container-fluid").css({
      height : screenHeight - headerHeight - footerHeight + "px"
    });

  }

}


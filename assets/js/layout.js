// to render the layout correctly in every browser/screen

$(window).on("load", function() {
  
  layout_resizer ();
<<<<<<< HEAD
=======
  add_view_image_icon ();
  resize_view_image_icon ();
>>>>>>> gh-pages

});

$(window).on("resize", function() {

  layout_resizer();
<<<<<<< HEAD
=======
  resize_view_image_icon ();
>>>>>>> gh-pages

});

$(document).bind("DOMSubtreeModified", function() {
<<<<<<< HEAD
  
=======

>>>>>>> gh-pages
  layout_resizer();

});

<<<<<<< HEAD
function layout_resizer () {;
=======
// triger the function to resize and to get the images size when a panel has been displayed
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
  layout_resizer();
  resize_view_image_icon();
})


function layout_resizer () {
>>>>>>> gh-pages
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

<<<<<<< HEAD

=======
// BOOTSTRAP INITS
>>>>>>> gh-pages
// init popovers

$(function () {
  $('[data-toggle="popover"]').popover()
<<<<<<< HEAD
})


=======
  // to destroy the popovers that are hidden
  $('[data-toggle="popover"]').on('hidden.bs.popover', function () {
    var popover = $('.popover').not('.in');
    if (popover) {
      popover.remove();
    }
  })
})

// init tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// View image
function add_view_image_icon () {
  $(".view-img-link").append("<div class='view-img'><i class='fa fa-external-link-square fa-3x fa-inverse'></i></div>")
}

function resize_view_image_icon () {
  $(".view-img-link").each(function() {
    var imageHeight   = $(this).children("img").height()
    var imageWitdh    = $(this).children("img").width()
    var paddingVertical = (imageHeight - 44) / 2
    $(this).children(".view-img").css({
      height : imageHeight,
      width : imageWitdh,
      "padding-top" : paddingVertical
    })
  })
  
}

>>>>>>> gh-pages

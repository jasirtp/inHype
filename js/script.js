function resize() {}

$(document).ready(function () {
  resize();
  $("#slick-slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    dots: true,
    nav: false,
  });
  $("#spotlight_slider div.slide").slick({
    centerMode: false,
    // centerPadding: '60px',
    slidesToShow: 1,
    infinite: true,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "120px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "70px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(".slick-prev").click(function () {
  $("#slick-slider").slick("slickPrev");
});
$(".slick-next").click(function () {
  $("#slick-slider").slick("slickNext");
});
$(".slick-prev").click(function () {
  $("#spotlight_slider div.slide").slick("slickPrev");
});
$(".slick-next").click(function () {
  $("#spotlight_slider div.slide").slick("slickNext");
});
$(window).resize(function () {
  resize();
});

$(window).on("load", function () {
  resize();
});
function showDiv() {
  var x = document.getElementById("search");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// travel

function equalcard(s) {
  var h = 0;
  var line_height = 0;
  $(s).css("display", "block").css("height", "auto");
  $(s).each(function () {
    var height = $(this).outerHeight(true);
    if (height > h) {
      h = height;
    }
  });
  $(s).height(h);
}
$(document).ready(function () {
  equalcard("#travel .wrapper .travelGallery .singleimages p");
});

// 6.amir
$(document).ready(function () {
  $("div.slider div.slider-container").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    speed: 1000,

    responsive: [
      {
        breakpoint: 980,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 3,
          autoplay: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,
          speed: 1000,
        },
      },
    ],
  });
});

// 2.aryan
$("div.container ul.slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

// scroll
topbutton = document.getElementById("top");
window.onscroll = function () {};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {},
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
// nav bar

$(document).ready(function () {
  $(".ham").click(function () {
    $(".dropbar").toggle("slide", function () {
      $(".ham").hide();
      $(".close").show();
    });
  });

  $(".close").click(function () {
    $(".dropbar").toggle("slide", function () {
      $(".close").hide();
      $(".ham").show();
    });
  });
});

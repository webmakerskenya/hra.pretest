(function (jometh) {
    ("use strict");
    jometh(window).on("load", function () {
      jometh('[data-loader="circle-side"]').fadeOut();
      jometh("#preloader").delay(350).fadeOut("slow");
      jometh("body").delay(350).css({overflow: "visible"});
    });
    jometh("form#wrapped").on("submit", function () {
      var khristen = jometh("form#wrapped");
      khristen.validate();
      if (khristen.valid()) {
        jometh("#loader_form").fadeIn();
      }
    });
    var jaselin = new FloatLabels("form", {style: 2});
    jometh(".container_smile").click(function () {
      jometh(this).find("input").toggleClass("rotate-x");
    });
  }(window.jQuery));
  
$(function () {

  "use strict";

  var $loadbar = $(".loadbar");



  var queue = new createjs.LoadQueue(true); // http://www.createjs.com/Docs/PreloadJS/classes/LoadQueue.html
  var imgs = [
    "img/860/kinetoscope.jpg",
    "img/860/cinematographe-lumiere.jpg",
    "img/860/parvo.jpg",
    "img/860/pathe-35-mm.jpg",
    "img/860/bell-howell-2709b.jpg",
    "img/860/aeroscope.jpg",
    "img/860/chronomegaphone.jpg",
    "img/860/haut-parleur-vitaphone.jpg",
    "img/860/projecteur-almo-kino-erko.jpg",
    "img/860/mitchell-bnc.jpg",
    "img/860/nagra.jpg",
    "img/860/pathe-baby.jpg",
    "img/860/projecteur-kodascope.jpg",
    "img/860/televisor.jpg",
    "img/860/todd-ao-film.jpg",
    "img/860/todd-ao-projecteur.jpg",
    "img/860/mitchell-technicolor.jpg",
    "img/860/steadicam.jpg",
    "img/860/cameflex.jpg",
    "img/860/cameblimp.jpg",
    "img/860/eclair-16.jpg",
    "img/860/aaton-7.jpg",
    "img/860/aaton-8-35.jpg",
    "img/860/panaflex-platinum.jpg",
    "img/860/arri-35-iii.jpg",
    "img/860/cantar.jpg",
    "img/860/arri-alexa.jpg"
  ];

  function preloadProgress (e) {
    console.log(e.progress * 100);
    $loadbar.css({ width: (e.progress * 100) + "%" });
    // $(".loadbar").css({ width: (e.progress * 100) + "%" });
  }

  function preloadComplete () {
    var $active;
    $(".accordion").on("click", ".accordion-title", function () {
      var itemIndexNew = $(".accordion-item").index($(this).parent());
      var itemIndexOld = ($active ? $(".accordion-item").index($active) : null);
      if (itemIndexOld !== null && itemIndexOld < itemIndexNew) {
        console.log("Hzey");
        $("html, body").scrollTop($(window).scrollTop() - $active.height());
      }
    });
    $(".accordion").on("down.zf.accordion", function(e) {
      $active = $(".accordion").find(".accordion-item.is-active");
    });

    $(".content").fadeIn(10);
  }


  // Init
  $(document).foundation();
  queue.setMaxConnections(10);
  queue.loadManifest(imgs);
  queue.on("progress", preloadProgress);
  queue.on("complete", preloadComplete);


});

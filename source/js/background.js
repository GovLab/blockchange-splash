(function(){
  // const bg = document.getElementsByClassName('bg');
  const bg2 = document.getElementsByClassName('bg-2');

  setTimeout(function(){
    $(bg2).css("display", "block")
  }, 4000);

  // function fadeOut(image) {
  //     setTimeout(function(){
  //       $(image)
  //         .animate({opacity: 0}, 100);
  //       }, 200);
  //   };
  //
  // function fadeIn(image) {
  //   setTimeout(function(){
  //     $(image).toggleClass("bg-2");
  //     $(image).css("display", "block")
  //       .animate({opacity: 1}, 400);
  //   }, 400);
  // };


  // $.when($.ajax(fadeOut(bg))).then(function () {
  //   fadeIn(bg2)
  // }).then(function() {
  //   fadeOut(bg2)
  // });

})();

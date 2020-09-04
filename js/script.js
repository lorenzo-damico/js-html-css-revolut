$(document).ready(function() {

  $(".open_menu").hover(
    function () {
      $(this).children(".menu_tendina").toggle();
    }
  );


  // SOLUZIONE CON 2 FUNZIONI

  // $(".open_menu").mouseenter(
  //   function() {
  //     $(this).children(".menu_tendina").show();
  //   }
  // );
  //
  // $(".open_menu").mouseleave(
  //   function() {
  //     $(this).children(".menu_tendina").hide();
  //   }
  // );

});

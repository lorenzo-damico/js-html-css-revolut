$(document).ready(function() {

  $(".open_menu").mouseenter(
    function() {
      $(this).children(".menu_tendina").show();
    }
  );

  $(".open_menu").mouseleave(
    function() {
      $(this).children(".menu_tendina").hide();
    }
  );







});

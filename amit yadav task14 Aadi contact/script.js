
  // <!--preloader -->
  var loader=document.getElementById("preloader");
  window.addEventListener("load",function(){
    loader.style.display="none";
  })
  // end preloader
// top button-----------------------------------------
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
  // end topbar---------------------------------------

  // aos script for scroll animation 
  AOS.init({
  offset:10,
 duration:1000,
      });

    
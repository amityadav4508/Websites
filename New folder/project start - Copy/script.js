var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// aos script for scroll animation 
      AOS.init({
        offset:300,
        duration:1000,
      });
      // <!-- preloader section  -->
  var loader=document.getElementById("preloader");
  window.addEventListener("load",function(){
    loader.style.display="none";
  })



// top button
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
  // end topbar

  // // <!-- top buttoooon -->
  //       $(window).on('scroll',function(){
  //         if($(window).scrollTop()){
  //           $('navbar').addClass('white')
  //         }
  //         else{
  //           $('navbar').removeClass('white');
  //         }
  //       })
  //       // end topbar
      

    
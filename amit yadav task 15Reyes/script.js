var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loopPreventsSliding:true,
  // slidesPerView: 5,
  slidesPerGroup:3,
  fadeEffect: { crossFade: true },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:true,

});


var swiper = new Swiper(".myLogo", {
  // spaceBetween: 30,
  // slidesPerView: 5,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    380: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }

});

// aos script for scroll animation 
      AOS.init({
        offset:0,
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
        // end topbar
      

    
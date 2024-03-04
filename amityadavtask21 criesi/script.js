var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 30,
  // slidesPerView: 3,

  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:true,  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  
  },
});
var swiper = new Swiper(".myHero", {
  spaceBetween: 30,
  slidesPerView: 1,

  // effect: "fade",
  navigation: {
    nextEl: ".hero-button-next  ",
    prevEl: ".hero-button-prev ",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// aos script for scroll animation 
      AOS.init({
        offset:200,
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
      

    
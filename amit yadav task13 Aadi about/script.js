

// testimonial sections 
var swiper = new Swiper(".myTeam", {
  autoplay:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
     
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20
     
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
     
    }
  }
});


// top button
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
  // end topbar

        // aos script for scroll animation 
      AOS.init({
        offset:10,
        duration:1000,
      });

    
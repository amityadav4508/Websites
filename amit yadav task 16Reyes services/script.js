

var swiper = new Swiper(".myServices", {
  navigation: {
    nextEl: ".service-swiper-button-next",
    prevEl: ".service-swiper-button-prev",
  },
  autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
   
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
var swiper = new Swiper(".myBlog", {
  navigation: {
    nextEl: ".blog-swiper-button-next",
    prevEl: ".blog-swiper-button-prev",
  },
  // autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
   
    768: {
      slidesPerView: 3,
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
      

    
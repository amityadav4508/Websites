


var swiper = new Swiper(".myHero", {
  spaceBetween: 30,
  // effect: "fade",
  // autoplay:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

var swiper = new Swiper(".myCategory", {

  // effect: "fade",
  navigation: {
    nextEl: ".category-button-next",
    prevEl: ".category-button-prev",
  },
  loop: true,
        spaceBetween: 30,


  // autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 4,

    },
    1250: {
      slidesPerView: 5,

    },
  }
});
// team

var swiper = new Swiper(".myTeam", {
  navigation: {
    nextEl: ".category-button-next",
    prevEl: ".category-button-prev",
  },
  loop: true,
        spaceBetween: 20,
  autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  }
});

var swiper = new Swiper(".myClient", {
  navigation: {
    nextEl: ".category-button-next",
    prevEl: ".category-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
        spaceBetween: 20,
  // autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  }
});

// product-page  img toggle '

// products 
var swiper = new Swiper(".myProducts", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
        spaceBetween: 20,
  // autoplay:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  }
});






// client


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

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
          }
        
           else {
            document.getElementById("navbar").style.top = "50px";
          }
        }

      // 
     
        
      
      
var swiper = new Swiper(".myHero", {
  spaceBetween: 30,
  // effect: "fade",
autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
var swiper = new Swiper(".myArrival", {

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
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper(".myCategories", {

  // autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  var swiper = new Swiper(".myInstagram", {

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
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  // Blog page 
  var swiper = new Swiper(".myBlogproducts", {

    // autoplay:true,
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
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });



// aos script for scroll animation 
      AOS.init({
        offset:100,
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
      

    

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
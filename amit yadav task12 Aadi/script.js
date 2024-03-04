
// header slider 
var swiper = new Swiper(".mySwiper", {
  navigation: {
    
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:true,
  effect:'cube',
  grabCursor:true,
  cubeEffect: {
    shadows:true,
    shadowOffset:10,
    shadowsScale:0.84,
  }
  // autoplay:true,
  // slidesPerView:1, 
});

var swiper = new Swiper(".myCasestudy", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  effect: "fade",
  fadeEffect: { crossFade: true },
 

  autoplay:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// testimonial sections 
var swiper = new Swiper(".myTestimonial", {
  autoplay:true,
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
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  
  }


});

// brand icons sections 
var swiper = new Swiper(".myBrandicon", {
  navigation: {
    
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:true,
  slidesPerView:4, 
});





// serve section 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

        // aos script for scroll animation 
      AOS.init({
        offset:10,
        duration:1000,
      });

    
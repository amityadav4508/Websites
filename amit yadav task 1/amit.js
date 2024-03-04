var swiper = new Swiper(".myProject", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay:true,

  pagination:{

  }
});

// client say 
var swiper = new Swiper(".myClient", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  autoplay:true,

  pagination:{

  }
});

var swiper = new Swiper(".myBlog", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView:3,
  spaceBetween:20,
  autoplay:true,

  
});

// aos 

  AOS.init({
    offset:200,
    duration:1000,
  });


// scroll button top 
  $("#top-button").click(function () {
    $("html, body").animate({scrollTop: 0}, 200);
});
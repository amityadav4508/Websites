var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // autoplay:true,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myTestimonial ", {
  spaceBetween: 30,
  autoplay:true,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myBlog ", {
  spaceBetween: 30,
  autoplay:true,
  // effect: "fade",
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
        // end topbar
      


        // number counter project
        const counters = document.querySelectorAll('.value');
        const speed = 200;
        
        counters.forEach( counter => {
           const animate = () => {
              const value = +counter.getAttribute('akhi');
              const data = +counter.innerText;
             
              const time = value / speed;
             if(data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 1);
                }else{
                  counter.innerText = value;
                }
             
           }
           
           animate();
        });
        
        
        
    
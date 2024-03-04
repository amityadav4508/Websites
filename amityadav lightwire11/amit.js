

// header slider 
var swiper = new Swiper(".mySwiper", {
  autoplay:true,
});

// aos script for scroll animation---------- 
      AOS.init({
        offset:50,
        duration:1000,
      });

// -featured project---------------------- 
      var swiper = new Swiper(".myFetured", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween:50,
        autoplay:true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
         768 : {
            slidesPerView: 2,
            spaceBetween: 30
          },
        }
      });  
// out process sections ---------------
      var swiper = new Swiper(".myProcess", {
        spaceBetween: 10,
        slidesPerView:2,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          autoplay:true,
        },
        breakpoints: {
         1199 : {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
        }
      });  

  // HIRING SECTIONS 
      var swiper = new Swiper(".myHiring", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView:2.5,
        spaceBetween:50,
        breakpoints: {
          0 : {
            slidesPerView: 2,
            spaceBetween: 30
          },
          991 : {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1199 : {
             slidesPerView: 2.5,
             spaceBetween: 30
           },
         }
        // autoplay:true,
      });  

      // number counter 
      
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
      


// top button
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});



  
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
        // autoplay:true,
      },
      effect: "fade",
      autoplay:true,
    });

    // top company
      
    var swiper = new Swiper(".myTopcompany", {
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
            },
            slidesPerView: 4,
            spaceBetween: 30, 
            breakpoints:{
              0:{
                slidesPerView:1,
               
              },
              501:{
                slidesPerView:2,
              },
          
          
          
              767:{
                slidesPerView:3,
              },
              991:{
                slidesPerView:4,
              },
            },
    });

        // aos script for scroll animation 
      AOS.init({
        offset:200,
        duration:1000,
      });

      
      //script for scroll to top
      $("#top-button").click(function () {
          $("html, body").animate({scrollTop: 0}, 500);
      });

    
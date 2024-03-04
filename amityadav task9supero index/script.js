
var swiper = new Swiper(".mySwiper", {
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
      

const openNav =  ()=>{
  document.getElementById('mySidenav').style.width="25rem"
};

const closeNav =  ()=>{
  document.getElementById('mySidenav').style.width="0rem"
}

        // aos script for scroll animation 
      AOS.init({
        offset:200,
        duration:1000,
      });

      
      //script for scroll to top
      $("#top-button").click(function () {
          $("html, body").animate({scrollTop: 0}, 500);
      });

    
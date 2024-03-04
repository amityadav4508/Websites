var swiper = new Swiper(".myIcons", {
  slidesPerView: 4,
  autoplay:true,
});


// TOP BUTTON 
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});

        // aos script for scroll animation 
      AOS.init({
        offset:20,
        duration:1000,
      });

      // preloader 
      var loader=document.getElementById("preloader");
      window.addEventListener("load",function(){
        loader.style.display="none";
      })    
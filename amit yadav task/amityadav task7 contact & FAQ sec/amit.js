// swiper script 
        var swiper = new Swiper(".myHero", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
            slidesPerView: 1,
            autoplay:{
              delay:4000,
            },
            
          spaceBetween: 10,
         
        });

        // latest movies swiper script 
        var swiper = new Swiper(".myLatestmovies", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          spaceBetween: 20,
          breakpoints:{
            0:{
              slidesPerView:1,
             
            },
            425:{
              slidesPerView:2,
            },
        
        
        
            767:{
              slidesPerView:3,
            },
            1400:{
              slidesPerView:4,
            },
          },
        });
//  up coming movies 
        var swiper = new Swiper(".myUpcomingmovies", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          spaceBetween: 20,
      
            breakpoints:{
              0:{
                slidesPerView:1,
               
              },
              425:{
                slidesPerView:2,
              },
        
              767:{
                slidesPerView:3,
              },
              1400:{
                slidesPerView:4,
              },
            },
          
        });

        // ------top 10 united secition 
        var swiper = new Swiper(".myUnited", {
          spaceBetween: 10,
       
          breakpoints:{
            0:{
              slidesPerView:1,
             
            },
            425:{
              slidesPerView:2,
            },
        
        
        
            767:{
              slidesPerView:3,
            },
            1400:{
              slidesPerView:4,
            },
          },
        
        
          direction: "vertical",
          navigation: {
            nextEl: ".next-videobtn",
            prevEl: ".pre-videobtn",
          },
          // autoplay:true,
          freeMode: true,
          watchSlidesProgress: true,
        });
 
        // my united 2nd line 
        var swiper2 = new Swiper(".myUnited2", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });

        // end united 


        // suggested movies  seciotn 
        var swiper = new Swiper(".mySuggested", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints:{
            0:{
              slidesPerView:1,
             
            },
            425:{
              slidesPerView:2,
            },
        
        
        
            767:{
              slidesPerView:3,
            },
            1400:{
              slidesPerView:4,
            },
          },
          spaceBetween: 20,

        });

        // trending
        var swiper = new Swiper(".myTrending", {
          spaceBetween: 10,
          breakpoints:{
            0:{
              slidesPerView:1,
             
            },
            425:{
              slidesPerView:2,
            },
        
        
        
            767:{
              slidesPerView:3,
            },
            1400:{
              slidesPerView:4,
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay:true,
          freeMode: true,
          watchSlidesProgress: true,
        });

        var swiper2 = new Swiper(".myTrending2", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });
        // end trending

        // recommonded movies 
        // recommonded video 
var swiper = new Swiper(".myRecommondedmovies", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints:{
    0:{
      slidesPerView:1,
     
    },
    425:{
      slidesPerView:2,
    },



    767:{
      slidesPerView:3,
    },
    1400:{
      slidesPerView:4,
    },
  },
});





        // start -------category SEction--------------------------------------------
        var swiper = new Swiper(".myCategory", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },          
          slidesPerView: '1.3',
          centeredSlides: true,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: false,
              spaceBetween: 20,
        });
        // end category section          -------------------------------- 

// start videos section--------------------------------------------------------- 
// -----------------------------------------------------------------------
        var swiper = new Swiper(".myVideos", {
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },          
          slidesPerView: '1.3',
          centeredSlides: true,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: false,
              spaceBetween: 20,
        });


 // latest videos swiper script 
 var swiper = new Swiper(".myPopularvidoes", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints:{
    0:{
      slidesPerView:1,
     
    },
    425:{
      slidesPerView:2,
    },

    767:{
      slidesPerView:3,
    },
    1400:{
      slidesPerView:4,
    },
  },
});
//  latest vidoes
var swiper = new Swiper(".myLatestvidoes", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView:1,
     
    },
    425:{
      slidesPerView:2,
    },

    767:{
      slidesPerView:3,
    },
    1400:{
      slidesPerView:4,
    },
  },
});

// recommonded video 
var swiper = new Swiper(".myRecommondedvidoes", {
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints:{
    0:{
      slidesPerView:1,
     
    },
    425:{
      slidesPerView:2,
    },

    767:{
      slidesPerView:3,
    },
    1400:{
      slidesPerView:4,
    },
  },
});



        // end vidoes sections 


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

